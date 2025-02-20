import { createRouter, createWebHistory } from 'vue-router'

import Drawings from '../views/DrawingsPage.vue'
import Home from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Drawings',
      name: 'Drawings',
      component: Drawings,
    },
  ],
})

export default router
