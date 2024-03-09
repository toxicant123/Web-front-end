import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

instance.interceptors.request.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default instance
