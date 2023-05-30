/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import { fetchUsers } from './FetchUsers';

export const updateStatus = createAsyncThunk(
  'updateStatus',
  async (id, { dispatch }) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.patch(`users/${id}/status`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userId = response.data;
      dispatch({
        type: 'UPDATE_USER_STATUS',
        payload: userId,
      });
      dispatch(fetchUsers());
      showSuccessMessage('User updated successfully \u{1F389}');
      return userId;
    } catch (error) {
      console.log(error);
      showErrorMessage('Something went wrong \u{1F625}');
      throw error;
    }
  },
);
