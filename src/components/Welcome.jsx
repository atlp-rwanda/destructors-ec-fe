import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/actions/googleLogin';
import Spinner from './Spinner';
import { showErrorMessage, showSuccessMessage } from '../utils/toast';

const Welcome = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const googleCredetials = useSelector((state) => state.googleAuth);
  const googleQuery = location.search;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginSuccess(googleQuery));
  }, []);

  if (googleCredetials.value) {
    showSuccessMessage('Login Successfully');
    navigate('/');
  } else if (googleCredetials.error){
    showErrorMessage('Google login failed');
    navigate('/auth/login');
  }

  return (
    <div className=' py-[20%]'>

      {googleCredetials.isLoading &&
      <div className='flex justify-center items-center flex-col h-full w-full'>
        <p>Loading...</p>
        <Spinner />
      </div>}
    </div>
  );
};

export default Welcome;
