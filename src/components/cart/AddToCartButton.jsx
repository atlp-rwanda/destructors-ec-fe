import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCart } from '../../redux/actions/cartActions';
import addToCart from '../../assets/addToCart.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      const cartData = { productId };
      const result = await dispatch(postCart(cartData));
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
      <Link to="/carts">
        <img src={addToCart} alt='addtocart' onClick={handleSubmit} />
      </Link>
    </div>
  );
};

export default AddToCartButton;
