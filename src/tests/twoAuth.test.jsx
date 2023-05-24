import { render, screen, fireEvent } from '@testing-library/react';
import { vi, test } from 'vitest';
import TwoFactor from '../pages/auth/TwoFactor';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { userEvent } from '@storybook/testing-library';
import { Provider } from 'react-redux';

test('testing two factor authentication > should render the page', () => {
  render(
    <Router>
      <Provider store={store}>
        <TwoFactor />
      </Provider>
    </Router>,
  );

  expect(screen.getByText('Two Factor Authentication')).toBeInTheDocument();
});

test('testing two factor authentication > should test the input form', () => {
  vi.doMock('react-router-dom', () => ({
    ...vi.requireActual('react-router-dom'),
    useNavigate: vi.fn,
    useSearchParams: [new URLSearchParams('token=mockToken')],
  }));

  const mockSubmit = vi.fn();

  render(
    <Provider store={store}>
      <Router>
        <TwoFactor />
      </Router>
    </Provider>,
  );

  const otpCode = screen.getByPlaceholderText('Auth code');
  fireEvent.change(otpCode, { target: { value: '123456' } });

  const btn = screen.getByRole('button', { name: 'verify' });
  userEvent.click(btn);

  expect(mockSubmit).toBeDefined();
});
