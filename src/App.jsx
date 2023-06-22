import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import GetUsers from "./components/Admin/GetUser";
import SignupPage from "./pages/auth/Signup";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./components/products/ProductDetails";
import LoginPage from "./pages/auth/LoginPage";
import CreateProduct from "./pages/CreateProductPage";
import CreateProductForm from "./components/forms/CreateProductForm";
import UpdatePasswordPage from "./pages/profile/UpdatePasswordPage";
import ViewProfile from "./pages/profile/ViewProfile";
import EditProfile from "./pages/profile/EditProfile";
import EditAddress from "./pages/profile/EditAddress";
import DashboardLayout from "./layout/DashboardLayout";
import TwoFactor from "./pages/auth/TwoFactor";
import ResetPasswordPage from "./pages/auth/ResetPassword";
import ForgetPasswordPage from "./pages/auth/ForgetPassword";
import VerifyEmailPage from "./components/account/VerifyEmail";
import ProductUpdate from "./components/forms/updateProductForm";
import CartPage from "./pages/CartPage";
import SucessPayment from "./components/payment/SucessPayment";
import OrderedProduct from "./pages/OrderedProduct";
import { WishListComonent } from "./components/wishlist/WishListComonent";
import setLogout from "./components/logout/logout";
import SellerProduct from "./components/products/SellerProducts";
import SalesPage from "./pages/SalesPage";
import NavBar from "./components/navBar/NavBar";
import BottomNav from "./components/navBar/BottomNav";
import ErrorPage from "./pages/ErrorPage";
import AdminGetUsersPage from "./pages/GetUserPage";
import OrdersPage from "./pages/profile/GetOrderPage";
import Welcome from "./pages/WelcomePage";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import SuccessLayout from "./layout/SuccessLayout";
import ProfileLayout from "./layout/ProfileLayout";
import UserAuth from "./utils/UserAuth";
import StatisticPage from "./pages/StatisticPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/carts", element: <CartPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/auth/signup", element: <SignupPage /> },
      { path: "/auth/login", element: <LoginPage /> },
      { path: "/auth/2fa?", element: <TwoFactor /> },
      { path: "/auth/forget-password", element: <ForgetPasswordPage /> },
      { path: "/auth/reset-password", element: <ResetPasswordPage /> },
      { path: "/verify-email", element: <VerifyEmailPage /> },
      { path: "/home", element: <Welcome /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },

  {
    path: "/",
    element: (
      <UserAuth>
        <SuccessLayout />
      </UserAuth>
    ),
    children: [
      { path: "/payment-success", element: <OrderedProduct /> },
      { path: "/product-wishes", element: <WishListComonent /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/",
    element: <ProfileLayout />,

    children: [
      { path: "/profile", element: <ViewProfile /> },
      { path: "/profile/update-profile", element: <EditProfile /> },
      { path: "/profile/update-password", element: <UpdatePasswordPage /> },
      { path: "/profile/update-address", element: <EditAddress /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/dashboard/",
    element: (
      <UserAuth>
        <DashboardLayout />
      </UserAuth>
    ),
    children: [
      { path: "", element: <StatisticPage /> },
      { path: "users", element: <AdminGetUsersPage /> },
      { path: "seller/sales", element: <SalesPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "seller/products", element: <SellerProduct /> },
      { path: "seller/add-product", element: <CreateProductForm /> },
      {
        path: "seller/products/:id/update-product",
        element: <ProductUpdate />,
      },
    ],
  },
];

const router = (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  </BrowserRouter>
);

function App() {
  return router;
}
export default App;
