/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import axios from "../app/customAxios";

const initialState = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  error: '',
  loading: false,
};

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async ({ currentPassword, newPassword, confirmPassword }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const userData = { currentPassword, newPassword, confirmPassword };
      const response = await axios.patch(`/users/update-password`, userData);
      if (response.status != 200) {
        const data = await response.data;
        return rejectWithValue(data.error);
      }

      const data = await response.data;
      showSuccessMessage(data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue("Failed to update password.");
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updatePassword.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatePassword.fulfilled, (state) => {
      state.loading = false;
      state.currentPassword = "";
      state.newPassword = "";
      state.confirmPassword = "";
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.payload ? action.payload : "Failed to update password.";
    });
  },
});

export const updatePwdActions = (state) => state.user;

export default userSlice.reducer;
