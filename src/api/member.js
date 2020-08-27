import request from '@/utils/request'
export function queryMembers(data) {
  return request({
    url:'pss/student/queryMembers',
    method:'post',
  })
}
export function queryMembersInfo(id) {
    return request({
      url:'pss/member/queryByMemberInfoId/'+id,
      method:'get',
    })
  }