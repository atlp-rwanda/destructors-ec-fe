/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { useProductAll, useProductDetails } from "../components/products/hooks";
import { Provider } from "react-redux";
import store from "../redux/store";
import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("test useProductAll hooks", () => {
  test("testing useProductAll", () => {
    const TestComponent = () => {
      const product = useProductAll(1);
      return <p>Hello</p>;
    };
    const { getByText } = render(
      <Provider store={store}>
        <TestComponent />
      </Provider>,
    );
    expect(getByText("Hello")).toBeDefined();
  });

  test("testing useProductDetails", () => {
    vi.doMock('react-router-dom', () => ({
      ...vi.requireActual('react-router-dom'),
      useParams: vi.fn(),
    }));
    const TestComponent = () => {
      const product = useProductDetails(1);
      return <p>Hello</p>;
    };
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <TestComponent />
        </Provider>
      </BrowserRouter>,
    );
    expect(getByText("Hello")).toBeDefined();
  });
});
