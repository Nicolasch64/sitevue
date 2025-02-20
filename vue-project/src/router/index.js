import { createRouter, createWebHistory } from 'vue-router'

import Drawings from '../views/DrawingsPage.vue'
import Home from '../views/HomePage.vue'
import Paintings from '../views/PaintingsPage.vue'

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
    {
      path: '/paintings',
      name: 'paintings',
      component: Paintings,
    },
  ],
})

export default router
