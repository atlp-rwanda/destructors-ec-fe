import { createAsyncThunk } from "@reduxjs/toolkit";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import axios from "../app/customAxios";

  const submitProductReview = createAsyncThunk(
  'productReviews/submitReview',
  async ({ productId, rating, feedback }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const review = {
        rating,
        feedback,
      };
      const response = await axios.post(`/products/${productId}/reviews`, review, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newReview = response.data;
      showSuccessMessage(response?.data?.message);

      return newReview;
    } catch (error) {
      if (error.response?.data?.error) {
        showErrorMessage(`${error.response?.data?.error} \u{1F625}`);
      } else if ( error.response?.data?.message ){
        showErrorMessage(`${error.response?.data?.message} \u{1F625}`);
      } else {
        showErrorMessage('Something went wrong \u{1F625}');
      }
      return rejectWithValue(error);
    }
  }
);

export default submitProductReview;
