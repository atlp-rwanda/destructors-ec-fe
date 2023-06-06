import {wishedProduct, getStatistics, getFilteredProducts} from "../actions/wishedProducts";
import { createSlice } from "@reduxjs/toolkit";

export const getWishedProductsSlice = createSlice({
  name:'wishedProducts',
  initialState: {
    data:[],
    isLoading:false,
    error: null,
  },
  reducers:{},
  extraReducers: (builder) =>{
    builder
      .addCase(wishedProduct.fulfilled, (state, actions)=>{
        state.isLoading = false,
        state.data = actions.payload,
        state.error = false;
      })
      .addCase(wishedProduct.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(wishedProduct.rejected, (state, actions)=>{
        state.isLoading = false;
        state.data = null;
        state.error = actions.payload;
      });
  },
});

export const getStaticsSlice = createSlice({
  name:'getStatics',
  initialState: {
    data:[],
    isLoading:false,
    error:null,
  },
  reducers:{},
  extraReducers:(builder) =>{
    builder
      .addCase(getStatistics.fulfilled, (state, actions) =>{
        state.isLoading = false;
        state.data = actions.payload;
        state.error = null;
      })
      .addCase(getStatistics.pending, (state)=>{
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStatistics.rejected, (state, actions) =>{
        state.isLoading = false;
        state.data = null;
        state.error = actions.payload;
      });
  },
});

export const expiredProducts = createSlice({
  name:"expiredProducts",
  initialState:{
    products:[],
    isLoading:false,
    error:null,
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
      .addCase(getFilteredProducts.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(getFilteredProducts.fulfilled, (state, actions) =>{
        state.isLoading = false;
        state.products = actions.payload;
      })
      .addCase(getFilteredProducts.rejected, (state, actions) =>{
        state.isLoading = false;
        state.products = null;
        state.error = actions.payload;
      });
  },
});
