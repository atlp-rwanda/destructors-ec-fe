import React from "react";
import userEvent from '@testing-library/user-event'
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import axios from "../redux/config/axios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import AddToCartButton from "../components/cart/AddToCartButton";
// import addToCart from '../assets/addToCart.svg'
describe('cart component', () => {

    let mock;
    let cartMock =
       {
            "id": "7bfa3c74-5c87-4acc-98a3-abcc0c22af13",
            "product": [
              {
                "id": "1d252a26-396e-45bb-82a4-b3a72176bd0e",
                "name": "jordan",
                "price": 30000,
                "quantity": 2,
                "images": [
                  "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684759216/OurProject/kna0zxkvqhaamkmvso7r.jpg"
                ],
                "sellerId": "d2d0cc1e-5c7d-469d-946a-c7ae5e582e69"
              },
              {
                "id": "dde53cd2-5ad2-4237-aded-9a78873ddca4",
                "name": "mangoe",
                "price": 600,
                "quantity": 2,
                "images": [
                  "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684939130/OurProject/pkjxxpxjbmtkxc8ugh0a.jpg"
                ],
                "sellerId": "d2d0cc1e-5c7d-469d-946a-c7ae5e582e69"
              }
            ],
            "total": 61200
          }
    

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it("render cart button ", () => {

        mock.onGet('http://localhost:3000/api/v1/carts').reply(200, cartMock);

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <AddToCartButton/>
                </Provider>
            </BrowserRouter>
            );


const image =document.querySelector("img")
expect(image.alt).toContain('addtocart')


})

it("addto cart button actionn ", async () => {

    mock.onGet('http://localhost:3000/api/v1/carts').reply(200, cartMock);

    render(
        <BrowserRouter>
            <Provider store={store}>
                <AddToCartButton/>
            </Provider>
        </BrowserRouter>
        );

const image =document.querySelector("img")
expect(image.alt).toContain('addtocart')

})
})