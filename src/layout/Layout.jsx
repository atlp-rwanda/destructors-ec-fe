import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/navBar/NavBar";
import BottomNav from "../components/navBar/BottomNav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <BottomNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
