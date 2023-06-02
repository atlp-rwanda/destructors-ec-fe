import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";
import { showSuccessMessage,showErrorMessage } from "../../utils/toast";

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ id, product,images }) => {
    try {
      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
        console.log("+++++++++",key)
      }
 images.forEach(element => {
  formData.append('image',element)
 });
      const { data } = await axios.patch(`/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showSuccessMessage(data.message)
      return data;
    } catch (error) {
      console.log("++++++++++",error.response)
      showErrorMessage(error.response.data.error.message)
      return error.response.data.error;
    }
  }
);