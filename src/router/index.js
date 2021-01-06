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
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/search.vue')
  },
  {
    path: '/playlist/:id',
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
    path: '/lyric',
    name: 'lyric',
    component: () => import('@/views/lrc/lyric.vue')
  },
  {
    path: '*',
    redirect: '/recommend'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes
})

export default router
