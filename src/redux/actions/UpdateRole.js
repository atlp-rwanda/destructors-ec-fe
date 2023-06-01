/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../app/customAxios";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import { fetchUsers } from './FetchUsers';

export const updateRole = createAsyncThunk(
  'updateRole',
  async ( { id, newRole }, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch(`users/${id}/roles`, { newRole }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedUser = response.data.user;
      dispatch( { type: 'UPDATE_ROLE_SUCCESS', payload: updatedUser });
      dispatch(fetchUsers());
      showSuccessMessage('User role updated successfully \u{1F389}');
      return updatedUser;
    } catch (error) {
      showErrorMessage('Something went wrong \u{1F625}');
      return rejectWithValue(error);
    }
  },
);
