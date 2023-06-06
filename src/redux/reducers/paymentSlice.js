import { createSlice } from "@reduxjs/toolkit";
import { payment } from "../actions/paymentAction";

const initialState = {
  link: null,
  isLoading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(payment.fulfilled, (state, action ) => {
        state.link = action.payload;
      })
      .addCase(payment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(payment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { paymentSlice };
