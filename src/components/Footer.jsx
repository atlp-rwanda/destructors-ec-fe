import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-4 md:py-8 fixed bottom-0 w-full'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <p className='text-gray-400 text-sm md:text-base'>
          &copy; Ecommerce 2023. All rights reserved.
        </p>
        <div className='flex mt-4 md:mt-0'>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-300 mx-2 md:mx-4 text-xs md:text-base'
          >
            Privacy Policy
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-300 mx-2 md:mx-4 text-xs md:text-base'
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
