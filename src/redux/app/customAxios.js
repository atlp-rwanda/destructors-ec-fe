import axios from "axios";

const customAxios = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
  timeout: 50000,
  headers: {},
});
const requestHandler = (request) => {
  const token = localStorage.getItem("token") || "";
  request.headers.Authorization = `Bearer ${token}`;
  return request;
};

const responseHandler = (response) => response;

const errorHandler = (error) => {
  if (error.response.status === 401) {
    return (window.location.href = "/auth/login");
  }
  return Promise.reject(error);
};
customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error),
);

export default customAxios;
