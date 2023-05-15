import axios from 'axios';

let base = import.meta.env.VITE_SERVER_URL;
const axiosBase = axios.create({
  baseURL: `${base}`,
  headers: {
    'Content-Type': 'application/json',
    'accept-language': 'en',
  },
});

export default axiosBase;
