import { createSlice } from '@reduxjs/toolkit';
import submitProductReview from '../actions/ratingAndFeebackActions';
const productReviewsSlice = createSlice({
  name: 'productReviews',
  initialState: {
    reviews: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitProductReview.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(submitProductReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews.push(action.payload);
    });

    builder.addCase(submitProductReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productReviewsSlice.reducer;
