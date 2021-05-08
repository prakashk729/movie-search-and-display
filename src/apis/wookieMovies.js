import axios from 'axios'

const axiosInstance = axios.create({baseURL:"https://wookie.codesubmit.io/movies"})

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer Wookie2019';

export default axiosInstance;