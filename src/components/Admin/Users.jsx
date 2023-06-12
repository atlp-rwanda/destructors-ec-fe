/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { FaSpinner } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import React, { useState } from 'react';
import UserRoleForm from './UserRoleForm';
const UserList = ({
  users,
  isLoading,
  handleConfirmation, handleActivate,
  handleCancel, selectedUserId,
  handleUpdateRole,
  isConfirmationVisible}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);
  const openForm = (user) => {
    setSelectedUser(user);
    setSelectedRole(user.role);
    setFormVisible(true);
  };
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Updating role for user ${selectedUser.id} to ${selectedRole}`);
    handleUpdateRole(selectedUser.id, selectedRole);
    setFormVisible(false);
  };
  return (
    <div>
      <div className=' bg-white w-4/5 ml-20 xs:ml-0 xs:fixed xs:bottom-0 xs:left-0 xs:w-full xs:relative'>
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
            <FaSpinner className='animate-spin mr-2' />
            <span className='text-gray-600'>Loading users...</span>
          </div>
        )}
        <p className="text-5 font-bold mb-4 text-customBlue p-4">All Users</p>
        <div className="max-h-96 overflow-y-auto">
          <table className={`w-full border-t border-gray-100 ${isLoading ? 'opacity-0' : 'opacity-100'} xs:fixed xs:bottom-0 xs:left-0 xs:w-full xs:relative` }>
            <tbody>
              <tr>
                <th className='text-customBlue w-4 '>Names</th>
                <th className='text-customBlue w-4 '>Email</th>
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
                  <td className="border-b border-gray-100 py-2 px-4 w-4 xs:w-2">{user.email}<br></br><span className='text-gray-400'>{user.isEmailVerified
                    ? 'Verified' : 'UnVerified'}</span>
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
                  <td className="border-b border-gray-100 py-2 px-4 w-2 xs:hidden">
                    <div className="flex items-center">
                      <span className="text-gray-400">
                        <a href="#" className="text-gray-400 hover:text-blue-500 hover:bg-g-500 rounded-full p-1"onClick={() => openForm(user)}>
                          <FiEdit2  />
                        </a>
                      </span>
                      <span className="ml-2">{user.role}</span>
                    </div>
                  </td>

                  <td className="border-b border-gray-100 py-2 px-4 xs:hidden">
                    <button
                      className={`px-4 py-2 rounded-lg ${
                        user.isActive ? 'bg-customBlue text-white hover:bg-slate-500' : 'bg-yellow-500 text-white hover:bg-yellow-200'
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
      <div>
        {isFormVisible && selectedUser && (
          <UserRoleForm
            selectedUser={selectedUser}
            selectedRole={selectedRole}
            handleRoleChange={handleRoleChange}
            handleFormSubmit={handleFormSubmit}
            setFormVisible={setFormVisible}
          />
        )}
      </div>
      {isConfirmationVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded">
            <p className='text-gray-500'>Are you sure you want to {selectedUserId.isActive ? 'disable' : 'activate'} this <br></br> user account?</p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 rounded bg-customGreen text-white hover:bg-green-500 font-semibold mr-2"
                onClick={handleCancel}
              >
          Cancel
              </button>
              {selectedUserId.isActive ? (
                <button
                  className="px-4 py-2 rounded bg-customYellow text-white font-semibold hover:bg-amber-400"
                  onClick={() => {
                    handleActivate(selectedUserId);
                    setConfirmationVisible(false);
                  }}
                >
            Disable <img src="/lock-icon.png" alt="lock" className='w-2 h-2 flex'/>
                </button>
              ) : (
                <button
                  className="px-4 py-2 rounded-lg bg-customYellow hover:bg-amber-400 text-white font-semibold"
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
    </div>
  );
};

export default UserList;
