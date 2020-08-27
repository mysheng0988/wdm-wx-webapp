import request from '@/utils/request'
export function queryStudents() {
    return request({
      url:'pss/student/queryStudentsByUser',
      method:'post',
    })
}
export function bindWxUserInfo(data) {
  return request({
    url:'pss/student/bindWxUserInfo',
    method:'put',
    data:data
  })
}

export function queryWxMember(data) {
  return request({
    url:'pss/student/queryWxMember',
    method:'post',
    data:data
  })
}