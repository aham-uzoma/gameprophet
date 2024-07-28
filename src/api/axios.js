import axios from 'axios';

//const BASE_URL = 'http://localhost:8080/api/v1/predict';
//const BASE_URL= 'http://localhost:3500';
const BASE_URL='https://gameprophetapinodejs.onrender.com'

export default axios.create({
    baseURL: BASE_URL
});

export const axiosWithCredentials = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials: true // For cookie-based authentication
});

axiosInstance.interceptors.request.use(config => {
  // Add authorization header if token exists
  const refreshToken = localStorage.getItem('refreshToken'); // Replace with your storage mechanism
  if (refreshToken) {
    config.headers.Authorization = `Bearer ${refreshToken}`;
  }
  return config;
});

// ... other interceptors for response handling, error handling, etc.



