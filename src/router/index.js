import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login')//登录页面
    },{
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/register')//注册用户
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/index/index')
    },{
      path: '/plan',
      name: 'plan',
      component: () => import('@/views/plan/plan')//365计划
    },{
      path: '/member',
      name: 'member',
      component: () => import('@/views/member/member')//会员列表
    },{
      path: '/memInfo',
      name: 'memInfo',
      component: () => import('@/views/member/info')//会员信息
    },{
      path: '/actList',
      name: 'actList',
      component: () => import('@/views/report/list')//动态监测报告列表
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('@/views/report/report')//动态监测报告
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('@/views/report/review')//复查报告
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: () => import('@/views/report/pdf')//筛查报告
    }
    ,{
      path: '/reList',
      name: 'reList',
      component: () => import('@/views/report/reList')//筛查复查报告列表
    },{
      path: '/emption',
      name: 'emption',
      component: () => import('@/views/emption/emption')//购买记录
    }
    ,{
      path: '/info',
      name: 'info',
      component: () => import('@/views/emption/info')//购买信息
    }
    ,{
      path: '/reResults',
      name: 'results',
      component: () => import('@/views/review/results')//复查报告结果
    }
    ,{
      path: '/monitor',
      name: 'monitor',
      component: () => import('@/views/monitor/monitor')//监测中心
    }
    ,{
      path: '/record',
      name: 'record',
      component: () => import('@/views/monitor/record')//监测中心预约记录
    }
    ,{
      path: '/monAppoint',
      name: 'monAppoint',
      component: () => import('@/views/monitor/appoint')//监测中心预约
    }
    ,{
      path: '/recovery',
      name: 'recovery',
      component: () => import('@/views/recovery/recovery')//康复中心
    },{
      path: '/confirm',
      name: 'comfirm',
      component: () => import('@/views/confirm/confirm')//确诊通道
    }
    ,{
      path: '/appoint',
      name: 'appoint',
      component: () => import('@/views/appoint/appoint')//快速预约
    },
    {
      path: '/userAdd',
      name: 'userAdd',
      component: () => import('@/views/user/add')//增加孩子
    }
    ,{
      path: '/',
      name: 'userList',
      component: () => import('@/views/user/list')//孩子列表
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404/404')
    },
    {path: '*', redirect: '/404', hidden: true,roleId:[1,13,18]}
  ]
})
