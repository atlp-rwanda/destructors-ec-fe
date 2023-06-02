import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verifyUserAccount } from "../../services/userApi";

export const verifyAccount = createAsyncThunk("verify/verifyAccount", async (token, { rejectWithValue }) => {
  try {
    const response = await verifyUserAccount(token);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  loading: false,
  error: null,
  message: null,
};

const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {
    resetState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(verifyAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(verifyAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = verifySlice.actions;

export default verifySlice.reducer;
