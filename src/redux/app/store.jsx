/* eslint-disable eol-last */
import { configureStore } from '@reduxjs/toolkit';
import allReducers from '../index';

export const store = configureStore({
  reducer: allReducers,
});