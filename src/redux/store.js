
import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./reducers/signupSlice";
import {
  productSlice,
  singleProduct,
} from './reducers/products';
import loginReducer from "./reducers/loginSlice";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import usersReducer from "./reducers/AdminSlice";

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    expireReducer(loginReducer, {
      persistedAtKey: '__persisted_at',
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
import productReducer from './reducers/createProductSlice';
import categoriesReducer from './reducers/retriveCategoriesSlice';

const store = configureStore({
  reducer: {
    signup: signupSlice,
    users: usersReducer,
    products: productSlice.reducer,
    productDetails: singleProduct.reducer,
    login:persistedLogin,
    createProduct: productReducer,
    categories: categoriesReducer,
  },
  middleware: [...middlewares, thunk],
});

export const persistor = persistStore(store);
export default store;
