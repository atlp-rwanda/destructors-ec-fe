/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Link } from "react-router-dom";
import setLogout from '../../components/logout/logout';

function BottomNav () {
  const {
    showConfirmation,
    handleLogoutIconClick,
    renderLogoutConfirmation,
  } = setLogout();
  return (
    <div className='h-10 bg-[#F7F8FA] w-full flex items-center flex-row mt-2 justify-evenly font-rubik'>
      <div className='flex flex-row gap-10 mt-2  font-rubik'>
        <Link to= '/'>
          <p>HOME</p>
        </Link>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>
      <p className='mt-2 font-rubik'>07888888888</p>
      <img src="/logout-icon.png" alt="" className='ml-5 mr-3  hover:cursor-pointer ' onClick={handleLogoutIconClick}/>
      {showConfirmation && renderLogoutConfirmation()}
    </div>
  );
}

export default BottomNav;
