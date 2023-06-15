/* eslint-disable no-restricted-syntax */
import { createSlice } from "@reduxjs/toolkit";
import { loginSuccess } from "../actions/googleLogin";

const initialState = {
  value: false,
  isLoading: false,
  error: null,
};
const googleAuthSilce = createSlice({
  name: "googleAuth",
  initialState,
  extraReducers: builder => {

    builder
      .addCase(loginSuccess.pending, (state) => {
        state.isLoading = true;
        state.value = null;
        state.error = null;
      })
      .addCase(loginSuccess.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
        state.error = action.payload;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginSuccess.rejected, (state, action) => {
        state.value = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

const { reducer } = googleAuthSilce;

export default reducer;
