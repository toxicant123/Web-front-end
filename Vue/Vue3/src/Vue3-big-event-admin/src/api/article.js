import request from '@/utils/request.js'

export const artGetChannelsService = () => {
  return request.get('/my/cate/list')
}

export const artAddChannelService = (data) => {
  return request.post('/my/cate/add', data)
}

export const artEditChannelService = (data) => {
  return request.put('/my/cate/info', data)
}
