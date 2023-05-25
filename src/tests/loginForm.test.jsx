/* eslint-disable no-unused-vars */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import LoginPage from "../pages/auth/LoginPage";

describe('Login  Page', () => {
  it('renders the login form', () => {
    render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>,
    );
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitBtn = screen.getByRole('button', { name: 'Sign in' });
    expect(emailInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('submits the form with valid credentials', () => {
    render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>,
    );
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitBtn = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Password123' } });
    fireEvent.click(submitBtn);
  });

  it('displays the password input field', () => {
    render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>,
    );
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();

  });
  it('displays the email input field', () => {
    render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>,
    );
    const passwordInput = screen.getByPlaceholderText('Enter your email');
    expect(passwordInput).toBeInTheDocument();


  });
});
