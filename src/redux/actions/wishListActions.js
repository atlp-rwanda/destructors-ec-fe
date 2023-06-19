import axios from "../app/customAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const addProductToWishilist = createAsyncThunk(
  'product-wishes/postProduct',
  async( wishiListData ,{dispatch,rejectWithValue}) =>{
    try{
    const token = localStorage.getItem('token');
    const response = await axios.post('/product-wishes',wishiListData);
    dispatch(getProductWishilist());
    return response.data;
    }catch(error){
        return rejectWithValue(error.response.data)
    }
  }
)
const getProductWishilist = createAsyncThunk(
  'product-wishes/getProduct',
  async( _,{rejectWithValue}) =>{
    try{
    const token = localStorage.getItem('token');
    const response = await axios.get('/product-wishes');
    return response.data;
    }catch(error){
        return rejectWithValue(error.response.data)
    }
  }
)
export{addProductToWishilist, getProductWishilist};