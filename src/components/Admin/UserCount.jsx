/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */

import React from 'react';
const UserCount = ({ buyerCount, sellerCount, adminCount }) => {
  return (
    <div className='flex justify-center mb-5 xs:w-full xs:flex xs:ml-0 xs:mt-24'>
      <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-40 h-20 ml-10 xs:w-40 xs:h-auto xs:col-span-2 xs:mx-auto">
        <p className="text-white ml-2 text-xl">{buyerCount === 1 ? 'Buyer' : 'Buyers'}</p>
        <img src="/car-icon.png" alt="Car image" className='w-10 h-10 ml-2 absolute mt-0'/>
        <p className="text-white font-bold text-lg text-3xl ml-20 xs:ml-8">{buyerCount}</p>
      </div>
      <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-40 h-20 ml-10  xs:w-40 xs:col-span-2 xs:mx-auto">
        <p className="text-white ml-2 text-xl">{sellerCount === 1 ? 'Seller' : 'Sellers'}</p>
        <img src="/e-comm-icon.png" alt="Car image" className='w-10 h-10 ml-2 absolute mt-0'/>
        <p className="text-white font-bold text-lg text-3xl ml-20 xs:ml-8">{sellerCount}</p>
      </div>
      <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-40 h-20 ml-10
     xs:w-40 xs:col-span-2 xs:mx-auto">
        <p className="text-white ml-2 text-xl">{adminCount === 1 ? 'Admin' : 'Admins'}</p>
        <img src="/top-lock-icon.png" alt="Car image"  className='w-10 h-10 ml-2 absolute mt-0'/>
        <p className="text-white font-bold text-lg text-3xl ml-20 xs:ml-8">{adminCount}</p>
      </div>
    </div>
  );
};

export default UserCount;
