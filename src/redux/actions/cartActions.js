import { toast } from "react-toastify";
import axios from "../app/customAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const postCart = createAsyncThunk(
  "cart/postCart",
  async (cartData, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post("/carts", cartData);
      toast.success(response.data.message);
      dispatch(fetchCart());

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("/carts");
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put("/carts", null);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (itemId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(`/carts/${itemId}`, null);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ itemId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/carts", { productId: itemId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export {
  postCart,
  fetchCart,
  clearCart,
  removeFromCart,
  updateCartItemQuantity,
};
