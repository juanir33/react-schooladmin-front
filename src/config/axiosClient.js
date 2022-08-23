import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://217.71.204.219:4000/api/v1'
})

export default axiosClient