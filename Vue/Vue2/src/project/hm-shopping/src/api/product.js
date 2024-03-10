import request from '@/utils/request'

export const getProList = obj => {
  return request.get('/goods/list', {
    params: obj
  })
}
