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

// export default axios.create({
//     baseURL: BASE_URL,
//     headers: { 
//         'Content-Type': 'application/json',
//         // 'Access-Control-Allow-Origin': 'http://localhost:8080/api/v1/predict'
//     },
//     withCredentials: true,
// });

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true,
//     followRedirects: true 
// });

