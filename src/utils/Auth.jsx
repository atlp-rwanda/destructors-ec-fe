
import { Outlet, Navigate } from 'react-router-dom';

const Auth = () => {

  const userAuth = () => {
    const userlogin = localStorage.getItem('user');
    if (userlogin){
      return userlogin;
    } else {
      return userlogin;
    }

  };
  const user = userAuth();
  return  user ? <Outlet/> : <Navigate to='/login'/>;
};

export default Auth;
