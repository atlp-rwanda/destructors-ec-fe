import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import GetUsers from "../components/Admin/GetUser";
import getUserInfo from "../utils/getUserInfo";

const AdminGetUsersPage = () => {
  const [user, setUser] = useState();
  const info = getUserInfo();

  useEffect(() => {
    setUser(info);
  }, []);
  return (
    <div className='flex'>
      <div className='flex flex-col bg-[#F8F7FC] flex-grow mb-8'>
        <div>
          {user?.data?.role === "admin" && (
            <div className='flex justify-center'>
              <GetUsers />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGetUsersPage;
