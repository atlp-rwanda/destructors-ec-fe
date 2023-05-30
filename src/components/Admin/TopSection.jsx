import React from 'react';

const TopSection = () => {
  return (
    <div className='flex justify-space-between items-center w-500 mt-10 mb-10'>
      <div className='flex justify-space-between items-center mr-60 '>
        <img src="/chev-icon.png" alt="" className='w-50 ml-20 xs:hidden'/>
        <span className='xs:hidden'>Dashboard</span>
      </div>
      <div className='w-400 mr-60 flex justify-space-between items-center relative xs:absolute xs:top-20 xs:left-4'>
        <img src="/search-icon.png" alt="" className='absolute ml-2 search-icon'/>
        <input
          type="text"
          name="" id=""
          placeholder="search"
          className="rounded-lg px-20 py-1 w-240 xs:w-80 xs:h-10 xs:text-xl"
        />
      </div>
      <div className='mr-3 xs:absolute xs:left-60'>
        <img src="/Notification.png" alt="" className='xs:right-0' />
      </div>
      <div className='xs:w-40 xs:absolute xs:left-80 xs:right-0'>
        <img src="/Ellipse 26.png" alt=""  className='xs:right-0'/>
      </div>
      <img src="/logo-icon.png" alt="" className='ml-5 mb-20 mt-10 hidden xs:block xs:absolute xs:mt-20' />
    </div>
  );
};

export default TopSection;
