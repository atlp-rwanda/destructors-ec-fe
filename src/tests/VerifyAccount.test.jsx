import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import VerifyEmailPage from "../components/account/VerifyEmail";
describe("Verify User Account", () => {
  it("renders Verify Email Page component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VerifyEmailPage />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
