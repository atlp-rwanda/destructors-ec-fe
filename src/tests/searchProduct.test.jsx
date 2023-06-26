/* eslint-disable no-restricted-syntax */
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import SearchField from "../components/searchIputField/SearchField";
import SearchedProducts from "../components/searchIputField/SearchedProducts";
import store from "../redux/store";
import axios from "../redux/app/customAxios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

describe("createProduct Form", () => {
  let mock;
  let categoriesMock = {
    categories: [
      {
        id: "a9a96a11-d898-45d9-896f-11898966b893",
        name: "furniture",
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: "a0a96a86-d822-45d0-896f-11898966b894",
        name: "electronics",
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: "a8a96a86-d898-45d8-893f-11898966b895",
        name: "shoes",
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: "a7a96a86-d898-45d8-894f-11898966b896",
        name: "fruits",
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: "a6a16a86-d898-45d8-895f-11898966b897",
        name: "bags",
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
    ],
  };
  let productsMock = {
    products: [
      {
        name: "television",
        description: "New product",
        price: 2000,
        quantity: 20,
        bonus: 0,
        expiryDate: "2023-05-14T11:13:18.840Z",
        categoryId: "a6a16a86-d898-45d8-895f-11898966b897",
        sellerId: "a8a96a86-d898-45d8-893f-11898966b895",
        images:
          "https://res.cloudinary.com/dboqnapgi/image/upload/v1685454205/OurProject/efvw84uvxjxz67qbvgms.png",
      },
    ],
  };

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("renders searchInputField", () => {
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .reply(200, categoriesMock);
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/search`)
      .reply(200, productsMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByPlaceholderText("search for products")
    ).toBeInTheDocument();
  });
  it("renders searchInputField", () => {
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .reply(200, categoriesMock);
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/search`)
      .reply(200, productsMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByPlaceholderText("search for products")
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("Filters")).toBeInTheDocument();
    expect(screen.getByTestId("searchButton")).toBeInTheDocument();
  });
  it("renders searchInputField", async () => {
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .reply(200, categoriesMock);
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/search`)
      .reply(200, productsMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </BrowserRouter>
    );

    await userEvent.click(screen.getByDisplayValue("Filters"));
    expect(screen.getByPlaceholderText("Minimum price")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Maximum price")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("2022/06/10")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveDisplayValue(
      " --Select product categories-- "
    );
  });
  it("renders searchSuggestion", async () => {
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .reply(200, categoriesMock);
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/search`)
      .reply(200, productsMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByPlaceholderText("search for products"),
      "t"
    );
    expect(screen.getByText("television")).toBeInTheDocument();
  });
  it("renders searchSuggestion", async () => {
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .reply(200, categoriesMock);
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/search`)
      .reply(200, productsMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByPlaceholderText("search for products"),
      "t"
    );
    expect(screen.getByText("television")).toBeInTheDocument();
  });

  it("should search product by date of expiry", async () => {
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .reply(200, categoriesMock);
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/search`)
      .reply(200, productsMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
          <SearchedProducts />
        </Provider>
      </BrowserRouter>
    );

    await userEvent.click(screen.getByDisplayValue("Filters"));
    await userEvent.type(
      screen.getByPlaceholderText("2022/06/10"),
      "2023-06-29"
    );
    await userEvent.click(screen.getByTestId("searchButton"));
    expect(screen.getByText("television")).toBeInTheDocument();
  });
  it("should return No product found", async () => {
    let productMock = {
      products: [],
    };
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .reply(200, categoriesMock);
    mock
      .onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/search`)
      .reply(200, productMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
          <SearchedProducts />
        </Provider>
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByPlaceholderText("search for products"),
      "tourch"
    );
    await userEvent.click(screen.getByDisplayValue("Filters"));
    await userEvent.selectOptions(screen.getByRole("combobox"), "fruits");
    await userEvent.type(screen.getByPlaceholderText("Maximum price"), "1000");
    await userEvent.click(screen.getByTestId("searchButton"));
    expect(screen.getByText("Product Not Found")).toBeInTheDocument();
  });
});
