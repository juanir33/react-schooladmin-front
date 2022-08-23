import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://217.71.204.219:4000/api/v1'
})

export default axiosClient