import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import axios from "../redux/app/customAxios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import SucessPayment from '../components/payment/SucessPayment';

describe("payment", () => {

  let mock;
  let orderMock = {
    Orders: [
      {
        mount: 10000,
        billingAddress: null,
        createdAt: "2023-06-05T22:42:15.944Z",
        email: "katros250@gmail.com",
        id: "21a7b086-66fa-4d26-9eb3-97a07d8062e9",
        paymentId: "cs_test_b1r6h3y5GrUQYKI7DOIx89Yj1a2UhElK3pka3URqeKnFUCkc3CuvNKQdnH",
        products: [{
          image: ['https://res.cloudinary.com/dboqnapgi/image/upload/v1684942313/OurProject/dbfse3argnt7a8loztsm.jpg'],
          name: "headphones",
          price: 10000,
          quantity: 1,
          sellerId: "1d67a1ff-921d-4544-be36-d7d7c0993a92",
        }],
        status: "payed",
        updatedAt: "2023-06-05T22:42:15.944Z",
        userId: "b235ec8a-89a8-437d-b2a8-2f769bf842a5",
      },
    ],
  };

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("render  'No Order was found' when payment is not done", () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/orders`).reply(200, orderMock);
    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/success?paymentId=cs_test_b1r6h3y5GrUQYKI7DOIx89Yj1a2UhElK3pka3URqeKnFUCkc3CuvNKQdnH`).reply(200, orderMock);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SucessPayment />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('No Order was found!!')).toBeInTheDocument();

  });
  it("render  'Order Created Successfully' after payment is successful", () => {

    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/orders`).reply(200, orderMock);
    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/success?paymentId=cs_test_b1r6h3y5GrUQYKI7DOIx89Yj1a2UhElK3pka3URqeKnFUCkc3CuvNKQdnH`).reply(200, orderMock);

    const location = {
      ...window.location,
      search: '?paymentId=cs_test_b1r6h3y5GrUQYKI7DOIx89Yj1a2UhElK3pka3URqeKnFUCkc3CuvNKQdnH',
    };
    Object.defineProperty(window, 'location', {
      writable: true,
      value: location,
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SucessPayment />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Order Created Successfully')).toBeInTheDocument();
    expect(screen.getByText('headphones')).toBeInTheDocument();

  });
});
