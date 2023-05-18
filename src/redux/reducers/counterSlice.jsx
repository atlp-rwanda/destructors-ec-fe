/* eslint-disable no-restricted-syntax */

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
