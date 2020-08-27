import request from '@/utils/request'

export function login(mobileNumber, validateCode) {
  return request({
    url: 'base/login/mobile',
    method: 'post',
    data: {
      mobileNumber,
      validateCode
    }
  })
}
export function loginUser(username, password) {
  return request({
    url: 'base/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
export function smsCode(mobileNumber) {
  return request({
    url: 'base/user/smsCode',
    method: 'get',
    params:{mobileNumber:mobileNumber}
  })
}
export function getInfo() {
  return request({
    url: 'base/user/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: 'base/logout',
    method: 'get'
  })
}

export function fetchList(params) {
  return request({
    url: '/admin/list',
    method: 'get',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/admin/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/admin/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/admin/delete/' + id,
    method: 'post'
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/admin/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data: data
  })
}
