import React, { useEffect, useState } from 'react';
import getUsers from '../Request/GetUsers';
import { FaSpinner } from 'react-icons/fa';
import disableUsers from '../Request/DisableAccount';
import DisableAccount from './DisableAccount';

const GetUsers = () => {
  const [users, getAllUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    async function fetchUsers () {
      console.log(getUsers());
      const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDk4YTA1NzQtNDUzMi00ZGU5LTllZDUtMTIxNTFkMTZlYjJjIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpc0FjdGl2ZSI6bnVsbCwiZXhwaXJlZCI6bnVsbH0sImlhdCI6MTY4NDExMjk0Mn0.3OB5YCFDYgS8-1zbm5CRCxG0ZvBLdX6yJLvkORpcoiE';
      const users = await getUsers(token);
      getAllUsers(users);
      const delay = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(delay);
    }
    fetchUsers();
  }, []);

  const adminCount = users.filter((user) => user.role === 'admin').length;
  const sellerCount = users.filter((user) => user.role === 'seller').length;
  const buyerCount = users.filter((user) => user.role === 'buyer').length;
  // const user = users.map((user) => user.id === id);

  const handleConfirmation = (user) => {
    setSelectedUser(user);
    setConfirmationVisible(true);
  };

  const handleCancel = () => {
    setSelectedUser(null);
    setConfirmationVisible(false);
  };

  const handleDisable = () => {
    // Disable account logic here
    console.log('Disabling account:', selectedUser);
    setSelectedUser(null);
    setConfirmationVisible(false);
  };

  return (
    <div className="flex justify-space-between">
      {/* left */}
      <div>
        <img src="/logo-icon.png" alt="" />
        <div>
          <img src="/dashboard-icon.png" alt="" />
          <span>Dashboard</span>
        </div>
        <div>
          <img src="/group-icon.png" alt="" />
          <span>Assign Role</span>
        </div>
        <div>
          <img src="/assignRole-icon.png" alt="" />
          <span>Users</span>
        </div>
        <div>
          <img src="/setting-icon.png" alt="" />
          <span>Settings</span>
        </div>
        <div>
          <img src="/logout-icon.png" alt="" />
          <span>Logout</span>
        </div>
      </div>
      {/* right */}
      <div>
        <div>
          <div>
            <img src="/chev-icon.png" alt="" />
            <span>Dashboard</span>
          </div>
          <div>
            <img src="/search-icon.png" alt="" />
            <input type="text" name="" id="" placeholder="search" />
          </div>
          <div>
            <img src="/Notification.png" alt="" />
          </div>
          <div>
            <img src="/Ellipse 26.png" alt="" />
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400">
            <img src="/car-icon.png" alt="Car image" />
            <p className="text-white">{buyerCount === 1 ? 'buyer' : 'buyers'}</p>
            <p className="text-white">{buyerCount}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400">
            <img src="/e-comm-icon.png" alt="Car image" />
            <p className="text-white">{sellerCount === 1 ? 'seller' : 'sellers'}</p>
            <p className="text-white">{sellerCount}</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-teal-400">
            <img src="/top-lock-icon.png" alt="Car image" />
            <p className="text-white">{adminCount === 1 ? 'admin' : 'admins'}</p>
            <p className="text-white">{adminCount}</p>
          </div>
        </div>
        <div>
          {isLoading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
              <FaSpinner className="animate-spin text-4xl text-gray-500" />
            </div>
          )}
          <p className="text-xl font-bold mb-4">All Users</p>
          <div className="max-h-96 overflow-y-auto">
            <table className={`w-full border-t border-black ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              <thead>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border-b border-black py-2 px-4">
                      <img src="/Ellipse 26.png" alt="" className="inline-block w-8 h-8 mr-2" />
                      <p className="inline-block">
                        {user.firstname} <span>{user.lastname}</span>
                      </p>
                    </td>
                    <td className="border-b border-black py-2 px-4">{user.email}</td>
                    <td className="border-b border-black py-2 px-4">{user.role}</td>
                    <td className="border-b border-black py-2 px-4">
                      <button
                        className={`px-4 py-2 rounded ${
                          user.isActive ? 'bg-customBlue text-white' : 'bg-yellow-500 text-gray-900'
                        }`}
                        onClick={() => handleConfirmation(user)}
                        disabled={!user.isActive}
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
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
            <div className="bg-white p-4 rounded">
              <p>Are you sure you want to disable this user's account?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 rounded bg-gray-500 text-white font-semibold mr-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-500 text-white font-semibold"
                  onClick={() => {
                    handleDisable;
                    disableUsers(users.map((user) => user.id === id));
                    DisableAccount(
                      user,
                      user.email);
                  }}
                >
                  Disable
                  <img src="/lock-icon" alt="" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUsers;
