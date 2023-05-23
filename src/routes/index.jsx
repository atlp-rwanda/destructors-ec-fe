import { Route, Routes } from "react-router";
import Login from "../components/Login";
import SignupPage from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";
import ProductDetails from "../components/products/ProductDetails";

const navigator = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth/signup' element={<SignupPage />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
};
export default navigator;
