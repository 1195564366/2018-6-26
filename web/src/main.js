// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import axios from 'axios'

import 'vant/lib/vant-css/icon-local.css'
import '../static/css/iconfont.css'

Vue.use(Vant)

axios.defaults.baseURL = 'http://192.168.1.90:8008/'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
