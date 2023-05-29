import { Route, Routes } from "react-router";
import SignupPage from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";
import ProductDetails from "../components/products/ProductDetails";
import LoginPage from "../pages/auth/LoginPage";
import CreateProduct from "../pages/CreateProductPage";
import DashboardLayout from "../layout/DashboardLayout";

const navigator = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth/signup' element={<SignupPage />} />
        <Route path='auth/login' element={<LoginPage />} />
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path='/product' element={<CreateProduct />}></Route>
        <Route path='/dashboard' element={<DashboardLayout />}></Route>
      </Routes>
    </div>
  );
};
export default navigator;
