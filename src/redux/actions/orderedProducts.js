/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const orderedProducts = createAsyncThunk(
  'orderedProducts',
  async () => {
    try {
      const { data } = await axios.get(`/orders`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
