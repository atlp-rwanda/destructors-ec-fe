import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./reducers/signupSlice";
import { productSlice, singleProduct } from "./reducers/products";
import loginReducer from "./reducers/loginSlice";
import resetPasswordSlice from "./reducers/resetPasswordSlice";
import resetEmailSlice from "./reducers/forgetPassword";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import expireReducer from "redux-persist-expire";
import usersReducer from "./reducers/AdminSlice";
import profileSlice from "./reducers/profileSlice";
import verifySellerSlice from "./reducers/verifySellerSlice";

import productReducer from "./reducers/createProductSlice";
import searchProductsReducer, {
  allProductsSlice,
  searchSlice,
} from "./reducers/searchProductsSlice";
import updateProductSlice from "./reducers/updateProductSlice";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    expireReducer(loginReducer, verifySellerSlice, {
      persistedAtKey: "__persisted_at",
      expireSeconds: 86400,
      expiredState: {
        data: null,
        isLoading: false,
        isAuthenticated: false,
      },
      autoExpire: false,
    }),
  ],
};
const persistedLogin = persistReducer(persistConfig, loginReducer);
const persistTwoAuth = persistReducer(persistConfig, verifySellerSlice);
import userSlice from "./reducers/userSlice";

import verifySlice from "./reducers/verifySlice";
import categoriesReducer from './reducers/retriveCategoriesSlice';
import cartReducer, { cartUpdate } from './reducers/cartReducer'
const store = configureStore({
  reducer: {
    signup: signupSlice,
    users: usersReducer,
    products: productSlice.reducer,
    productDetails: singleProduct.reducer,
    login: persistedLogin,
    createProduct: productReducer,
    categories: categoriesReducer,
    user: userSlice,
    profile: profileSlice,
    verifySeller: persistTwoAuth,
    searchedProducts: searchProductsReducer,
    filteredProducts: allProductsSlice.reducer,
    searchMode: searchSlice.reducer,
    resetPassword: resetPasswordSlice,
    resetEmail: resetEmailSlice,
    verify: verifySlice,
    productUpdate:updateProductSlice,
    cart: cartReducer,
    cartUpdate: cartUpdate.reducer
  },
  middleware: [...middlewares, thunk],
});

export const persistor = persistStore(store);
export default store;
