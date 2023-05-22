import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GoogleLogin from '../components/GoggleLogin';

describe('GoogleLogin', () => {

  it('should redirect to the Google login URL when the Google button is clicked', () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const googleLoginUrl = import.meta.env.VITE_GOOGLE_LOGIN_APP_API_URL;
    const loginUrl = `${baseUrl}${googleLoginUrl}`;
    window.location = { href: '' };

    render(<GoogleLogin />);

    const loginButton = screen.getByRole('button');
    fireEvent.click(loginButton);

    expect(window.location.href).toBe(loginUrl);
  });
});
