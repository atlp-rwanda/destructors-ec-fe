import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./reducers/signupSlice";

const store = configureStore({
  reducer: {
    signup: signupSlice,
  },
});

export default store;
