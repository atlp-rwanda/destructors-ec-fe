import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

function useUserRoleState () {
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const role = decodedToken.data.role;
      const id = decodedToken.data.id;
      setUserId(id);
      setUserRole(role);
    }
  }, []);
  return {
    userRole,
    userId,
  };
}

export default useUserRoleState;
