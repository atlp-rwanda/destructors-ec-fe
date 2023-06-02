import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ProductUpdate from '../components/forms/updateProductForm';
import store from "../redux/store";
import axios from "../redux/app/customAxios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

describe('update a product',()=>{
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
        ]
    }

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
                    <ProductUpdate />
                </Provider>
            </BrowserRouter>
        );
        expect(screen.getByPlaceholderText("Name of product")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Product price")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Product quantity")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Product bonus")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Add product description")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("2023/06/21")).toBeInTheDocument();

    });
    it('should correctly display default option', async () => {

        mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`).reply(200, categoriesMock);

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ProductUpdate />
                </Provider>
            </BrowserRouter>
        )

        expect(screen.getByRole("combobox")).toHaveDisplayValue(" --Select product categories-- ");
        expect(screen.getByRole("button", { name: "Save" })).toBeEnabled();
    })
    it('should be able to update a product', async () => {
        mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`).reply(200, categoriesMock);
      
        render(
          <BrowserRouter>
            <Provider store={store}>
              <ProductUpdate />
            </Provider>
          </BrowserRouter>
        );
      
        await screen.findByRole("combobox");
      
        userEvent.type(screen.getByPlaceholderText("Name of product"), "Updated Product");
        userEvent.type(screen.getByPlaceholderText("Product price"), "999");
        userEvent.type(screen.getByPlaceholderText("Product quantity"), "10");
        userEvent.type(screen.getByPlaceholderText("Product bonus"), "5% off");
        userEvent.type(screen.getByPlaceholderText("Add product description"), "Updated description");
        userEvent.type(screen.getByPlaceholderText("2023/06/21"), "30/06/2023");
      
        userEvent.selectOptions(screen.getByRole("combobox"), "electronics");
      
        userEvent.click(screen.getByRole("button", { name: "Save" }));

      });
})
