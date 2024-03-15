import request from '@/utils/request'

export const checkOrder = () => {
  return request.get('/checkout/order')
}
