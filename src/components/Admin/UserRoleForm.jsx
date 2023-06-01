/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import Button from "../forms/Button";

const UserRoleForm = ({ selectedUser, selectedRole, handleRoleChange, handleFormSubmit, setFormVisible }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded">
        <p className="text-gray-500">
          Update Role for {selectedUser.firstname} {selectedUser.lastname}
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="flex items-center mt-4">
            <label htmlFor="role" className="mr-2">
              Role:
            </label>
            <select
              id="role"
              className="px-2 py-1 border border-gray-300 rounded"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="buyer">buyer</option>
              <option value="seller">seller</option>
              <option value="admin">admin</option>
            </select>
          </div>
          <div className="flex justify-end mt-4">
            < Button
              className="px-4 py-2 rounded bg-customGreen text-white font-semibold mr-2"
              onClick={() => setFormVisible(false)}
            >
              Cancel
            </ Button>
            < Button type="submit" className="px-4 py-2 rounded-lg bg-customYellow text-white font-semibold">
              Update
            </ Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRoleForm;
