import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  Toast.loading({
    message: '加载中',
    forbidClick: true,
    duration: 0
  })

  const token = store.getters.token
  if (token) {
    config.headers.set('Access-Token', token)
    config.headers.set('platform', 'H5')
  }

  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  const res = response.data
  if (res.status !== 200) {
    Toast(res.message)
    return Promise.reject(res.message)
  } else {
    Toast.clear()
  }
  return res
}, error => {
  return Promise.reject(error)
})

export default instance
