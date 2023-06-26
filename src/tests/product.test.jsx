/* eslint-disable no-restricted-syntax */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Product from "../components/products/Product";
import { afterEach, describe, expect, test, vi } from "vitest";
import * as hooksModule from "../components/products/hooks";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Product component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("renders loading state", () => {
    const dummy = () => {
      return {
        status: "loading",
      };
    };
    vi.spyOn(hooksModule, "useProductAll").mockImplementation(dummy);
    const page = 1;
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Product page={page} />
        </Provider>
      </BrowserRouter>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  test("renders loading state", () => {
    const dummy = () => {
      return {
        status: "failed",
      };
    };
    vi.spyOn(hooksModule, "useProductAll").mockImplementation(dummy);
    const page = 1;
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Product page={page} />
        </Provider>
      </BrowserRouter>
    );

    expect(getByText("Failed to fetch products.")).toBeInTheDocument();
  });

  test("renders success state", () => {
    const dummy = () => {
      return {
        status: "succeeded",
      };
    };
    vi.spyOn(hooksModule, "useProductAll").mockImplementation(dummy);
    const page = 1;
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Product page={page} />
        </Provider>
      </BrowserRouter>
    );

    expect(getByText("Waiting for products")).toBeInTheDocument();
  });
});
