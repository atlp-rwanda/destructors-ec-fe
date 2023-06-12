import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import setLogout from '../logout/logout';
import React from 'react';

const SideBar = () => {
  const {
    showConfirmation,
    handleLogoutIconClick,
    renderLogoutConfirmation,
  } = setLogout();
  const location = useLocation();
  return (
    <div className='bg-white xs:hidden'>
      <img src="/logo-icon.png" alt="" className=' ml-5 mb-20 mt-10 xs:flex' />
      <div className='flex mt-15 mb-3'>
        <img src="/dashboard-icon.png" alt="" className='ml-5 mr-3'/>
        <span>Dashboard</span>
      </div>
      <div className='flex mt-5 mb-3'>
        <img src="/group-icon.png" alt="" className='ml-5 mr-3'/>
        <span>Assign Role</span>
      </div>
      <div className={`flex items-center mt-5 mb-3 ${location.pathname === '/users' ? 'bg-blue-400 ' : ''}`}>
        <Link to="/users" className="flex items-center">
          <img src="/assignRole-icon.png" alt="" className='ml-5 mr-3'/>
          <span>Users</span>
        </Link>
      </div>
      <div className='flex mt-5 mb-3'>
        <img src="/setting-icon.png" alt="" className='ml-5 mr-3'/>
        <span>Settings</span>
      </div>
      <div className='flex mt-5 mb-3 hover:cursor-pointer' onClick={handleLogoutIconClick}>
        <img src="/logout-icon.png" alt="" className='ml-5 mr-3 '/>
        <span>Logout</span>
        {showConfirmation && renderLogoutConfirmation()}
      </div>
    </div>
  );
};

export default SideBar;
