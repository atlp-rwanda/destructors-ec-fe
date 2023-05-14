import axios from 'axios';

const getUsers = async (token) => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/users/', {
      headers: {
        'Authorization': token,
      },
    });
    // console.log(response.data.users);
    return response.data.users;
  } catch (error) {
    console.error(error);
  }
};

export default getUsers;
