import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "video" */ '../views/video.vue')
  },
  {
    path: '/sizeChange',
    name: 'SizeChange',
    component: () => import(/* webpackChunkName: "video" */ '../views/sizeChange.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "video" */ '../views/layout.vue')
  },
  
]
// console.log(process.env);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
