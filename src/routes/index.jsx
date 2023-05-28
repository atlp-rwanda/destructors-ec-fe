import { Route, Routes } from "react-router";
import GetUsers from "../components/Admin/GetUser";
import SignupPage from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";
import ProductDetails from "../components/products/ProductDetails";
import LoginPage from "../pages/auth/LoginPage";
import CreateProduct from "../pages/CreateProductPage";
import { UpdatePassword } from "../components/forms/UpdatePassword";
import ViewProfile from "../pages/profile/ViewProfile";
import EditProfile from "../pages/profile/EditProfile";
import EditAddress from "../pages/profile/EditAddress";
import DashboardLayout from "../layout/DashboardLayout";
import TwoFactor from "../pages/auth/TwoFactor";
import ResetPasswordPage from "../pages/auth/ResetPassword";
import ForgetPasswordPage from "../pages/auth/ForgetPassword";
import VerifyEmailPage from "../components/account/VerifyEmail";
import ProductUpdate  from "../pages/UpdateProductPage";
import CartPage from "../pages/CartPage";

const navigator = () => {
  return (
    <div>
      <Routes>
        <Route path='/users' element={<GetUsers />}></Route>
        <Route
          path='/profile/update-password'
          element={<UpdatePassword />}
        ></Route>
        <Route path='/dashboard' element={<DashboardLayout />}></Route>
        <Route path="/users" element={<GetUsers />}></Route>
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path='/auth/forget-password' element={<ForgetPasswordPage />} />
        <Route path='/auth/reset-password' element={<ResetPasswordPage/>} />
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/product" element={<CreateProduct />}></Route>
        <Route path="/profile" element={<ViewProfile />}></Route>
        <Route path="/profile/update-profile" element={<EditProfile />}></Route>
        <Route path="/profile/update-address" element={<EditAddress />}></Route>
        <Route path="/auth/2fa?" element={<TwoFactor/>}></Route>
        <Route path="/verify-email" element={<VerifyEmailPage />}></Route>
        <Route path="/products/:id/update-product" element={<ProductUpdate />}></Route>
  
        <Route path='/carts' element={<CartPage />}></Route>
      </Routes>
    </div>
  );
};
export default navigator;
