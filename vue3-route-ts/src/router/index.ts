import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Fact from '@/views/Fact.vue'
import { facts } from '@/assets/facts';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fact/:id',
    name: 'Fact',
    component: Fact,
    beforeEnter: (to, _, next) => {
      const { id } = to.params
      if (Array.isArray(id)) {
        next({ path: '/error' })
        return
      }

      const index = parseInt(id)
      if (index < 0 || index >= facts.length) {
        next({ path: '/error' })
        return
      }

      next()
    }
  },
  {
    path: '/facts',
    name: 'FactList',
    component: () => import('@/views/FactList.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: () => import('@/views/PageNotFound.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
