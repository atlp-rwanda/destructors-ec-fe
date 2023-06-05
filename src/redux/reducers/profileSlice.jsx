import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile, updateUserProfile } from "../../services/userApi";

const initialState = {
  user: {
    user_details: {
      billingAddress: {
        email: "",
        phoneNo: "",
        province: "",
        district: "",
        street: "",
      },
    },
  },
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: null,
};

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await getUserProfile();
      return { userProfile: response.userProfile, payload: response }; // Include the entire response as payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUserProfileData = createAsyncThunk(
  "user/updateUserProfileData",
  async (profileData, thunkAPI) => {
    try {
      const response = await updateUserProfile(profileData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errorMessage = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload; // Use the error message from the action payload
      })
      .addCase(updateUserProfileData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errorMessage = null;
      })
      .addCase(updateUserProfileData.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateUserProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload; // Use the error message from the action payload
      });
  },
});

export default profileSlice.reducer;