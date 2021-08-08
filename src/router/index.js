import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/pages/home-page'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
