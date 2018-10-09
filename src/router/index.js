import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Login from '@/cms/login'
import Workspace from '@/cms/workspace'
import Statistic from '@/cms/statistic'
import Content from '@/cms/content/content'
import ContentEdit from '@/cms/content/edit'
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
          component: Content,
          children:[

          ]
        },
        {
          path: '/content_edit',
          name: 'c_edit',
          component:ContentEdit
        },
        {
          path: '/content_edit/:id',
          name: 'c_edit',
          component:ContentEdit
        },
        {
          path:'/picture',
          name: 'picture',
          component: Picture,
          children: [

          ]
        },
        {
          path: '/picture/edit',
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
