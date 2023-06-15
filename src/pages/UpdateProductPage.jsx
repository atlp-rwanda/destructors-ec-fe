import ProductUpdate from '../components/forms/updateProductForm';
import NavBar from '../components/NavBar';
import profilePicture from '../assets/Frame 3.svg';
import backArrow from '../assets/Chev.svg';

const UpdateProductPage = () => {
  return (
    <div className=' absolute w-screen h-[fit-content] bg-[#f1eff4] xs:bg-white'>
      {/* <div className=' absolute flex top-5px right-[150px] p-7 space-x-[50px]'>
        <nav className='mr-[700px] flex space-x-3 '><img src={backArrow} className=" h-[12px] mt-1" alt="React logo" /><div className='text-sm'>All product</div></nav>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
        <img src={profilePicture} className=" h-[40px]" alt="React logo" />
      </div>
      < NavBar /> */}
      <ProductUpdate />
    </div>
  );
};

export default UpdateProductPage;
