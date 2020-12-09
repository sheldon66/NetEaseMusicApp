import Vue from 'vue'
import VueRouter from 'vue-router'
import Discover from '../views/discover.vue'
import Playlist from '../views/playlist.vue'
import notFound from '../views/notFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/playlist',
    name: 'playlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Playlist
  },
  {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: notFound
  }
]

const router = new VueRouter({
  routes
})

export default router
