/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const createProduct = createAsyncThunk(
  'createProduct',
  async (product) => {
    try {
      const { data } = await axios.post('/products', product);
      return data;

    } catch (error) {
      return error;
    }
  },
);
