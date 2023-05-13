import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1 className='text-6xl text-blue-500 ml-11 mt-[300px]'>Welcome To destructors online shopping Mall</h1> <br />
      <Link to="/home" className=' absolute text-blue-500 top-[20px] right-[100px]'><h4>Back Home 🏠</h4></Link>
    </div>
  );
};

export default About;
