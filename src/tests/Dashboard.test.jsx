import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Sidebar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLayout from "../layout/DashboardLayout";
import store from "../redux/store";

describe("Dashboard", () => {
  it("render Sidebar components", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </BrowserRouter>
    );
  });
  it("render Dashboard header components", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DashboardHeader />
        </Provider>
      </BrowserRouter>
    );
  });
  it("render Dashboard Layout components", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DashboardLayout />
        </Provider>
      </BrowserRouter>
    );
  });
});
