/* eslint-disable no-restricted-syntax */
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchSingleProduct, fetchProductss } from "../actions/products";

const initialState = {
  products: {
    products:[],
    pages:null,
  },
  status:'loading',
  error:null,
};

const productSlice = createSlice({
  name:'products',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchProducts.fulfilled, (state, { payload })=>{
        if (payload.error){
          state.status = 'failed';
          state.error = payload.payload;
        } else {
          state.status = 'succeeded';
          state.products = {...payload};
        }
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      });
  },
});

const singleProduct = createSlice ({
  name:'singleProduct',
  initialState,
  reducers:{},
  extraReducers: (builder) =>{
    builder
      .addCase(fetchSingleProduct.pending, (state) =>{
        state.status = 'laoding';
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action)=>{
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action)=>{
        state.status = 'failed',
        state.error = action.payload;
      });
  },
});

const fetchSellerProducts = createSlice({
  name:'sellerProducts',
  initialState,
  extraReducers:(builder) =>{
    builder
      .addCase(fetchProductss.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductss.fulfilled, (state, action)=> {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductss.rejected, (state, action)=>{
        state.status = 'failed';
        state.products = "";
        state.error = action.payload;
      });
  },
});
export {
  productSlice,
  singleProduct,
  fetchSellerProducts,
};
