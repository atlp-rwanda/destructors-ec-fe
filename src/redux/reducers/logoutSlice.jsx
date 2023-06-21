/* eslint-disable no-param-reassign */
/* eslint-disable eol-last */
/* eslint-disable no-restricted-syntax */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';

export const logoutUser = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post('/users/logout');
    localStorage.clear();
    const { message } = response.data;
    return message;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const logoutSlice = createSlice({
  name: 'logout',
  initialState: {
    message: '',
    isLoading: false,
    error: '',
  },
  extraReducers: (builer) => {
    builer
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.message = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const logoutActions = (state) => state.logout.data;

export default logoutSlice.reducer;
