import axios from 'axios';

const disableUsers = async (id, token) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/v1/users/${id}/status`,
      { isActive: false },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default disableUsers;
