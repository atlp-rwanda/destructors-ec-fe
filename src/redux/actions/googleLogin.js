/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const loginSuccess = createAsyncThunk(
  'redirect',
  async (googleQuery, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users/google/callback${googleQuery}`);
      return data;

    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
