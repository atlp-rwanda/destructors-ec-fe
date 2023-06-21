import React from "react";
import userEvent from '@testing-library/user-event'
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import axios from "../redux/app/customAxios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import AddToWishList from '../components/wishlist/AddToWishList';


describe('wishlist component', () => {

    let mock;
    let wishlistMock =
    {
        "products": [
          {
            "id": "1d252a26-396e-45bb-82a4-b3a72176bd0e",
            "name": "jordan",
            "description": "Donec ex neque, dignissim sit amet porta vel, scelerisque sed tortor. Vivamus aliquet ipsum ac rhoncus sodales. Maecenas sem risus, pretium sit amet augue et, dignissim accumsan nibh.",
            "price": 30000,
            "quantity": 50,
            "isAvailable": true,
            "categoryId": "a8a96a86-d898-45d8-893f-11898966b895",
            "sellerId": "d2d0cc1e-5c7d-469d-946a-c7ae5e582e69",
            "bonus": 10,
            "images": [
              "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684759216/OurProject/kna0zxkvqhaamkmvso7r.jpg"
            ],
            "expiryDate": "2023-09-29T00:00:00.000Z",
            "averageRating": null,
            "isExpired": false,
            "createdAt": "2023-05-22T12:40:17.535Z",
            "updatedAt": "2023-05-22T12:40:17.535Z"
          },
          {
            "id": "dde53cd2-5ad2-4237-aded-9a78873ddca4",
            "name": "mangoe",
            "description": " gladiator More Synonyms of warrior.",
            "price": 600,
            "quantity": 4,
            "isAvailable": true,
            "categoryId": "a7a96a86-d898-45d8-894f-11898966b896",
            "sellerId": "d2d0cc1e-5c7d-469d-946a-c7ae5e582e69",
            "bonus": 10,
            "images": [
              "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684939130/OurProject/pkjxxpxjbmtkxc8ugh0a.jpg"
            ],
            "expiryDate": "2023-06-29T00:00:00.000Z",
            "averageRating": null,
            "isExpired": false,
            "createdAt": "2023-05-24T14:38:51.398Z",
            "updatedAt": "2023-05-24T14:38:51.398Z"
          }
        ],
        "totalPages": 1
      }

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it("render wishlist button ", () => {

        mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/product-wishes`).reply(200, wishlistMock);

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <AddToWishList/>
                </Provider>
            </BrowserRouter>
            );

const image =document.querySelector("img")
expect(image.alt).toContain('addtowishlist')


})


})