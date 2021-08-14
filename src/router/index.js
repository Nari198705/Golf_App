import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Round_Info',
    name: 'Round_Info',
    component: () => import('../views/Round_Info.vue')
  },
  {
    path: '/Result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
