import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import RegisterUser from '../views/RegisterUser.vue'
import LoginUser from '../views/LoginUser.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { requiresAuth: false } // add custom attributes to the route
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterUser
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router
