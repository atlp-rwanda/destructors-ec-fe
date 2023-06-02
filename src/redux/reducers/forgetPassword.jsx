/* eslint-disable no-restricted-syntax */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../app/customAxios";

export const resetEmail = createAsyncThunk('resetEmail', async (email, { rejectWithValue }) => {
  try {
    const response = await axios.post('/users/reset-password', {
      email,
    });
    const {message} = response.data;
    return message;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});


export const resetEmailSlice = createSlice({
  name: 'resetEmail',
  initialState: {
    message: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builer) => {
    builer
      .addCase(resetEmail.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(resetEmail.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resetEmail.rejected, (state, action) => {
        state.message = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const resetEmailActions = (state) => state.resetEmail.data;

export default resetEmailSlice.reducer;

