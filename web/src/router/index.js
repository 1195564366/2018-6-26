import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Main from '@/components/main/main'
import Home from '@/components/home/home'
import Record from '@/components/record/record'
import Admin from '@/components/admin/admin'
import My from '@/components/my/my'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login', //登录
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home', //首页
      component: Home
    },
    {
      path: '/record',
      name: 'Record', //记录
      component: Record
    },
    {
      path: '/admin',
      name: 'Admin', //管理
      component: Admin
    },
    {
      path: '/my',
      name: 'My', //我的
      component: My
    }
  ]
})
