import axios from 'axios'
import store from '../store'

import router from '@/router/index';
import { getToken } from '@/utils/auth';
import { Notify } from 'vant';
import { Toast } from 'vant';
let toast = null;
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  toast=Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true,
    message: '加载中',
  });
  if (store.getters.token) {
    config.headers['access-token'] =getToken()?getToken():"000000"  // // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  config.headers['service-id']="5000"
  return config
}, error => {
  toast.clear()
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    toast.clear()
    const res = response.data;
    if(res.retcode||res.code==804||res.code=="200"){
      return response.data
      
    }else if(res.code=="601"||res.code=="602"){
      localStorage.clear()
      Notify({
        message:"登录信息已过期",
        type: 'warning',
        duration: 3 * 1000
      })
      router.push("/login")
    }else{
      let message=res.message?res.message:res.msg;
      Notify({
        message:message,
        type: 'warning',
        duration: 3 * 1000
      })

      return Promise.reject('error')
    }
  },
  err => {
    toast.clear()
    console.log('err' + err)// for debug
    Notify({
      message: "服务器连接失败",
      type: 'warning',
      duration: 3 * 1000
    })
    return Promise.reject(err)
  }
)

export default service
