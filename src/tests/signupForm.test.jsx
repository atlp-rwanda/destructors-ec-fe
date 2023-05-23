import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import SignupForm from "../components/forms/SignupForm";
import store from "../redux/store";

describe("SignupForm", () => {
  it("renders SignupForm component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignupForm />
        </Provider>
      </BrowserRouter>,
    );
    it("renders a form with required input fields", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SignupForm />
          </Provider>
        </BrowserRouter>,
      );
      expect(screen.getByPlaceholderText("firstnamekdsfjas")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("lastname")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    });
    it("validates form fields correctly", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SignupForm />
          </Provider>
        </BrowserRouter>,
      );

      const firstNameInput = screen.getByPlaceholderText("firstname");
      const lastNameInput = screen.getByPlaceholderText("lastname");
      const emailInput = screen.getByPlaceholderText("email");
      const password = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByLabelText("button", {
        name: "Signup",
      });

      // Test form validation when required fields are empty
      expect(submitButton).toBeDisabled();

      // Test form validation when required fields are filled
      expect(emailInput).not.toHaveValue();
      expect(firstNameInput).not.toHaveValue();
      expect(lastNameInput).not.toHaveValue();
      expect(password).not.toHaveValue();

      userEvent.type(emailInput, "example@example.com");
      userEvent.type(firstNameInput, "firstname");
      userEvent.type(lastNameInput, "lastname");
      userEvent.type(password, "password");

      expect(submitButton).toBeEnabled();
    });
  });
});
