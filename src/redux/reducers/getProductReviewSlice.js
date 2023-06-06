/* eslint-disable no-restricted-syntax */
import { createSlice } from "@reduxjs/toolkit";
import fetchProductReviews from "../actions/getReviewProduct";

const getProductReviewsSlice = createSlice({
  name: 'productReviews',
  initialState: {
    reviews: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        const { productId, reviews } = action.payload;
        state.reviews[productId] = reviews;
      })
      .addCase(fetchProductReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default getProductReviewsSlice.reducer;
