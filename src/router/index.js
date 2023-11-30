import { createRouter, createWebHistory } from 'vue-router'
import data from '../assets/data.js'
const { menus } = data

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/home/System/SystemList',
          component: () => import('../views/c-home/System/SystemList.vue')
        },
        {
          path: '/home/System/MyWorks',
          component: () => import('../views/c-home/System/MyWorks.vue')
        },
        {
          path: '/home/User/UserList',
          component: () => import('../views/c-home/User/UserList.vue')
        },
        {
          path: '/home/User/UserApartment',
          component: () => import('../views/c-home/User/UserApartment.vue')
        },
        {
          path: '/home/User/UserMenus',
          component: () => import('../views/c-home/User/UserMenus.vue')
        },
        {
          path: '/home/User/UserRoles',
          component: () => import('../views/c-home/User/UserRoles.vue')
        },
        {
          path: '/home/Store/StoreList',
          component: () => import('../views/c-home/Store/StoreList.vue')
        },
        {
          path: '/home/Store/StoreInfo',
          component: () => import('../views/c-home/Store/StoreInfo.vue')
        },
        {
          path: '/home/More/MoreList',
          component: () => import('../views/c-home/More/MoreList.vue')
        },
        {
          path: '/home/More/MoreInfo',
          component: () => import('../views/c-home/More/MoreInfo.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

//导航守卫 
router.beforeEach((to) => {

  //自动匹配第一个菜单页面
  if (to.path === '/home') {
    return menus[0].children[0].url
  }
})
export default router
