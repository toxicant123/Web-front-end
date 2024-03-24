import request from '@/utils/request.js'

export const artGetChannelsService = () => {
  return request.get('/my/cate/list')
}
