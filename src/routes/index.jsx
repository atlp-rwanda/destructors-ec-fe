import { Route, Routes } from "react-router";
import GetUsers from "../components/Admin/GetUser";
import SignupPage from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";
import ProductDetails from "../components/products/ProductDetails";
import LoginPage from "../pages/auth/LoginPage";
import CreateProduct from "../pages/CreateProductPage";
import { UpdatePassword } from "../components/forms/UpdatePassword";

const navigator = () => {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<GetUsers />}></Route>
        <Route path='/auth/signup' element={<SignupPage />} />
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path='/product' element={<CreateProduct />}></Route>
        <Route path='/profile/update-password' element={<UpdatePassword />}></Route>
      </Routes>
    </div>
  );
};
export default navigator;
