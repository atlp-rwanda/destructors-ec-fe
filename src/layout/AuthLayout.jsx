import React from "react";
import { Outlet } from "react-router";
import HomeNavbar from "../components/HomeNavBar";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <HomeNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
