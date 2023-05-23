import { Route, Routes } from "react-router";
import SignupPage from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";
import ProductDetails from "../components/products/ProductDetails";
import LoginPage from "../pages/auth/LoginPage";

const navigator = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth/signup' element={<SignupPage />} />
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
};
export default navigator;
