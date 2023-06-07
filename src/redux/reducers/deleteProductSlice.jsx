/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';
import { createSlice } from '@reduxjs/toolkit';

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/products/${id}`);
      const { message } = response.data;
      return message;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const deleteProductSlice = createSlice({
  name: 'deleteProduct',
  initialState: {
    message: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.message = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default deleteProductSlice.reducer;
