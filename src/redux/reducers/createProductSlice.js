/* eslint-disable no-restricted-syntax */
import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "../actions/createProduct";

const initialState = {
  value: [],
  isLoading: false,
  error: null,
};
const createProductSilce = createSlice({
  name: "addProduct",
  initialState,
  extraReducers: builder => {

    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

const { reducer } = createProductSilce;

export default reducer;
