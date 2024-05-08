import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/predict';

export default axios.create({
    baseURL: BASE_URL
});
