/* eslint-disable no-restricted-syntax */
import { createSlice } from "@reduxjs/toolkit";
export const notificationsSlice = createSlice ({
  name:'notifications',
  initialState: {
    value: false,
  },
  reducers:{
    increment: ( state, action ) => {
      state.value = action.payload;
    },
    decrement: ( state ) => {
      if (state.value && state.value != 0){
        state.value -= 1;
      }
    },
    removeAll: ( state ) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, removeAll } = notificationsSlice.actions;
