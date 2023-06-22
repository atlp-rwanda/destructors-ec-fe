import React from "react";
import Sidebar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import { Outlet } from "react-router-dom";
import Product from "../components/products/Product";
import SellerProduct from "../components/products/SellerProducts";
function SellerProducts() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col bg-[#F8F7FC] flex-grow mb-8'>
        <DashboardHeader />
        <Outlet />
        <div className='flex justify-center flex-col'>
          <p className='sticky top-0 flex justify-center text-2xl font-rubik z-10 bg-[#f8f7fc]'>
            My Products
          </p>
          <SellerProduct />
        </div>
      </div>
    </div>
  );
}

export default SellerProducts;
