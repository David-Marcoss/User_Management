import { createRouter, createWebHashHistory } from 'vue-router'
import  {logout, isNotAuthenticated, isAuthenticated}  from './guards.js'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    beforeEnter: isAuthenticated,
    component: () => import( '../views/DashboardView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: logout
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: isNotAuthenticated,
    component: () => import( '../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: isNotAuthenticated,
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/request-reset-password',
    name: 'request-reset-password',
    beforeEnter: isNotAuthenticated,
    component: () => import('../views/RequestResetPassword.vue')
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    beforeEnter: isNotAuthenticated,
    component: () => import('../views/ResetPassword.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
