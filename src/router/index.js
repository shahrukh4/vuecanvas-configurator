import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DrawingPad from '../views/DrawingPad.vue'
import SnakePointer from '../views/SnakePointer.vue'
import Bike from '../views/Canvas/Bike.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drawingpad',
    name: 'DrawingPad',
    component: DrawingPad
  },
  {
    path: '/bike',
    name: 'Bike',
    component: Bike
  },
  {
    path: '/snakepointer',
    name: 'SnakePointer',
    component: SnakePointer
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
