import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SalesList from '../components/sales/Sales';
import SalesPage from '../pages/SalesPage';
describe('Sales Status Updates', () => {
  it('It should render Sales List component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SalesList />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
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
