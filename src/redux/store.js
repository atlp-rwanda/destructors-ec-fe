import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./reducers/signupSlice";
import {
  productSlice,
  singleProduct,
} from './reducers/products';

const store = configureStore({
  reducer: {
    signup: signupSlice,
    products: productSlice.reducer,
    productDetails: singleProduct.reducer,
  },
});

export default store;
