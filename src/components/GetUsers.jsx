/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import getUsers from '../Request/GetUsers';
import { FaSpinner } from 'react-icons/fa';
import disableUsers from '../Request/DisableAccount';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    async function fetchUsers () {
      const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDk4YTA1NzQtNDUzMi00ZGU5LTllZDUtMTIxNTFkMTZlYjJjIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpc0FjdGl2ZSI6bnVsbCwiZXhwaXJlZCI6bnVsbH0sImlhdCI6MTY4NDIxODc1Nn0.qk0GCOFg21ihm0Btx9CIUIKp1Wraw3EP7NYmRR5ao1w';
      const fetchedUsers = await getUsers(token);
      setUsers(fetchedUsers);
      setLoading(false);
    }
    fetchUsers();
  }, []);

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

  const handleDisable = async (id) => {
    try {
      const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDk4YTA1NzQtNDUzMi00ZGU5LTllZDUtMTIxNTFkMTZlYjJjIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpc0FjdGl2ZSI6bnVsbCwiZXhwaXJlZCI6bnVsbH0sImlhdCI6MTY4NDIxODc1Nn0.qk0GCOFg21ihm0Btx9CIUIKp1Wraw3EP7NYmRR5ao1w';
      await disableUsers(id, token);
      const updatedUsers = users.map((u) => {
        if (u.id === id) {
          return { ...u, isActive: false };
        }
        return u;
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };

  const handleActivate = async (id) => {
    try {
      const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDk4YTA1NzQtNDUzMi00ZGU5LTllZDUtMTIxNTFkMTZlYjJjIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpc0FjdGl2ZSI6bnVsbCwiZXhwaXJlZCI6bnVsbH0sImlhdCI6MTY4NDIxODc1Nn0.qk0GCOFg21ihm0Btx9CIUIKp1Wraw3EP7NYmRR5ao1w';
      await disableUsers(id, token);
      const updatedUsers = users.map((u) => {
        if (u.id === id) {
          return { ...u, isActive: true };
        }
        return u;
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-space-between">
      {/* left */}
      <div className='bg-white'>
        <img src="/logo-icon.png" alt="" className=' ml-5 mb-20 mt-10' />
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
          <div className='flex justify-space-between items-center mr-60'>
            <img src="/chev-icon.png" alt="" className='w-50 ml-20'/>
            <span>Dashboard</span>
          </div>
          <div className='w-400 mr-60 flex justify-space-between items-center relative'>
            <img src="/search-icon.png" alt="" className='absolute ml-2 search-icon'/>
            <input
              type="text"
              name="" id=""
              placeholder="search"
              className="rounded-lg px-20 py-1 w-240"
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
          <div className='mr-3'>
            <img src="/Notification.png" alt="" />
          </div>
          <div>
            <img src="/Ellipse 26.png" alt="" />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-2 mb-5'>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-60 h-20 ml-20">
            <p className="text-white ml-2 text-xl">{buyerCount === 1 ? 'Buyer' : 'Buyers'}</p>
            <img src="/car-icon.png" alt="Car image" className='w-10 h-10 ml-2 absolute mt-0'/>
            <p className="text-white font-bold text-lg text-3xl ml-40 ">{buyerCount}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-60 h-20">
            <p className="text-white ml-2 text-xl">{sellerCount === 1 ? 'Seller' : 'Sellers'}</p>
            <img src="/e-comm-icon.png" alt="Car image" className='w-10 h-10 ml-2 absolute mt-0'/>
            <p className="text-white font-bold text-lg text-3xl ml-40">{sellerCount}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-60 h-20">
            <p className="text-white ml-2 text-xl">{adminCount === 1 ? 'Admin' : 'Admins'}</p>
            <img src="/top-lock-icon.png" alt="Car image"  className='w-10 h-10 ml-2 absolute mt-0'/>
            <p className="text-white font-bold text-lg text-3xl ml-40">{adminCount}</p>
          </div>
        </div>
        <div className=' bg-white w-4/5 ml-20'>
          {isLoading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
              <FaSpinner className="animate-spin text-4xl text-gray-500" />
            </div>
          )}
          <p className="text-xl font-bold mb-4 text-customBlue p-4">All Users</p>
          <div className="max-h-96 overflow-y-auto">
            <table className={`w-full border-t border-gray-100 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              <tbody>
                <tr>
                  <th className='text-customBlue'>Names</th>
                  <th className='text-customBlue'>Email</th>
                  <th className='text-customBlue'>Role</th>
                  <th className='text-customBlue'>Status</th>
                </tr>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border-b gray-100 py-2 px-4">
                      <img src={user.profilePic} alt={user.name} className="inline-block w-8 h-8 mr-2" />
                      <p className="inline-block">
                        {user.firstname} <br></br><span className='text-gray-400'>{user.lastname}</span>
                      </p>
                    </td>
                    <td className="border-b border-gray-100 py-2 px-4">{user.email}<br></br><pan className='text-gray-400'>{user.isEmailVerified
                      ? 'Verified' : 'UnVerified'}</pan></td>
                    <td className="border-b border-gray-100 py-2 px-4">{user.role}</td>
                    <td className="border-b border-gray-100 py-2 px-4">
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
                      handleDisable(selectedUserId.id);
                      setConfirmationVisible(false);
                    }}
                  >
            Disable <img src="/lock-icon.png" alt="lock" className='w-2 h-2 flex'/>
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 rounded-lg bg-customYellow text-white font-semibold"
                    onClick={() => {
                      handleActivate(selectedUserId.id);
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

      </div>
    </div>
  );
};

export default GetUsers;
