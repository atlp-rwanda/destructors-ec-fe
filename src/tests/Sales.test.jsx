import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SalesList from '../components/sales/Sales';
import SalesPage from '../pages/SalesPage';
import Rectangle from '../components/sales/utils/Rectangle';
describe('Sales Status Updates', () => {
  it('It should render Sales List component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SalesList />
        </Provider>
      </BrowserRouter>
    );
  });
});

describe('Sales Status Updates', () => {
  it('It should render Sales Page', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SalesPage />
        </Provider>
      </BrowserRouter>
    );
  });
});

describe('Sales Status Updates', () => {
  it('It should render Sales Statistics', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Rectangle />
        </Provider>
      </BrowserRouter>
    );
  });
});
