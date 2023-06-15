import { describe, expect, vi, beforeAll, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ExpiredProducts from "../components/seller/ExpiredProducts";
import WishedProducts from "../components/seller/WishedProducts";
import UpStatisticsBar from "../components/seller/UpStatisticsBar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import * as hooksMocking from '../components/products/hooks';
import * as hooksMockings from '../utils/getUserInfo';
import MockAdapter from "axios-mock-adapter";
import axios from "../redux/app/customAxios";
import getUserInfo from "../utils/getUserInfo";

describe('Seller statistics', ()=>{
  const dumyInfo = ()=>{
    return {
      "productWishes": [
        {
          "productId": "b9af1042-087d-42cd-9032-f5dfc00caf76",
          "count": "1",
        },
      ],
    };
  };

  const dumyInfo1 = ()=>{
    return {
      "item": {
        "id": "b9af1042-087d-42cd-9032-f5dfc00caf76",
        "name": "Air jordan 4 2022",
        "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        "price": 10000,
        "quantity": 100,
        "isAvailable": true,
        "categoryId": "a8a96a86-d898-45d8-893f-11898966b895",
        "sellerId": "dd2b7b9c-552e-4015-9639-8e5faf076f87",
        "bonus": 10,
        "images": [
          "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684082375/OurProject/bhe6md9fcpyh5yghgwr7.jpg",
          "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684082374/OurProject/vqrex4fcwezhmpryjpwn.jpg",
          "https://res.cloudinary.com/ddsml4rsl/image/upload/v1684082374/OurProject/jey0sq4lki1b3jizt03w.jpg",
        ],
        "expiryDate": "2043-04-29T00:00:00.000Z",
        "averageRating": null,
        "isExpired": false,
        "createdAt": "2023-05-14T16:39:35.378Z",
        "updatedAt": "2023-05-14T16:39:35.378Z",
      },
    };
  };
  let mock;
  //   vi.spyOn(hooksMocking, '').mockImplementation(dumyInfo);
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });
  const data1 = 2;
  test('renders ExpiredProducts component with product data', () => {
    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/product-wishes`).reply(200, dumyInfo);
    mock.onGet(`${import.meta.env.VITE_REACT_APP_API_URL}/products/${data1}`).reply(200, dumyInfo1);
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <WishedProducts />
        </Provider>
      </BrowserRouter>);
    expect(getByText('Loading Please wait')).toBeInTheDocument();
  });
  const dumyInfo2 = ()=>{
    return {
      isLoading: false,
      products: [
        {
          id: 1,
          images: ['image1.jpg'],
          name: 'Product 1',
          price: 10,
          quantity: 5,
        },
        {
          id: 2,
          images: ['image2.jpg'],
          name: 'Product 2',
          price: 15,
          quantity: 3,
        },
      ],
    };
  };
  vi.spyOn(hooksMocking, 'useExpiredProducts').mockImplementation(dumyInfo2);
  test('renders ExpiredProducts component with product data', () => {
    const {getByText} = render(
      <BrowserRouter>
        <Provider store={store}>
          <ExpiredProducts />
        </Provider>
      </BrowserRouter>);
    expect(getByText('Image')).toBeInTheDocument();
  });
  const dumyinfo3 = ()=>{
    return [
      {
        expiredProducts:0,
        getProductWishes:0,
        lostProductsRevenue:100,
        month:"April",
        productsSold:78,
        productsSoldRevenue:0,
        year:"2023",
      },
    ];
  };
  const dumyinfo4 = () =>{
    return {
      data: {
        email:"mugwanezalambert12b@gmail.com",
        id:"dd2b7b9c-552e-4015-9639-8e5faf076f87",
        isActive:true,
        role:"seller",
      }};
  };
});
