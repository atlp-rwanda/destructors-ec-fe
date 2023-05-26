import { createSlice } from "@reduxjs/toolkit";
import { updateProduct } from "../actions/updateProduct";

const initialState={
    value:[],
    isLoading:false,
    error:null,
}

const updateProductSlice = createSlice({
    name: "productUpdate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(updateProduct.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
          const updatedProduct = action.payload;
          const index = state.value.findIndex(
            (product) => product.id === updatedProduct.id
          );
          if (index !== -1) {
            state.value[index] = updatedProduct;
          }
          state.isLoading = false;
          state.error = null;
        })
        .addCase(updateProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
  });
  
export default updateProductSlice.reducer;
