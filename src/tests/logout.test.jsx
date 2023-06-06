/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Sidebar from '../components/SideBar';

describe('Sidebar', () => {
  test('renders logout confirmation', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </BrowserRouter>,
    );

    const logoutButtons = screen.queryAllByRole('button', {
      name: /logout/i,
      class: 'w-full my-2 h-[45px] rounded-md bg-[#2D719D] py-2 px-3 text-sm font-semibold text-white hover:bg-[#2198e7] !my-0 !p-0 h-full !bg-transparent',
    });
    const logoutButton = logoutButtons[0];
    fireEvent.click(logoutButton);
    expect(screen.queryAllByText('Logout Confirmation')).toHaveLength(2);
    expect(screen.queryAllByText('Are you sure you want to logout?')).toHaveLength(2);
  });
});
