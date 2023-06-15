/* eslint-disable eol-last */
/* eslint-disable no-restricted-syntax */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../app/customAxios';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';

export const login = createAsyncThunk('login', async (loginData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', loginData);
    if (data.message === 'please verify your email...') {
      return showSuccessMessage(data.message);
    }
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    showErrorMessage(error.response.data.message);
    return rejectWithValue(error.response);
  }
});

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builer) => {
    builer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const loginActions = (state) => state.login.data;

export default loginSlice.reducer;