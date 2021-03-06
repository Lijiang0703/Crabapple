import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
// import Login from '@/cms/login'
// import Workspace from '@/cms/workspace'
// import Statistic from '@/cms/statistic'
// import Content from '@/cms/content/content'
// import ContentEdit from '@/cms/content/edit'
// import Picture from '@/cms/picturetown'
// import PicEdit from '@/cms/picture/edit'
// import Home from '@/frontsite/home/home'
import Photo from '@/frontsite/photo/photo'
import Blog from '@/frontsite/blog/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      // component: Login
      // component: (resolve)=> require(['@/cms/login'],resolve)
      component: ()=>import(/*webpackChunkName: "login"*/'@/cms/login')
    },
    {
      path: '/workspace',
      name: 'workspace',
      redirect: '/workspace/statistic',
      component: ()=>import(/* webpackChunkName: "workspace" */ '@/cms/workspace'),
      beforeEnter: (to,from,next)=>{
        //进行权限验证判断
        const local = window.localStorage.getItem('crabapple_author')
        if(!local){
          //跳转到登录页
          // next('/login')
        }else {
          //判断是否有权限

        }
        next()
      },
      children:[
        {
          path:'statistic',
          name: 'statistic',
          component: ()=>import(/* webpackChunkName: "workspace" */ '@/cms/statistic')
          // component: Statistic
        },
        {
          path:'content',
          name: 'content',
          // component: Content,
          component: ()=>import(/*webpackChunkName: "workspace"*/'@/cms/content/content'),
          children:[

          ]
        },
        {
          path: 'content_edit',
          name: 'c_edit',
          // component:ContentEdit
          component: ()=>import(/*webpackChunkName: "workspace"*/'@/cms/content/edit')
        },
        {
          path: 'content_edit/:id',
          name: 'c_edit',
          // component:ContentEdit
          component: ()=>import(/*webpackChunkName: "workspace"*/'@/cms/content/edit')
        },
        {
          path:'picture',
          name: 'picture',
          // component: Picture,
          component: ()=>import(/*webpackChunkName: "workspace"*/'@/cms/picturetown'),
          children: [

          ]
        },
        {
          path: 'picture/edit',
          name: 'pic_edit',
          // component: PicEdit
          component: ()=>import(/*webpackChunkName: "workspace"*/'@/cms/picture/edit')
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      // component: Home
      component: (resolve)=> require(['@/frontsite/home/home'],resolve)
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children:[
      ]
    },
    {
      path:'/blog/:id',
      name: 'blog_detail',
      component: (resolve)=> require(['@/frontsite/blog/detail'],resolve)
    }
  ]
})
