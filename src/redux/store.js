import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./reducers/signupSlice";
import usersReducer from "./reducers/AdminSlice";
const store = configureStore({
  reducer: {
    signup: signupSlice,
    users:  usersReducer,
  },
});

export default store;
