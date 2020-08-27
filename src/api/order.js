import request from '@/utils/request'
export function queryWxOrders(data) {
  return request({
    url:'pss/order/queryWxOrders',
    method:'post',
  })
}
export function queryOrder(id) {
  return request({
    url:'pss/order/queryOrder/'+id,
    method:'get',
  })
}
