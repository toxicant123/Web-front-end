import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout/index.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'
import store from '@/store'

const Login = () => import('@/views/login/index.vue')
const Search = () => import('@/views/search/index.vue')
const SearchList = () => import('@/views/search/list.vue')
const ProDetail = () => import('@/views/prodetail/index.vue')
const Pay = () => import('@/views/pay/index.vue')
const MyOrder = () => import('@/views/myorder/index.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home', component: Home
        },
        {
          path: '/category', component: Category
        },
        {
          path: '/cart', component: Cart
        },
        {
          path: '/user', component: User
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    {
      path: '/prodetail/:id',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: MyOrder
    }
  ]
})

const authUrls = [
  '/pay',
  '/myorder'
]

router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }

  const token = store.getters.token

  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
