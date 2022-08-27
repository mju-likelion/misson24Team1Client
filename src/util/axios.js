import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
