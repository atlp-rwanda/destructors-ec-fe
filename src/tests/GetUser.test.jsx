
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GetUsers from '../components/Admin/GetUser';

const mockStore = configureStore([thunk]);
const initialState = {
  users: {
    isLoading: false,
    users: [
      { id: 1, firstname: 'John', lastname: 'Doe', email: 'john@example.com', role: 'buyer', isActive: true },
      { id: 2, firstname: 'Jane', lastname: 'Smith', email: 'jane@example.com', role: 'seller', isActive: false },
    ],
  },
};

describe('GetUsers', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <GetUsers />
        </Provider>
      </BrowserRouter>,
    );
  });

  test('renders the component', () => {
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Buyer')).toBeInTheDocument();
    const activeElements = screen.queryAllByText(/Active/);
    expect(activeElements).toHaveLength(2);

    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Seller')).toBeInTheDocument();
  });
});

