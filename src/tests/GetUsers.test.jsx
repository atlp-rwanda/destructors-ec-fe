
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../redux/store";
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GetUsers from '../components/GetUsers';
import { fetchUsers } from '../redux/actions/FetchUsers';
import { updateStatus } from '../redux/actions/UpdateUser';
vi.mock('../redux/actions/FetchUsers', () => ({
  fetchUsers: vi.fn(),
}));
vi.mock('../redux/actions/UpdateUser', () => ({
  updateStatus: vi.fn(),
}));

describe('GetUsers', () => {
  test('renders the component', () => {
    render(
      <BrowserRouter basename="/">
        <Provider store={store}>
          <GetUsers />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Assign Role')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('fetches users on component mount', () => {
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });

  test('disables account on disable button click', async () => {
    const user = { id: 'user1' };
    const disableButton = screen.getByText('Disable');
    fireEvent.click(disableButton);
    expect(disableAccount).toHaveBeenCalledWith(user);
    await waitFor(() => {
      expect(disableAccount).toHaveBeenCalledTimes(1);
    });
  });

  test('updates user status on activate button click', async () => {
    const user = { id: 'user1' };
    const activateButton = screen.getByText('Activate');
    fireEvent.click(activateButton);
    expect(updateStatus).toHaveBeenCalledWith(user);
    await waitFor(() => {
      expect(updateStatus).toHaveBeenCalledTimes(1);
    });
  });
});
