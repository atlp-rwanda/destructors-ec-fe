import React from "react";
import userEvent from '@testing-library/user-event'
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import axios from "../redux/app/customAxios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import DetailCard from "../components/products/DetailCard";


describe('deatail card component', () => {

    let mock;
    let wishlistMock =
    {
        "item": {
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
          "updatedAt": "2023-05-22T12:40:17.535Z",
          "Seller": {
            "firstname": "Iribagiza",
            "lastname": "Jeannette",
            "email": "kiteyon348@cutefier.com"
          }
        }
      }

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it("render single product ", () => {

        mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/1d252a26-396e-45bb-82a4-b3a72176bd0e`).reply(200, wishlistMock);

        render(
            <BrowserRouter>
                <Provider store={store}>
                <DetailCard product={wishlistMock.item} />
                </Provider>
            </BrowserRouter>
            );

expect(screen.getByText("jordan")).toBeInTheDocument();


})


})