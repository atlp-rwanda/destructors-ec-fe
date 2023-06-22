import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../../components/forms/LoginForm";
import middleImage from "../../public/images/middleImage.png";
import bgImage from "../../public/images/bgsvg.svg";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../utils/getUserInfo";
import GoogleLogin from "../../components/GoggleLogin";
import HomeNavbar from "../../components/HomeNavBar";

const LoginPage = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const navigate = useNavigate();
  const info = getUserInfo();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (info?.data?.role === "seller"){
        navigate("/dashboard");
      } else if (info?.data?.role === "admin") {
        navigate("/dashboard/users");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className='flex flex-col w-full md:flex-row md:h-full md:justify-between justify-center items-center xs:flex-grow recursive'>
        <img
          src={bgImage}
          alt=''
          className='absolute inset-x-0 bottom-0 pointer-events-none'
        />
        <div className='flex flex-col xs:items-center xs:w-full xs:px-6 ml-20'>
          <h1 className='text-3xl lg:text-[50px] mb-[3rem] '>Sign in</h1>
          <p className='text-xl  xs:w-full '>
            if you don’t have an account you can
            <br />
            <a href='/auth/signup' className='text-[#2D719D] pt-2'>
              Register here!
            </a>
          </p>
        </div>

        <div className='hidden sm:flex w-[400px]'>
          <img src={middleImage} alt='' />
        </div>

        <div className='flex flex-col max-w-sm w-full mx-20'>
          <LoginForm />

          <div className='flex items-center justify-center gap-2'>
            <hr className='flex-grow border-gray-300 border-t ' />
            <span className='px-4 text-[#ACADAC]'>Or continue with</span>
            <hr className='flex-grow border-gray-300 border-t' />
          </div>
          <div className='flex items-center justify-center mt-4'></div>
          <div className='flex items-center justify-center mt-4'>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
