import * as counterSlice from "./reducers/counterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./reducers/createProductSlice";
import categoriesReducer from "./reducers/retriveCategoriesSlice";
import userReducer from "./reducers/userSlice";

const allReducers = combineReducers({
  userProfile: userReducer,
  counter: counterSlice.default,
  isLogged: (state = false, action) => {
    switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
    }
  },
  createProduct: productReducer,
  categories: categoriesReducer,
});

export default allReducers;
