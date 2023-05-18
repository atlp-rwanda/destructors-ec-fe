/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import {fetchUsers} from './FetchUsers';

export const updateStatus = (id) => {
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDk4YTA1NzQtNDUzMi00ZGU5LTllZDUtMTIxNTFkMTZlYjJjIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpc0FjdGl2ZSI6ZmFsc2UsImV4cGlyZWQiOm51bGx9LCJpYXQiOjE2ODQ4NzcxNjl9.ylvfu46vf4fx1BbV_sVhDyoKjqxQGTh2_iC6PMiJL_g';
  return async (dispatch) => {
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/users/${id}/status`, {}, {
        headers: {
          Authorization: token,
        },
      });
      const userId = response.data;
      dispatch({
        type: 'UPDATE_USER_STATUS',
        payload: userId,
      });
      dispatch(fetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};
