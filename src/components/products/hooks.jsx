/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-syntax */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchSingleProduct } from "../../redux/actions/products";
import { useParams } from "react-router-dom";

export const useProductAll = (page) => {
  const product = useSelector((state) => state.products);
  const dispactch = useDispatch();
  useEffect(() => {
    dispactch(fetchProducts(page));
  }, [page]);
  return product;
};

export const useProductDetails = () =>{
  const { id } = useParams();
  const products = useSelector(
    (state) => state.productDetails,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);
  return products;
};
