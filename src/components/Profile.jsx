import React from 'react';

const Profile = () => {
  return (
    <div>
      <h2 className='text-4xl text-blue-500 ml-[600px] mt-[30px]'>Profile Page </h2>
      <form className='ml-[600px] mt-11'>
        <label  className='font-bold text-gray-950'> Name: </label><input type='text' className="placeholder:italic placeholder:text-slate-400 block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Username..." ></input>
        <label  className='font-bold text-gray-950'> Email: </label><input type='text' className="placeholder:italic placeholder:text-slate-400 block bg-white w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Username..." ></input>
      </form>
    </div>
  );
};

export default Profile;
