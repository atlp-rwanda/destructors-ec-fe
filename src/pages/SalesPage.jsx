import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../components/SideBar';
import DashboardHeader from '../components/DashboardHeader';
import { showErrorMessage } from '../utils/toast';
import SalesList from '../components/sales/Sales';
import getUserInfo from '../utils/getUserInfo';

const SalesPage = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const info = getUserInfo();
    setUser(info);
  }, []);
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col bg-[#F8F7FC] flex-grow mb-8'>
        <DashboardHeader />
        <Outlet />
        <div>
          {user?.data?.role === 'seller' && (
            <div className='flex justify-center'>
              <SalesList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
