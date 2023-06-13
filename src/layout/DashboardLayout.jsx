import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import { showErrorMessage } from "../utils/toast";
import UpStatisticsBar from "../components/seller/UpStatisticsBar";
import WishedProducts from "../components/seller/WishedProducts";
import ExpiredProducts from "../components/seller/ExpiredProducts";
import getUserInfo from "../utils/getUserInfo";

const DashboardLayout = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      showErrorMessage("You are not logged in");
      return navigate("/auth/login");
    }
  }, [isAuthenticated]);
  useEffect(()=>{
    const info = getUserInfo();
    setUser(info);
  }, []);
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col bg-[#F8F7FC] flex-grow mb-8'>
        <DashboardHeader />
        {user?.data?.role === "seller" && (
          <><UpStatisticsBar /><div className="w-[80%] flex gap-10 ml-10 xs:flex-col">
            <WishedProducts />
            <ExpiredProducts />
          </div></>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
