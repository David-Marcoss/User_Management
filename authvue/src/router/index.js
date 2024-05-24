import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import( '../views/DashboardView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/request-reset-password',
    name: 'register',
    component: () => import('../views/RequestResetPassword.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
