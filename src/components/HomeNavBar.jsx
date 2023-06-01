import React from "react";
import { Link } from "react-router-dom";
import Logo from "../public/images/logo.svg";

const HomeNavbar = () => {
  const navItems = [
    { title: "Home", paths: "/" },
    { title: "About", paths: "/" },
    { title: "Pages", paths: "/" },
    { title: "Contact", paths: "/" },
    { title: "SignIn", paths: "/auth/login" },
    { title: "Register", paths: "/auth/signup" },
  ];
  return (
    <nav className='py-2.5 px-20 flex items-center justify-between w-full'>
      <a href='/' className='flex items-center'>
        <img src={Logo} className='h-12 sm:h-16' alt='destructors Logo' />
        <span className='self-center text-xl font-semibold whitespace-nowrap'>
          {/* Destructors */}
        </span>
      </a>
      <button
        data-collapse-toggle='navbar-default'
        type='button'
        className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
        aria-controls='navbar-default'
        aria-expanded='false'
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
      <ul className='md:flex hidden flex-1 flex-col p-4 mt-4 justify-between max-w-[54rem] rounded-lg bg-inherit bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
        {navItems.map((navItem) => (
          <li key={navItem.title}>
            <Link
              to={navItem.paths}
              className='py-2 pl-3 pr-4 text-gray-700 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2E9E8F] md:p-0 '
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default HomeNavbar;
