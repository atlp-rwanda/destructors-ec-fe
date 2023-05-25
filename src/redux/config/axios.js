import axioss from 'axios';

const axios = axioss.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
export default axios;
