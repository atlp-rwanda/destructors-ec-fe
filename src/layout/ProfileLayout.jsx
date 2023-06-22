import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import BottomNav from "../components/navBar/BottomNav";
import NavBar from "../components/navBar/NavBar";

const ProfileLayout = () => {
  return (
    <div>
      <Header />
      <BottomNav />
      <NavBar />
      <main className='auth-main-container'>
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;
