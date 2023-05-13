import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Counter from './counter';

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  return (

    <div>
      <nav className="flex sm:justify-center space-x-4 bg-blue-300  h-[50px]">
        <h3 className=' absolute left-[50px] top-2 font-bold  text-slate-700 ' >Destructors</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-1 top-2  text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </nav>
      <nav className="flex sm:justify-center space-x-4 ml-[850px] mt-5">

        <Link to="/profile" className=' font-bold px-3 py-2 text-slate-700 ml-0'><h4>Profile</h4></Link><br />
        <Link to="/about" className=' font-bold px-3 py-2 text-slate-700 ml-0'><h4>About us</h4></Link>
      </nav>
      <h1 className='text-5xl text-blue-500 ml-[30px] mt-11' > Hi {localStorage.getItem('user')}; </h1> <br />
      <Counter />
      <button onClick={logout} className="rounded-full ... text-gray-100 bg-sky-500 w-[80px] h-10 ml-[30px] mt-11">Logout</button>
    </div>

  );
};

export default Dashboard;
