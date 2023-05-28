/* eslint-disable no-restricted-syntax */
import '@testing-library/jest-dom';
import { render,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from '../components/products/Product';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as hooksModule from '../components/products/hooks';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('Product component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('renders loading state', () => {
    const dummy = ()=>{
      return {
        status:'loading',
      };
    };
    vi.spyOn(hooksModule, 'useProductAll').mockImplementation(dummy);
    const page = 1;
    const { getByText } = render(
      <BrowserRouter>
       <Provider store={store}>
        <Product page={page} />
       </Provider>
      </BrowserRouter>,
    );
screen.debug();
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('renders loading state', () => {
    const dummy = ()=>{
      return {
        status:'failed',
      };
    };
    vi.spyOn(hooksModule, 'useProductAll').mockImplementation(dummy);
    const page = 1;
    const { getByText } = render(
      <BrowserRouter>
       <Provider store={store}>
        <Product page={page} />
       </Provider>
      </BrowserRouter>,
    );

    expect(getByText('Failed to fetch products.')).toBeInTheDocument();
  });


  test('renders success state', () => {
    const dummy = ()=>{
      return {
        status:'succeeded',
        products: {
          items: [
            {
              id: '311b7bdd-997b-45ae-b470-edea87ad3bdf',
              name: 'Macbook pro 2020 m2 chip',
              description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
              price: 100000,
              quantity: 100,
              isAvailable: false,
              categoryId: 'a0a96a86-d822-45d0-896f-11898966b894',
              sellerId: 'dd2b7b9c-552e-4015-9639-8e5faf076f87',
              bonus: 10,
              images: [
                'https://res.cloudinary.com/ddsml4rsl/image/upload/v1684082149/OurProject/vfbwuljthszau7nmdfhk.jpg',
                'https://res.cloudinary.com/ddsml4rsl/image/upload/v1684082149/OurProject/wt4sgsajes0wqfdceu7w.png',
                'https://res.cloudinary.com/ddsml4rsl/image/upload/v1684082150/OurProject/vazo7qdwsspm1m1jyput.jpg',
              ],
              expiryDate: '2043-04-29T00:00:00.000Z',
              averageRating: null,
              isExpired: false,
              createdAt: '2023-05-14T16:35:50.122Z',
              updatedAt: '2023-05-14T16:35:50.122Z',
            },
          ],
          totalPages: 2,
        },
      };
    };
    vi.spyOn(hooksModule, 'useProductAll').mockImplementation(dummy);
    const page = 1;
    const { getByText } = render(
      <BrowserRouter>
      <Provider store={store}>
        <Product page={page} />
        </Provider>
      </BrowserRouter>,
    );

    expect(getByText('Macbook pro 2020 m2 chip')).toBeInTheDocument();
  });

  test('renders success state', () => {
    const dummy = ()=>{
      return {
        status:'succeeded',
      };
    };
    vi.spyOn(hooksModule, 'useProductAll').mockImplementation(dummy);
    const page = 1;
    const { getByText } = render(
      <BrowserRouter>
       <Provider store={store}>
        <Product page={page} />
       </Provider>
      </BrowserRouter>,
    );

    expect(getByText('Waiting for products')).toBeInTheDocument();
  });
});
