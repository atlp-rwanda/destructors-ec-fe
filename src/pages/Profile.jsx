import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <div>
      <Profile></Profile>
      <Link to="/home" className=' absolute text-blue-500 top-[30px] right-[100px]'><h4>Back Home 🏠</h4></Link>
    </div>
  );
};

export default ProfilePage;

