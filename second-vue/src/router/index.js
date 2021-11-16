import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Facts from '../views/Facts'
import FactsDetails from '../views/Facts/FactsDetails.vue'
import Board from '../views/Board.vue'
import Error from '@/views/Error.vue'

Vue.use(VueRouter)

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/facts',
    name: 'Facts',
    component: Facts
  },
  {
    path: '/facts/:id',
    name: 'FactsDetails',
    component: FactsDetails
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '*',
    name: "Error",
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
