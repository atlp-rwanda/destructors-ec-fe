import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function AdminNavMobile () {
  const location = useLocation();
  return (
    <div className='hidden xs:fixed xs:bottom-0 xs:left-0 xs:w-full xs:relative xs:grid grid-cols-5 gap-4 bg-white px-4 mt-4'>
      <Link>
        <img src={"/group-icon.png"} alt="" className={`px-4 py-4 w-50 h-50  ${location.pathname === '/users' ? 'bg-blue-400 ' : ''}`} />
      </Link>
      <img src={"/dashboard-icon.png"} alt="" className='px-4 py-4 w-50 h-50'/>
      <img src={"/assignRole-icon.png"} alt="" className='px-4 py-4 w-30 h-30'/>
      <img src={"/logout-icon.png"} alt="" className='px-4 py-4 w-50 h-50'/>
      <img src={"/setting-icon.png"} alt="" className='px-4 py-4 w-50 h-50'/>
    </div>
  );
}

export default AdminNavMobile;
