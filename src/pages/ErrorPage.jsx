import React from 'react';
import emptyCart from '../assets/404.svg';

function ErrorPage () {
  return (
    <div className='flex justify-center items-center flex-col'>
      {/* <ecomBrand /> */}
      <img src={emptyCart} className='w-96 mt-8'/>
      <p className='text-5xl font-rubik text-primary'>Page not found</p>
    </div>
  );
}

export default ErrorPage;
