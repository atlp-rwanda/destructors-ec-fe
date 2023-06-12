/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Seller from '../components/products/utils/Seller';

describe('HandleDeleteProduct', () => {
  test('renders delete confirmation', () => {
    const productId = '123';
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Seller />
        </Provider>
      </BrowserRouter>,
    );

    const deleteButton = screen.getByRole('button', {
      name: /delete product/i,
      class: 'border  border-red hover:bg-white hover:text-bgRed text-red bg-white rounded w-32 xs:w-28',
    });
    fireEvent.click(deleteButton);

    expect(screen.getByText('Are you sure you want to delete this product?')).toBeInTheDocument();
    expect(screen.queryAllByText('Delete Product').length).toBeGreaterThan(0);
    expect(screen.getByRole('button', {
      name: /yes/i,
      class: 'w-full px-2 py-1 text-base font-medium text-red bg-white border  border-red rounded-lg hover:bg-white hover:text-bgRed focus:ring-4 focus:outline-none focus:ring-red cursor-pointer',
    }));
    expect(screen.getByRole('button', {
      name: /no/i,
      class: ' w-full px-2 py-1 text-base font-medium  text-white bg-customBlue rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-20 cursor-pointer',
    }));
  });
});
