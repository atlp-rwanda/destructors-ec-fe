
import middleImage from "../../public/images/middleImage.png";
import bgImage from "../../public/images/bgsvg.svg";
import ResetPasswordForm from "../../components/forms/ResetForm";

const ResetPasswordPage = () => {
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
        <div className='flex flex-col xs:items-center xs:w-full xs:px-6 '>
          <h1 className='text-3xl lg:text-[50px] mb-[3rem] xs:text-[20] xs:ml-4 ml-4 '>Reset Password</h1>
          <p className='text-xl  xs:w-full xs:ml-4 ml-4 xs:mb-10'>
          Fill out your new password  And <br></br> confirm  it in their respective fields.
          </p>
        </div>

        <div className='hidden sm:flex w-[400px]'>
          <img src={middleImage} alt='' />
        </div>

        <div className='max-w-sm w-full mx-20 xs:mx-20'>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};
export default ResetPasswordPage;

