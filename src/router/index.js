import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Login from '@/cms/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Timeline
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
