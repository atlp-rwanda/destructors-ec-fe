import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/SideBar';
import DashboardHeader from '../../components/DashboardHeader';
import { GetAllOrders } from '../../components/orders/getAllOrders';
import getUserInfo from '../../utils/getUserInfo';

const OrdersPage = () => {
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
          {user?.data?.role === 'buyer' && (
            <div className='flex justify-center'>
              <GetAllOrders />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
