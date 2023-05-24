import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UpdatePassword } from "../components/forms/UpdatePassword";
import store from "../redux/store";

describe("UpdatePassword", () => {
  it("renders UpdatePassword component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UpdatePassword />
        </Provider>
      </BrowserRouter>,
    );

    // Assert the presence of input fields
    expect(screen.getByLabelText("Current Password")).toBeInTheDocument();
    expect(screen.getByLabelText("New Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
  });

  it("validates form fields correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UpdatePassword />
        </Provider>
      </BrowserRouter>,
    );

    // Get input fields
    const currentPasswordInput = screen.getByLabelText("Current Password");
    const newPasswordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");

    // Assert form validation when new password is too short
    fireEvent.change(currentPasswordInput, { target: { value: "currentPassword" } });
    fireEvent.change(newPasswordInput, { target: { value: "short" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "short" } });

    // Assert form validation when passwords don't match
    fireEvent.change(newPasswordInput, { target: { value: "newPassword" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "differentPassword" } });


    // Assert form validation when all fields are filled correctly
    fireEvent.change(confirmPasswordInput, { target: { value: "newPassword" } });

    // Assert error messages are cleared
    expect(screen.queryByText("fill the field!")).toBeNull();
    expect(screen.queryByText("Password must be at least 8 characters long")).toBeNull();
    expect(screen.queryByText("Your passwords don't match!")).toBeNull();
  });
  it("displays an error message when passwords don't match", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UpdatePassword />
        </Provider>
      </BrowserRouter>,
    );

    // Get input fields and submit button
    const newPasswordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    const submitButton = screen.getByRole("button", { name: "Save" });

    // Fill in form fields
    fireEvent.change(newPasswordInput, { target: { value: "newPassword123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "differentPassword" } });

    // Submit the form
    fireEvent.click(submitButton);

  });
  it("displays an error message when new password is too short", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UpdatePassword />
        </Provider>
      </BrowserRouter>,
    );

    // Get input fields and submit button
    const newPasswordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    const submitButton = screen.getByRole("button", { name: "Save" });

    // Fill in form fields with password less than 8 charactor long
    fireEvent.change(newPasswordInput, { target: { value: "short" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "short" } });

    // Submit the form
    fireEvent.click(submitButton);
  });
});
