import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "../public/icons/sidebar/dashboard.svg";
import Users from "../public/icons/sidebar/users.svg";
import Orders from "../public/icons/sidebar/orders.svg";
import Products from "../public/icons/sidebar/products.svg";
import Logout from "../public/icons/sidebar/logout.svg";
import Logo from "../public/images/logo.svg";
import Sales from "../public/icons/sidebar/sales.svg";
import Home from "../public/icons/sidebar/home.svg";
import getUserInfo from "../utils/getUserInfo";
import getBaseRoute from "../utils/extractRoute";
import Button from "./forms/Button";
import setLogout from "./logout/logout";

const Sidebar = ({ children }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);
  const [inSmallMode, setInSmallMode] = useState(false);
  const [activeUserRole, setActiveUserRole] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showConfirmation, handleLogoutIconClick, renderLogoutConfirmation } =
    setLogout();
  useEffect(() => {
    if (location) {
      const baseRoute = getBaseRoute(location.pathname);
      setActiveTab(baseRoute);
    }
  }, [location]);
  useEffect(() => {
    const info = getUserInfo();
    if (info) {
      setActiveUserRole(info?.data?.role);
    }
  }, []);
  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: Dashboard,
      scope: ["admin", "seller"],
    },
    {
      path: "/dashboard/users",
      name: "Users",
      icon: Users,
      scope: ["admin"],
    },
    {
      path: "/dashboard/orders",
      name: "Orders",
      icon: Orders,
      scope: ["buyer"],
    },
    {
      path: "/dashboard/seller/products",
      name: "Products",
      icon: Products,
      scope: ["seller"],
    },
    {
      path: "/dashboard/seller/sales",
      name: "Sales",
      icon: Sales,
      scope: ["seller"],
    },
    {
      path: "/",
      name: "Home",
      icon: Home,
      scope: ["seller", "admin", "buyer"],
    },
  ];
  return (
    <div
      className='flex bg-[#F8F7FC] h-[100vh] md:sticky top-0 shadow-sm mb-2'
      data-testid='sidebar'
    >
      <div className='bg-white xs:hidden'>
        <div className={`flex p-14 xs:p-6 ${inSmallMode ? "p-6" : ""}`}>
          <div className='logo'>
            <a href='/' className='flex items-center'>
              <img
                src={Logo}
                className={`h-6 sm:h-9 mr-1 ${
                  inSmallMode ? "hidden m-0" : ""
                } xs:hidden xs:m-0`}
                alt='Destructors Logo'
              />
              <span
                className={`self-center text-xl font-semibold whitespace-nowrap mr-6 xs:hidden ${
                  inSmallMode ? "hidden" : ""
                }`}
              ></span>
            </a>
          </div>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-3 xs:m-0 ${
              inSmallMode ? "ml-0" : ""
            }`}
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => setInSmallMode(!inSmallMode)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        {menuItems
          .filter((item) => item.scope.includes(activeUserRole))
          .map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className={`flex px-14 py-4 sidebar-link hover:bg-[#ecffe7] ${
                activeTab === item.path ? "bg-[#D7F9C5]" : ""
              } ${inSmallMode ? "justify-center px-6" : ""}`}
            >
              <img
                src={item.icon}
                alt='Icon'
                className={`w-[24px] h-[24px] ${inSmallMode ? "m-0" : ""}`}
              />
              <div className={`link_text ml-2 ${inSmallMode ? "hidden" : ""}`}>
                {item.name}
              </div>
            </Link>
          ))}
        <Button
          onClick={handleLogoutIconClick}
          className='!my-0 !p-0 h-full !bg-transparent '
          parentClassName={`px-14 py-4 hover:cursor-pointer hover:bg-bgRed ${
            inSmallMode ? "justify-center px-6" : ""
          } hover:bg-red-100`}
        >
          {" "}
          {showConfirmation && renderLogoutConfirmation()}
          <div
            className={`flex text-gray-600 ${
              inSmallMode ? "justify-center" : ""
            }`}
          >
            <img src={Logout} alt='Logout Icon' className='w-[24px] h-[24px]' />
            <div className={`ml-2 ${inSmallMode ? "hidden" : ""}`}>Logout</div>
          </div>
        </Button>
      </div>
      <div className='xs:flex hidden bg-white bottom-0 fixed w-full border border-t-2 justify-between p-4 z-50'>
        {menuItems
          .filter((item) => item.scope.includes(activeUserRole))
          .map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className={`${
                activeTab === item.path
                  ? "bg-[#64B937] rounded-full text-white"
                  : ""
              } p-4`}
            >
              <img src={item.icon} alt='Icon' className='w-[18px] h-[18px]' />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
