import React from 'react';
import Google from '../assets/Google.png';
function GoogleLogin () {
  const handleLogin = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const googleLoginUrl = import.meta.env.VITE_GOOGLE_LOGIN_APP_API_URL;
    const loginUrl = `${baseUrl}${googleLoginUrl}`;
    window.location.href = loginUrl;
  };

  return (
    <div>
      <button onClick={handleLogin}>
        <img src={Google} alt="google logo" />
      </button>
    </div>
  );
}

export default GoogleLogin;
