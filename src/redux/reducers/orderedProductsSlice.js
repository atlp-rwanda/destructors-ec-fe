import { createSlice } from "@reduxjs/toolkit";
import { orderedProducts } from "../actions/orderedProducts";

const initialState = {
  data:{ Orders: []},
  isLoading: false,
  error: null,
};

const orderedProductsSlice = createSlice({
  name: 'orderedProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(orderedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(orderedProducts.fulfilled, (state, action ) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(orderedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { orderedProductsSlice };
