import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ResetPasswordForm from "../components/forms/ResetForm";
import store from "../redux/store";

describe("ResetPasswordForm", () => {
  it("renders ResetPasswordForm component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ResetPasswordForm />
        </Provider>
      </BrowserRouter>,
    );
    it("renders a form with required input fields", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ResetPasswordForm />
          </Provider>
        </BrowserRouter>,
      );

      expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    });
    it("validates form fields correctly", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ResetPasswordForm />
          </Provider>
        </BrowserRouter>,
      );

      const  password1 = screen.getByPlaceholderText("password");
      const password2 = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByLabelText("button", {
        name: "Reset",
      });
      expect(password1).not.toHaveValue();
      expect(password2).not.toHaveValue();
      userEvent.type(password1, "password");
      userEvent.type(password2, "password");
      expect(submitButton).toBeEnabled();
    });
  });
});
