import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 子网页配置地点
 */
export const asyncRoutes = [


  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  {
    path:'/class',
    component: Layout,
    redirect: '/class/classList',
    meta: {title: '班次管理',icon: 'documentation'},
    children:[
      {
        path:'/class/classList',
        name:'classList',
        component:()=>import('@/views/class/classList'),
        meta:{title:'班次列表' , icon:'list' ,activeMenu:'/class/classList'},
      },
      {
        path:'/class/classAdd',
        name:'classAdd',
        component:()=>import('@/views/class/classAdd'),
        hidden:true,
        meta:{title:'添加班次' , icon:'tree',roles:['admin'] ,activeMenu:'/class/classAdd'},
      },
      {
        path:'/class/classStudentsAdd',
        component:()=>import('@/views/class/classStudentsAdd'),
        meta:{title:'添加班次学员' , icon:'peoples',roles:['admin'] ,activeMenu:'/class/classStudentsAdd'},
      }
    ]
  },
{
  path:'/student',
  component: Layout,
  redirect: '/students/studentList',
  meta: {title: '学员管理',icon: 'documentation'},
  children:[
    {
      path:'/students/studentList',
      component:()=>import('@/views/students/studentList'),
      meta:{title:'学员列表' , icon:'list' ,activeMenu:'/students/studentList'},
    },
    {
      path:'/students/studentAdd',
      component:()=>import('@/views/students/studentAdd'),
      meta:{title:'添加学员' , icon:'people',roles:['admin'] ,activeMenu:'/students/studentAdd'},
    }
  ]
},
{
  path:'/title',
  component: Layout,
  redirect: '/title/titleList',
  meta: {title: '题目管理',icon: 'documentation'},
  children:[
    {
      path:'/title/titleList',
      component:()=>import('@/views/title/titleList'),
      meta:{title:'题目列表' , icon:'list' ,activeMenu:'/title/titleList'},
    },
    {
      path:'/title/ImgTitle',
      name:'imgTitle',
      hidden:true,
      component:()=>import('@/views/title/ImgTitle'),
      meta:{title:'图片题目添加' , icon:'list' ,activeMenu:'/title/ImgTitle'},
    },
    {
      path:'/title/TextTitle',
      name:'textTitle',
      hidden:true,
      component:()=>import('@/views/title/TextTitle'),
      meta:{title:'文字题目添加' , icon:'list' ,activeMenu:'/title/TextTitle'},
    },
    {
      path:'/title/titleClass',
      name:'titleClass',
      component:()=>import('@/views/title/titleClass'),
      meta:{title:'题目类别管理' , icon:'excel',roles:['admin'] ,activeMenu:'/title/titleClass'},
    },
    {
      path:'/title/titleClassAdd',
      name:'titleClassAdd',
      hidden:true,
      component:()=>import('@/views/title/titleClassAdd'),
      meta:{title:'题目类别添加' , icon:'list' ,activeMenu:'/title/titleClassAdd'},
    },
  ]
},
{
  path:'/workbook/workbookList',
  component: Layout,
  redirect: '/workbook/workbookList',
  meta: {title: '打桩手册管理',icon: 'documentation'},
  children:[
    {
      path:'/workbook/workbookList',
      component:()=>import('@/views/workbook/workbookList'),
      meta:{title:'打桩手册管理' , icon:'list' ,activeMenu:'/workbook/workbookList'},
    },
    {
      path:'/workbook/workbookAdd',
      hidden:true,
      name:'workbookAdd',
      component:()=>import('@/views/workbook/workbookAdd'),
      meta:{title:'打桩手册列表添加' , icon:'list' ,activeMenu:'/workbook/workbookAdd'},
    },
    {
      path:'/workbook/workbookInfo',
      hidden:true,
      name:'workbookInfo',
      component:()=>import('@/views/workbook/workbookInfo'),
      meta:{title:'打桩手册题目信息填充' , icon:'list' ,activeMenu:'/workbook/workbookInfo'},
    },
  ]
},

{
  path: '/tab',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/tab/index'),
      name: 'Tab',
      meta: { title: 'Tab', icon: 'tab' }
    }
  ]
},
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
