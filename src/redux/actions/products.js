/* eslint-disable no-restricted-syntax */
import axios from "../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem('token');
const fetchProducts = createAsyncThunk('products', async (page)=>{
  try {
    const { data } = await axios.get(`/products?page=${page}&size=15}`, {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return data;
  } catch (error){
    return error;
  }
});

const fetchSingleProduct = createAsyncThunk('product', async (id) =>{
  try {
    const product = await axios.get(`/products/${id}`, {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return product.data.item;
  } catch (error){
    return error;
  }
});
export {
  fetchProducts,
  fetchSingleProduct,
};
