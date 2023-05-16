/* eslint-disable eol-last */
import * as counterSlice from './reducers/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';

const allReducers = combineReducers({
  counter: counterSlice.default,
  isLogged: (state = false, action) => {
    switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
    }
  },
});

export default allReducers;