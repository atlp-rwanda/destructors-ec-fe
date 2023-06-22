
import middleImage from "../../public/images/middleImage.png";
import bgImage from "../../public/images/bgsvg.svg";
import ForgetPasswordForm from "../../components/forms/ForgetForm";

const ForgetPasswordPage = () => {
  return (
    <div>
      <div className='flex items-center'>
      </div>
      <div className='flex flex-col w-full md:flex-row md:h-full md:justify-between justify-center items-center xs:flex-grow recursive'>
        <img
          src={bgImage}
          alt=''
          className='absolute inset-x-0 bottom-0 pointer-events-none'
        />
        <div className='flex flex-col xs:items-center xs:w-full xs:px-6 ml-20 xs:ml-2 w-60'>
          <h1 className='text-3xl lg:text-[40px] mb-[3rem] xs:text-2xl  xs:w-full'>Forget Your Password</h1>
          <p className='text-xl   xs:w-full xs:ml-0'>
          No need to worry, fill out your email address and we’ll send you the
            password-reset instructions.
          </p>
        </div>

        <div className='hidden sm:flex w-[400px]'>
          <img src={middleImage} alt='' />
        </div>

        <div className='max-w-sm w-full mx-20'>
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
};
export default ForgetPasswordPage;

