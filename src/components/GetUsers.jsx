/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/FetchUsers';
import { updateStatus } from '../redux/actions/UpdateUser';
import { Link } from 'react-router-dom';
import AdminNavMobile from './DashboarMobil';

const GetUsers = () => {
  const dispatch = useDispatch();
  const { isLoading, users} = useSelector((state) => state.users);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUsers());
    console.log('hello');
  }, [dispatch]);

  const adminCount = users.filter((user) => user.role === 'admin').length;
  const sellerCount = users.filter((user) => user.role === 'seller').length;
  const buyerCount = users.filter((user) => user.role === 'buyer').length;

  const handleConfirmation = (user) => {
    setSelectedUserId(user);
    setConfirmationVisible(true);
  };

  const handleCancel = () => {
    setConfirmationVisible(false);
  };

  const handleActivate = async (user) => {
    dispatch(updateStatus(user.id));
  };

  return (
    <div className="flex justify-space-between">
      {/* left */}
      <div className='bg-white xs:hidden'>
        <img src="/logo-icon.png" alt="" className=' ml-5 mb-20 mt-10 xs:flex' />
        <div className='flex mt-15 mb-3'>
          <img src="/dashboard-icon.png" alt="" className='ml-5 mr-3'/>
          <span>Dashboard</span>
        </div>
        <div className='flex mt-5 mb-3'>
          <img src="/group-icon.png" alt="" className='ml-5 mr-3'/>
          <span>Assign Role</span>
        </div>
        <div className={`flex items-center mt-5 mb-3 ${location.pathname === '/users' ? 'bg-blue-400 ' : ''}`}>
          <Link to="/users" className="flex items-center">
            <img src="/assignRole-icon.png" alt="" className='ml-5 mr-3'/>
            <span>Users</span>
          </Link>
        </div>
        <div className='flex mt-5 mb-3'>
          <img src="/setting-icon.png" alt="" className='ml-5 mr-3'/>
          <span>Settings</span>
        </div>
        <div className='flex mt-5 mb-3'>
          <img src="/logout-icon.png" alt="" className='ml-5 mr-3 '/>
          <span>Logout</span>
        </div>
      </div>
      {/* right */}
      <div className='w-full bg-gray-100'>
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
              // onChange={(e) => {
              //   const searchIcon = document.querySelector('.search-icon');
              //   if (e.target.value) {
              //     searchIcon.style.opacity = '0';
              //   } else {
              //     searchIcon.style.opacity = '1';
              //   }
              // }}
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
        <div className='grid grid-cols-3 gap-2 mb-5 xs:w-full xs:flex xs:ml-0 xs:mt-24'>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-60 h-20 ml-20 xs:w-40 xs:h-auto xs:col-span-2 xs:mx-auto">
            <p className="text-white ml-2 text-xl">{buyerCount === 1 ? 'Buyer' : 'Buyers'}</p>
            <img src="/car-icon.png" alt="Car image" className='w-10 h-10 ml-2 absolute mt-0'/>
            <p className="text-white font-bold text-lg text-3xl ml-40 xs:ml-8">{buyerCount}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-60 h-20 xs:w-40 xs:col-span-2 xs:mx-auto">
            <p className="text-white ml-2 text-xl">{sellerCount === 1 ? 'Seller' : 'Sellers'}</p>
            <img src="/e-comm-icon.png" alt="Car image" className='w-10 h-10 ml-2 absolute mt-0'/>
            <p className="text-white font-bold text-lg text-3xl ml-40 xs:ml-8">{sellerCount}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-60 h-20
          xs:w-40 xs:col-span-2 xs:mx-auto">
            <p className="text-white ml-2 text-xl">{adminCount === 1 ? 'Admin' : 'Admins'}</p>
            <img src="/top-lock-icon.png" alt="Car image"  className='w-10 h-10 ml-2 absolute mt-0'/>
            <p className="text-white font-bold text-lg text-3xl ml-40 xs:ml-8">{adminCount}</p>
          </div>
        </div>
        <div className=' bg-white w-4/5 ml-20 xs:ml-0 xs:fixed xs:bottom-0 xs:left-0 xs:w-full xs:relative'>
          {isLoading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
              <FaSpinner className="animate-spin text-4xl text-gray-500 " data-testid="loading-spinner"/>
            </div>
          )}
          <p className="text-5 font-bold mb-4 text-customBlue p-4">All Users</p>
          <div className="max-h-96 overflow-y-auto">
            <table className={`w-full border-t border-gray-100 ${isLoading ? 'opacity-0' : 'opacity-100'} xs:fixed xs:bottom-0 xs:left-0 xs:w-full xs:relative` }>
              <tbody>
                <tr>
                  <th className='text-customBlue w-4'>Names</th>
                  <th className='text-customBlue w-4'>Email</th>
                  <th className='text-customBlue w-4 xs:hidden'>Role</th>
                  <th className='text-customBlue w-4 xs:hidden'>Status</th>
                </tr>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border-b gray-100 py-2 px-4">
                      <img src={user.profilePic} alt={user.name} className="inline-block w-8 h-8 mr-2 rounded-full" />
                      <p className="inline-block">
                        {user.firstname} <br></br><span className='text-gray-400'>{user.lastname}</span>
                      </p>
                    </td>
                    <td className="border-b border-gray-100 py-2 px-4 w-4 xs:w-2">{user.email}<br></br><pan className='text-gray-400'>{user.isEmailVerified
                      ? 'Verified' : 'UnVerified'}</pan>
                    <span className='hidden xs:block'>{user.role}</span>
                    <button
                      className={`px-4 py-2 rounded-lg w-2  ${
                        user.isActive ? 'bg-customBlue text-white' : 'bg-yellow-500 text-white'
                      } hidden xs:block w-full xs:w-40`}
                      onClick={() => handleConfirmation(user)}
                      // disabled={!user.isActive}
                      // style={{ width: '100%' }}

                    >
                      {user.isActive ? 'Active' : 'Disabled'}
                    </button>
                    </td>
                    <td className="border-b border-gray-100 py-2 px-4 w-2 xs:hidden">{user.role}</td>
                    <td className="border-b border-gray-100 py-2 px-4 xs:hidden">
                      <button
                        className={`px-4 py-2 rounded-lg ${
                          user.isActive ? 'bg-customBlue text-white' : 'bg-yellow-500 text-white'
                        }`}
                        onClick={() => handleConfirmation(user)}
                        // disabled={!user.isActive}
                        style={{ width: '100%' }}
                      >
                        {user.isActive ? 'Active' : 'Disabled'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {isConfirmationVisible && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
            <div className="bg-white p-4 rounded">
              <p className='text-gray-500'>Are you sure you want to {selectedUserId.isActive ? 'disable' : 'activate'} this <br></br> user account?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 rounded bg-customGreen text-white font-semibold mr-2"
                  onClick={handleCancel}
                >
          Cancel
                </button>
                {selectedUserId.isActive ? (
                  <button
                    className="px-4 py-2 rounded bg-customYellow text-white font-semibold"
                    onClick={() => {
                      handleActivate(selectedUserId);
                      setConfirmationVisible(false);
                    }}
                  >
            Disable <img src="/lock-icon.png" alt="lock" className='w-2 h-2 flex'/>
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 rounded-lg bg-customYellow text-white font-semibold"
                    onClick={() => {
                      handleActivate(selectedUserId);
                      setConfirmationVisible(false);
                    }}
                  >
            Activate
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <AdminNavMobile />
      </div>
    </div>
  );
};

export default GetUsers;
