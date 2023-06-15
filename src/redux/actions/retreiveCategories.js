/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const retrieveCategories = createAsyncThunk(
  'retriveCategories',
  async () => {
    try {
      const { data } = await axios.get('/categories');
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);
