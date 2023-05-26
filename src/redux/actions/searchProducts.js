/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const searchProducts = createAsyncThunk(
  'searchProducts',
  async ( productInfo ) => {
    try {
      const { data } = await axios.get('/products/search', { params: productInfo});
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const retrieveAllProducts = createAsyncThunk(
  'retrieveAllProducts',
  async () => {
    try {
      const { data } = await axios.get('/products/search');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
