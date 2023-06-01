import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import HomeNavbar from "../components/HomeNavBar";
import store from "../redux/store";

describe("NavBar", () => {
  it("render navbar component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomeNavbar />
        </Provider>
      </BrowserRouter>
    );

    it("render navbar with required list", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomeNavbar />
          </Provider>
        </BrowserRouter>
      );
      const list = screen.getByRole("list", {
        name: /navItems/i,
      });
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");
      expect(items.length).toBe(6);
    });
  });
});
