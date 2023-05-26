/* eslint-disable no-restricted-syntax */
import { createSlice } from "@reduxjs/toolkit";
import { retrieveAllProducts, searchProducts } from "../actions/searchProducts";

const initialState = {
  products: [],
  status: 'loading',
  error: null,
};
const searchProductsSlice = createSlice({
  name: "searchProducts",
  initialState,
  extraReducers: builder => {
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.status = 'failed';
        state.error = action.payload.payload;
      } else {
        state.status = 'succeeded';
        state.products = action.payload.products;
      }
    })
      .addCase(searchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },

});

export const allProductsSlice = createSlice ({
  name:'allProducts',
  initialState: {
    products: [],
  },
  reducers:{},
  extraReducers: (builder) =>{
    builder
      .addCase(retrieveAllProducts.pending, (state) =>{
        state.status = 'laoding';
      })
      .addCase(retrieveAllProducts.fulfilled, (state, action)=>{
        state.status = 'succeeded';
        state.products = action.payload.products;
      })
      .addCase(retrieveAllProducts.rejected, (state, action)=>{
        state.status = 'failed',
        state.error = action.payload;
      });
  },
});

export const searchSlice = createSlice ({
  name:'search',
  initialState: {
    value: false,
  },
  reducers:{
    searchMode: ( state ) => {
      state.value = true;
    },
    removeSearchMode: ( state ) => {
      state.value = false;
    },
  },
});

export const { searchMode, removeSearchMode } = searchSlice.actions;
const { reducer } = searchProductsSlice;
export default reducer;

