import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/recommend/recommend.vue')
  },
  {
    path: '/myself',
    name: 'myself',
    component: () => import('@/views/myself.vue')
  },
  {
    path: '/playlist',
    name: 'playlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/playlist/playlist.vue')
  },
  {
    path: '/song/:id',
    name: 'song',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/song/song.vue')
  },
  {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/notFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
