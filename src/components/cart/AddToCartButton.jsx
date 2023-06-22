import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "../../redux/actions/cartActions";
import addToCart from "../../assets/addToCart.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchCart } from "../../redux/actions/cartActions";
const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    try {
      const cartData = { productId };
      const result = dispatch(postCart(cartData));
      dispatch(fetchCart());
    } catch (error) {
      console.error("Error while posting cart:", error);
    }
  };

  return (
    <div>
      <img src={addToCart} alt='addtocart' onClick={handleSubmit} />
    </div>
  );
};

export default AddToCartButton;
