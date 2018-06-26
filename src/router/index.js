import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Login from '@/cms/login'
import Workspace from '@/cms/workspace'
import Statistic from '@/cms/statistic'
import Content from '@/cms/content'

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
    },
    {
      path: '/Workspace',
      name: 'workspace',
      component: Workspace,
      children:[
        {
          path:'statistic',
          name: 'statistic',
          component: Statistic
        },
        {
          path:'content',
          name: 'content',
          component: Content
        }
      ]
    }
  ]
})
