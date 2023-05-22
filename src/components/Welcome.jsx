import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const Welcome = () => {
  return (
    <div>
      <a href='https://react.dev' target='_blank'>
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

export default Welcome;
