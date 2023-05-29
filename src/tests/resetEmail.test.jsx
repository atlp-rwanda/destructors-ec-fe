import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ForgetPasswordForm from "../components/forms/ForgetForm";
import store from "../redux/store";

describe("ResetForm", () => {
  it("renders resetForm component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ForgetPasswordForm />
        </Provider>
      </BrowserRouter>,
    );
    it("renders a form with required input fields", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ForgetPasswordForm />
          </Provider>
        </BrowserRouter>,
      );
      expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    });
    it("validates form fields correctly", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ForgetPasswordForm />
          </Provider>
        </BrowserRouter>,
      );

      const emailInput = screen.getByPlaceholderText("email");
      const submitButton = screen.getByLabelText("button", {
        name: "Send",
      });
      expect(submitButton).toBeDisabled();
      expect(emailInput).not.toHaveValue();
      userEvent.type(emailInput, "example@example.com");
      expect(submitButton).toBeEnabled();
    });
  });
});
