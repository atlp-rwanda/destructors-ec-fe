/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import UserList from './Users';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/FetchUsers';
import { updateStatus } from '../../redux/actions/UpdateUser';
import { updateRole } from '../../redux/actions/UpdateRole';
import UserCount from './UserCount';


const GetUsers = () => {
  const dispatch = useDispatch();
  const { isLoading, users} = useSelector((state) => state.users);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
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
    setConfirmationVisible(false);
  };
  const handleUpdateRole = async (id, newRole) => {
    dispatch(updateRole( {id, newRole} ));
  };

  return (
    <div className="flex justify-space-between w-full ">
      <div className='w-full bg-gray-100'>

        <UserCount    buyerCount={buyerCount} sellerCount={sellerCount} adminCount={adminCount} />
        <
          UserList users={users}
          isLoading={isLoading}
          handleConfirmation={handleConfirmation}
          handleActivate={handleActivate}
          handleCancel={handleCancel}
          handleUpdateRole={handleUpdateRole}
          selectedUserId={selectedUserId}
          setConfirmationVisible={setConfirmationVisible}
          isConfirmationVisible={isConfirmationVisible}/>
      </div>
    </div>
  );
};

export default GetUsers;
