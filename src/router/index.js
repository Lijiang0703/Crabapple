import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Login from '@/cms/login'
import Workspace from '@/cms/workspace'
import Statistic from '@/cms/statistic'
import Content from '@/cms/content'
import Home from '@/frontsite/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      // name: 'workspace',
      component: Workspace,
      children:[
        {
          path:'/statistic',
          name: 'statistic',
          component: Statistic
        },
        {
          path:'/content',
          name: 'content',
          component: Content
        }
      ]
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
