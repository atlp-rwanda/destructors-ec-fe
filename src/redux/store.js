import { configureStore } from '@reduxjs/toolkit';
import signupSlice from './reducers/signupSlice';
import { productSlice, singleProduct, fetchSellerProducts } from './reducers/products';
import loginReducer from './reducers/loginSlice';
import resetPasswordSlice from './reducers/resetPasswordSlice';
import resetEmailSlice from './reducers/forgetPassword';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import usersReducer from './reducers/AdminSlice';
import profileSlice from './reducers/profileSlice';
import verifySellerSlice from './reducers/verifySellerSlice';
import productReducer from './reducers/createProductSlice';
import { expiredProducts, getStaticsSlice, getWishedProductsSlice } from "./reducers/sellerStatistics";
import searchProductsReducer, {
  allProductsSlice,
  searchSlice,
} from './reducers/searchProductsSlice';
import updateProductSlice from './reducers/updateProductSlice';
import { paymentSlice } from './reducers/paymentSlice';
import userSlice from './reducers/userSlice';
import verifySlice from './reducers/verifySlice';
import { orderedProductsSlice } from './reducers/orderedProductsSlice';
import { salesReducer, salesDetailsReducer } from './reducers/saleSlice';
import { notificationsSlice } from './reducers/notifications';
import googleAuth from './reducers/googleAuthSlice';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    expireReducer(loginReducer, verifySellerSlice, googleAuth, {
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
const persistedGoogleLogin = persistReducer(persistConfig, googleAuth);
const persistTwoAuth = persistReducer(persistConfig, verifySellerSlice);
import { wishListPostslice } from './reducers/wishListSlice';
import { wishListGetslice } from './reducers/wishListSlice';
import categoriesReducer from './reducers/retriveCategoriesSlice';
import cartReducer, { cartUpdate } from './reducers/cartReducer';
import productReviewsSlice  from './reducers/reviewSlice';
import getProductReviewsSlice from './reducers/getProductReviewSlice';
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
    productUpdate: updateProductSlice,
    cart: cartReducer,
    cartUpdate: cartUpdate.reducer,
    payment: paymentSlice.reducer,
    orderedProduct: orderedProductsSlice.reducer,
    wishListPost: wishListPostslice.reducer,
    wishListGet: wishListGetslice.reducer,
    sales: salesReducer,
    salesDetails: salesDetailsReducer,
    wishedProducts: getWishedProductsSlice.reducer,
    statistics:getStaticsSlice.reducer,
    expiredProducts:expiredProducts.reducer,
    sellerProducts:fetchSellerProducts.reducer,
    notifications: notificationsSlice.reducer,
    googleAuth: persistedGoogleLogin,
    submitProductReview: productReviewsSlice,
    fetchProductReviews: getProductReviewsSlice,
  },
  middleware: [...middlewares, thunk],
});

export const persistor = persistStore(store);
export default store;
