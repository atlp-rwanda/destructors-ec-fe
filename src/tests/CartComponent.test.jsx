import React from "react";
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import CartComponent from "../components/cart/CartComponent";
import axios from "../redux/app/customAxios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

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
               "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684759216/OurProject/kna0zxkvqhaamkmvso7r.jpg",
             ],
             "sellerId": "d2d0cc1e-5c7d-469d-946a-c7ae5e582e69",
           },
           {
             "id": "dde53cd2-5ad2-4237-aded-9a78873ddca4",
             "name": "mangoe",
             "price": 600,
             "quantity": 2,
             "images": [
               "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684939130/OurProject/pkjxxpxjbmtkxc8ugh0a.jpg",
             ],
             "sellerId": "d2d0cc1e-5c7d-469d-946a-c7ae5e582e69",
           },
         ],
         "total": 61200,
       };
  let PaymentLink = {
    payment_link: "https://checkout.stripe.com/c/pay/cs_test_a1oooCXU83Ckh6t7b9uZIZcKh7dDSdIoAha4UmHd8M4ETAGv9BSf9JbQ7i#fidkdWxOYHwnPyd1blpxYHZxWjA0SHEyUmFBZnJCYFw9TzdvU2xqTW9uZHVtfGNjdmtqakhTbDVydDRDbl9xdTA3Mk9vVV9AREpzcE5MTDBTUENBcjVSbTB3aEozcmBfQEQ8a0R2b2xWXGw9NTU0cEt3aDYxQCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
  };


  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("render empty cart ", () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/carts`).reply(200, cartMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <CartComponent/>
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText("your cart is empty")).toBeInTheDocument();
  });

  it("render cart with data", () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/carts`).reply(200, cartMock);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <CartComponent/>
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText("jordan")).toBeInTheDocument();
  });

  it("render total checkout", async () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/carts`).reply(200, cartMock);
    mock.onPost(`${import.meta.env.VITE_REACT_APP_API_URL}/pay`).reply(201, PaymentLink);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CartComponent/>
        </Provider>
      </BrowserRouter>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Checkout" }));

    expect(screen.getByRole("button", { name: "" })).toBeDisabled;
    expect(screen.getByText("jordan")).toBeInTheDocument();
  });
});
