import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import BottomNav from "../components/navBar/BottomNav";
import NavBar from "../components/navBar/NavBar";

const SuccessLayout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <BottomNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SuccessLayout;
