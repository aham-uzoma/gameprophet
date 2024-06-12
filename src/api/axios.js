import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/predict';

// export default axios.create({
//     baseURL: BASE_URL
// });

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });

export default axios.create({
    baseURL: BASE_URL,
    headers: { 
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:8080/api/v1/predict'
    },
    withCredentials: true,
});

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true,
//     followRedirects: true 
// });

