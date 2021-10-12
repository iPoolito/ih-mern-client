// ./src/config/axios.js

import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL // http://localhost:3005 | http://...herokuapp.com
})

export default axiosClient
