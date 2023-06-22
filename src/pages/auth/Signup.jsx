import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/forms/SignupForm";
import middleImage from "../../public/images/middleImage.png";
import bgImage from "../../public/images/bgsvg.svg";
import GoogleLogin from "../../components/GoggleLogin";
import HomeNavbar from "../../components/HomeNavBar";

const SignupPage = () => {
  const data = useSelector((state) => state.signup.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  });

  return (
    <div>
      <div className='flex flex-col w-full md:flex-row md:h-full md:justify-between justify-center items-center xs:flex-grow recursive'>
        <img
          src={bgImage}
          alt=''
          className='absolute inset-x-0 bottom-0 pointer-events-none'
        />
        <div className='flex flex-col xs:items-center xs:w-full xs:px-6 ml-20'>
          <h1 className='text-3xl lg:text-[50px] mb-[3rem] '>Sign Up</h1>
          <p className='text-xl  xs:w-full '>
            already a user ?
            <br />
            <a href='/auth/login' className='text-[#2D719D] pt-2'>
              sign in!
            </a>
          </p>
        </div>

        <div className='hidden sm:flex w-[400px]'>
          <img src={middleImage} alt='' />
        </div>

        <div className='flex flex-col max-w-sm w-full mx-20'>
          <SignupForm />
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
    </div>
  );
};
export default SignupPage;
