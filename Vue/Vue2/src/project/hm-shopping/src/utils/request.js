import axios from 'axios'
import { Toast } from 'vant'

const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

instance.interceptors.response.use(response => {
  const res = response.data
  if (res.status !== 200) {
    Toast(res.message)
    return Promise.reject(res.message)
  }
  return res
}, error => {
  return Promise.reject(error)
})

export default instance
