import { login, logout,getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getMedicalRecordPatient } from "@/api/patient";
import { setTimeout } from 'timers';
const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: "",
    deptId:"",
    activePath:"/",
    // tabs:[]
    tabs:[{
      path:"/",
      icon:"home",
      name:"首页",
    }]
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_TABS: (state, tabs) => {
      state.tabs.push(tabs)
    },
    SET_ACTIVE: (state, active)=>{
      state.activePath=active
    },
    delete_tabs (state, route) {
      let index = 0
      for (let option of state.tabs) {
        if (option.path.indexOf(route)!=-1) {
          break
        }
        index++
      }
      this.state.user.tabs.splice(index, 1)
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(res => {
          if(res.code==200){
            const tokenStr =res.dataList[0];
            console.log(tokenStr)
            setToken(tokenStr)
            commit('SET_TOKEN', tokenStr)
            commit('SET_NAME',"")
            resolve(res)
          }else {
            resolve(res)
          }

        }).catch(error => {
          commit('SET_TOKEN', '')
          resolve()
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          if(response.code==200){
            const data = response.dataList[0];
           // data.patientId=data.id;
           commit('SET_NAME', data.realName)
           commit('SET_INFO', data)
           resolve(response)
          }
          
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(res=> {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
