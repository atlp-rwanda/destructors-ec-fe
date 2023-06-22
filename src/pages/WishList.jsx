import NavBar from "../components/navBar/NavBar";
import UpPage from "../components/navBar/UpPage";
import React from "react";
import WishListComonent from "../components/wishlist/WishListComonent";

const WishListPage = () => {
  return (
    <div>
      <UpPage />
      <NavBar />
      <WishListComonent />
    </div>
  );
};

export default WishListPage;
