/* eslint-disable no-restricted-syntax */
import axios from "../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem('token');

const wishedProduct = createAsyncThunk('wished-Producte', async () =>{
  try {
    const { data } = await axios.get('/product-wishes', {
      headers : {
        Authorization:`Bearer ${token}`,
      },
    });
    let productsList = [];
    const productDetails = data.productWishes.map(async (item)=>{
      const getDetail = await getWishedProductsDetails(item.productId);
      productsList.push({productDetails:getDetail, quantity:item.count});
      return productsList;
    });
    const productsData = await Promise.all(productDetails);
    return productsData;
  } catch (error) {
    return error;
  }
});

const getStatistics = createAsyncThunk('/statistics', async ()=>{
  try {
    const {data} = await axios.get('/stats', {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return data;
  } catch (error){
    return error;
  }
});
const getWishedProductsDetails = async (data1)=>{
  try {
    const {data} = await axios.get(`/products/${data1}`);
    return data;
  } catch (error){
    return error;
  }
};

const getFilteredProducts = createAsyncThunk('/getExpiredProducts', async ()=>{
  try {
    const data = await axios.get('/products', {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    if (data.data.products){
      const products = data.items.filter((data) => data.isExpired);
      return products;
    }
    return [];
  } catch (error){
    return error;
  }
});
export {
  wishedProduct,
  getWishedProductsDetails,
  getStatistics,
  getFilteredProducts,
};
