import { createSlice } from '@reduxjs/toolkit';
import { addProductToWishilist, getProductWishilist } from '../actions/wishListActions';

const initialState = {
  wishlistData: [],
  loading: false,
  error: null,
};

export const wishListPostslice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToWishilist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductToWishilist.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.productWishes;
        } else {
          state.wishlistData = action.payload;
        }
      })
      .addCase(addProductToWishilist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const wishListGetslice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductWishilist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductWishilist.fulfilled, (state, action) => {
        state.loading = false;
          state.wishlistData = action.payload.productWishes;

        
      })
      .addCase(getProductWishilist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: wishListPostsliceReducer } = wishListPostslice;
export const { reducer: wishListGetsliceReducer } = wishListGetslice;
