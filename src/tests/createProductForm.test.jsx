/* eslint-disable no-restricted-syntax */
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CreateProduct from "../components/forms/CreateProductForm";
import store from "../redux/store";
import axios from "../redux/app/customAxios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { ToastContainer } from "react-toastify";

describe("createProduct Form", () => {

  let mock;
  let categoriesMock = {
    categories: [
      {
        id: 'a9a96a11-d898-45d9-896f-11898966b893',
        name: 'furniture',
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: 'a0a96a86-d822-45d0-896f-11898966b894',
        name: 'electronics',
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: 'a8a96a86-d898-45d8-893f-11898966b895',
        name: 'shoes',
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: 'a7a96a86-d898-45d8-894f-11898966b896',
        name: 'fruits',
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
      {
        id: 'a6a16a86-d898-45d8-895f-11898966b897',
        name: 'bags',
        createdAt: "2023-05-14T11:13:18.840Z",
        updatedAt: "2023-05-14T11:13:18.840Z",
      },
    ],
  };

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("renders a product form with input fields", () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`).reply(200, categoriesMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByPlaceholderText("Name of product")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Product price")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Product quantity")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Product bonus")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add product description")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("29/06/2023")).toBeInTheDocument();

  });
  it('should correctly display default option', async () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`).reply(200, categoriesMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByRole("combobox")).toHaveDisplayValue(" --Select product categories-- ");
    expect(screen.getByRole("button", { name: "Save" })).toBeEnabled();
  });

  it('should create a product', async () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`).reply(200, categoriesMock);

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
          <ToastContainer />
        </Provider>
      </BrowserRouter>,
    );



    mock.onPost(`${import.meta.env.VITE_REACT_APP_API_URL}/products`).reply(201);

    const files = [
      new File(["hello"], "hello.geojson", { type: "application/json" }),
      new File(["there"], "hello2.geojson", { type: "application/json" }),
    ];

    const input = getByTestId("dropzone");
    await userEvent.type(screen.getByPlaceholderText(/Name of product/i), "name1");
    await userEvent.type(screen.getByPlaceholderText(/Product price/i), "1000");
    await userEvent.type(screen.getByPlaceholderText(/Product quantity/i), "100");
    await userEvent.type(screen.getByPlaceholderText(/Product bonus/i), "0");
    await userEvent.type(screen.getByPlaceholderText('29/06/2023'), "2023-06-29");
    await userEvent.type(screen.getByPlaceholderText(/Add product description/i), "name1qwertydfvfgdfbfgasdsdv");
    await userEvent.selectOptions(screen.getByRole("combobox"), "fruits");
    await userEvent.upload(input, files);
    await userEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(input.files).toHaveLength(2);
    expect(screen.getByRole("combobox")).toHaveDisplayValue("fruits");
  });
});
