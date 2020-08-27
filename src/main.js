import Vue from 'vue'
import App from './App'
import store from './store'
import '@/permission' // permission control
import './styles/function.less' 
import './styles/index.less' 
import router from './router'
import 'vant/lib/index.css'
import Vant from 'vant'
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
