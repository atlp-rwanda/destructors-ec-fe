import axios from 'axios';

export const fetchUsers = () => {
  const token =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDk4YTA1NzQtNDUzMi00ZGU5LTllZDUtMTIxNTFkMTZlYjJjIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpc0FjdGl2ZSI6ZmFsc2UsImV4cGlyZWQiOm51bGx9LCJpYXQiOjE2ODQ4NzcxNjl9.ylvfu46vf4fx1BbV_sVhDyoKjqxQGTh2_iC6PMiJL_g';
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users/', {
        headers: {
          Authorization: token,
        },
      });
      const users = response.data.users;
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
    } catch (error) {
      console.error(error);
    }
  };
};
