import request from '@/utils/request'
export function fetchList(data) {
  return request({
    url:'pss/preScreenTaskDetail/'+data.pageNum+'/'+data.pageSize,
    method:'post',
    data:data
  })
}
export function getReportData(id) {
  return request({
    url:'pss/preScreenTaskDetail/queryById/'+id,
    method:'get'
  })
}
//筛查报告列表
export function queryPreTaskByParent(data) {
  return request({
    url:'pss/preScreenTaskDetail/queryPreTaskByParent/'+data.pageNum+'/'+data.pageSize,
    method:'post',
    data:data,
  })
}

export function queryReviewTasksByParent(reviewType,data) {
  return request({
    url:'pss/reviewTaskResult/queryReviewTasksByParent/'+reviewType+'/'+data.pageNum+'/'+data.pageSize,
    method:'post',
    data:data,
  })
}