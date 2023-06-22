import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col bg-[#F8F7FC] flex-grow mb-8'>
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
