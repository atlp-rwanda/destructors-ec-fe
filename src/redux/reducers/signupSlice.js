/* eslint-disable no-restricted-syntax */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const signup = createAsyncThunk(
  "signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builer) => {
    builer
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const signupActions = (state) => state.signup.data;

export default signupSlice.reducer;
