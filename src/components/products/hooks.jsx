/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchSingleProduct } from '../../redux/actions/products';
import { useParams } from 'react-router-dom';
import { getProductWishilist } from '../../redux/actions/wishListActions';
import { fetchCart } from '../../redux/actions/cartActions';
export const useProductAll = (page) => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(page));
    dispatch(fetchCart());
    dispatch(getProductWishilist());
  }, [page, dispatch]);

  return product;
};

export const useProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return products;
};
