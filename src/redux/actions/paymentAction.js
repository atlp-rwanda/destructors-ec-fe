/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const payment = createAsyncThunk(
  'payment',
  async () => {
    try {
      const { data } = await axios.post('/pay');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
