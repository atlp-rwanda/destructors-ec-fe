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

const StatisticPage = () => {
  const [user, setUser] = useState();
  const info = getUserInfo();

  useEffect(() => {
    setUser(info);
  }, []);
  return (
    <div>
      {user?.data?.role === "seller" && (
        <>
          <UpStatisticsBar />
          <div className='w-[80%] flex gap-10 ml-10 xs:flex-col'>
            <WishedProducts />
            <ExpiredProducts />
          </div>
        </>
      )}
    </div>
  );
};

export default StatisticPage;
