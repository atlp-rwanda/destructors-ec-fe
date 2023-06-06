import SucessPayment from '../components/payment/SucessPayment';
import React from 'react';
import UpPage from "../components/navBar/UpPage";
import BottomNav from "../components/navBar/BottomNav";
import NavBar from '../components/navBar/NavBar';

const OrderedProduct = () => {
  return (
    <div>
      <UpPage />
      <NavBar />
      <BottomNav />
      <SucessPayment />
    </div>
  );
};

export default OrderedProduct;
