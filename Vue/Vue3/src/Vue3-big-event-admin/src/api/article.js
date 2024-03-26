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

export const artDelChannelService = (id) => {
  return request.delete('/my/cate/del', {
    params: {
      id
    }
  })
}

export const artGetListService = (params) => {
  return request.get('/my/article/list', {
    params
  })
}

export const artPublishService = (data) => {
  return request.post('/my/article/add', data)
}

export const artGetDetailService = (id) => {
  return request.get('/my/article/info', {
    params: {
      id
    }
  })
}

export const artEditService = (data) => {
  return request.put('/my/article/info', data)
}
