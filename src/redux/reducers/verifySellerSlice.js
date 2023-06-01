import axios from "../app/customAxios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const verifySeller = createAsyncThunk('verifySeller',
  // eslint-disable-next-line no-restricted-syntax
  async (userData, {rejectWithValue})=>{
    try {
      const response = await axios.post(`/users/login/validate/${userData.token}`, {otp:userData.otp});
      return response.data;
    } catch (error){
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifySellerSlice = createSlice({
  name:'verifySeller',
  initialState:{
    data:null,
    isLoading:false,
    error:null,
  },
  extraReducers: (builder) =>{
    builder
      .addCase(verifySeller.pending, (state)=>{
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifySeller.fulfilled, (state, actions)=>{
        state.isLoading = false;
        state.data = actions.payload;
        state.error = null;
      })
      .addCase(verifySeller.rejected, (state, actions)=>{
        state.isLoading = false,
        state.data = null,
        state.error = actions.payload;
      });
  },
});
export default verifySellerSlice.reducer;
