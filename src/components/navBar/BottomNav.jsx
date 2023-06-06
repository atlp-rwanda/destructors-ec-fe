import React from 'react';
import { Link } from "react-router-dom";

function BottomNav () {
  return (
    <div className='h-10 bg-[#F7F8FA] w-full flex flex-row mt-2 justify-evenly font-rubik'>
      <div className='flex flex-row gap-10 mt-2  font-rubik'>
        <Link to= '/'>
          <p>HOME</p>
        </Link>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>
      <p className='mt-2 font-rubik'>07888888888</p>
    </div>
  );
}

export default BottomNav;
