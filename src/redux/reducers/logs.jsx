/* eslint-disable no-restricted-syntax */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../app/customAxios';

export const getLogs = createAsyncThunk(
  'getLogs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users/logs');
      return response.data.logs;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const logsSlice = createSlice({
  name: 'getLogs',
  initialState: {
    logs: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getLogs.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getLogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
// export const selectLog = (state) => state.getLogs;
export default logsSlice.reducer;

