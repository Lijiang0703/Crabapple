import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Login from '@/cms/login'
import Workspace from '@/cms/workspace'
import Statistic from '@/cms/statistic'
import Content from '@/cms/content'
import Picture from '@/cms/picturetown'
import PicEdit from '@/cms/picture/edit'
import Home from '@/frontsite/home/home'
import Photo from '@/frontsite/photo/photo'

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
      name: 'workspace',
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
        },
        {
          path:'/picture',
          name: 'picture',
          component: Picture
        },
        {
          path:'pic_edit',
          name: 'pic_edit',
          component: PicEdit
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/photo',
      name: 'photo',
      component: Photo
    }
  ]
})
