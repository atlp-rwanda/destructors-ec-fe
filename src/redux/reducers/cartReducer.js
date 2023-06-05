import { createSlice } from '@reduxjs/toolkit';
import { postCart, fetchCart, clearCart, updateCartItemQuantity, removeFromCart } from '../actions/cartActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.product
        .map((item, index) => ({
          ...item,
          id: index + 1,
        }));
      })
      .addCase(postCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.product
  
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.itemId);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      
    builder.addCase(clearCart, (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    });
  },
});


export const cartUpdate = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(updateCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.product
      })
      .addCase(updateCartItemQuantity.rejected, (state) => {
        state.loading = false;
        state.error = action.payload;
      });}
    });

export default cartSlice.reducer;

