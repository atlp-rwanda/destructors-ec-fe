/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { logoutUser } from '../../redux/reducers/logoutSlice';
import { showErrorMessage } from '../../utils/toast';

const setLogout = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [logoutConfirmed, setLogoutConfirmed] = useState(false);
  const confirmationRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelConfirmation = () => {
    setShowConfirmation(false);
    setLogoutConfirmed(false);
  };

  const handleClickOutside = (event) => {
    if (
      showConfirmation &&
      !confirmationRef.current.contains(event.target) &&
      event.target !== confirmationRef.current
    ) {
      cancelConfirmation();
    }
  };

  const handleContainerClick = (event) => {
    event.stopPropagation();
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showConfirmation]);

  const handleLogout = async (event) => {
    event.stopPropagation();
    try {
      const response = await dispatch(logoutUser()).unwrap();
      toast.success(response);
      navigate('/auth/login');
      cancelConfirmation();
    } catch (error) {
      showErrorMessage(error);
    }
  };

  const openConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationCheck = () => {
    setLogoutConfirmed(!logoutConfirmed);
  };

  const handleLogoutIconClick = () => {
    if (showConfirmation) {
      cancelConfirmation();
    } else {
      openConfirmation();
    }
  };

  const renderLogoutConfirmation = () => (
    <div
      className='fixed inset-0 flex top-0 left-0 w-full h-full items-center justify-center bg-gray-700 bg-opacity-75'
      style={{ zIndex: 9999 }}
      onClick={handleContainerClick}>
      <div
        className='w-96 max-w-md p-6 text-red-700 bg-white rounded-lg shadow  dark:text-red-200'
        role='alert'
        ref={confirmationRef}>
        <div className='flex items-center mb-4'>
          <FaSignOutAlt className='w-6 h-6 text-brRed mr-2 logout-icon' />
          <span className='text-lg font-semibold text-brRed logout-icon'>
            Logout Confirmation
          </span>
        </div>
        <div className='text-base w-60 font-normal mb-4 mt-2 text-colors-brand'>
          Are you sure you want to logout?
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <button
              className='inline-flex ml-40 border border-red justify-center w-full px-2 py-1 text-base font-medium text-red bg-white rounded-lg hover:bg-white hover:text-bgRed focus:ring-2 focus:outline-none '
              onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return {
    showConfirmation,
    logoutConfirmed,
    handleLogout,
    handleConfirmationCheck,
    handleLogoutIconClick,
    renderLogoutConfirmation,
  };
};

export default setLogout;
