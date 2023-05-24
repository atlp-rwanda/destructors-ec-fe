import React from 'react';
import Dashboard from '../components/Dashboard';
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const DashboardPage = () => {
  return (
    <div>
      {/* <nav className="flex sm:justify-center space-x-4 bg-blue-300  h-[50px]">
            </nav> */}
      <nav className='flex sm:justify-center space-x-4 h-[50px] ml-[850px]'>
        <Link to='/about' className='  font-bold px-3 py-2 text-slate-700 ml-0'>
          <h4>About us</h4>
        </Link>
        <Link to='/product' className='  font-bold px-3 py-2 text-slate-700 ml-0'>
          <h4>Add Product</h4>
        </Link>
      </nav>
      <a href='https://react.dev' target='_blank' rel="noreferrer">
        <img
          src={reactLogo}
          className='logo react ml-5 mt-20'
          alt='React logo'
        />
      </a>
      <h1 className='text-6xl text-blue-500 ml-5'> WELCOME TO DESTRUCTORS </h1>{" "}
      <br />
    </div>
  );
};

