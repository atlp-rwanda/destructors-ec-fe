import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

const fetchProductReviews = createAsyncThunk(
  'fetchReviews',
  async (productId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/products/${productId}/reviews`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const reviews = response.data;
      return { productId, reviews };
    } catch (error) {

      return rejectWithValue(error);
    }
  }
);

export default fetchProductReviews;
