/* eslint-disable no-restricted-syntax */
import { createSlice } from "@reduxjs/toolkit";
import { retrieveCategories } from "../actions/retreiveCategories";

const initialState = {
  value: [],
  isLoading: false,
  error: null,
};
const retreiveCategoriesSlice = createSlice({
  name: "getAllCategories",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(retrieveCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(retrieveCategories.fulfilled, (state, action )=> {
        state.value = action.payload.categories;
        state.isLoading = false;
      })
      .addCase(retrieveCategories.rejected, (state, action) => {
        state.value = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const { reducer } = retreiveCategoriesSlice;
export default reducer;
