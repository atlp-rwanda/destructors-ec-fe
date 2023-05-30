/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/users/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const users = response.data.users;
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
      return users;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);
