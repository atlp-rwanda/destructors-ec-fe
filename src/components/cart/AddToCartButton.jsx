import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCart } from '../../redux/actions/cartActions';
import addToCart from '../../assets/addToCart.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCart } from '../../redux/actions/cartActions';
const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    try {
      const cartData = { productId };
      const result = await dispatch(postCart(cartData));
      await dispatch(fetchCart());
      if (postCart.fulfilled.match(result)) {
        toast.success(result.payload.message);
      } else {
        const errorMessage = result.payload?.message || 'Failed to create cart.';
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Error while posting cart:', error);
    }
  };

  return (
    <div>
        <img src={addToCart} alt='addtocart' onClick={handleSubmit} />

    </div>
  );
};

export default AddToCartButton;
