import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import ViewProfile from "../components/profile/ViewProfile";
import ProfileDetails from "../components/profile/ProfileDetails";

describe("User Profile", () => {
  it("renders ViewProfile component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ViewProfile />
        </Provider>
      </BrowserRouter>
    );
  });
});
