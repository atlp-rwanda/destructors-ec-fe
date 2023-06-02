/* eslint-disable no-restricted-syntax */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../app/customAxios";

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async ({ password, confirmPassword, token }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/users/reset-password/${token}`, {
        password,
        confirmPassword,
      });
      const { message } = response.data;
      return message;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState: {
    message: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.message = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectResetPassword = (state) => state.resetPassword;

export default resetPasswordSlice.reducer;
