import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/scss/reset.scss'

Vue.config.productionTip = false
Vue.directive('lazyload', {
  bind: function (el, binding, vnode) {
    el.src = require('@/assets/default.png')
    el.onload = () => {
      el.onload = null
      el.src = binding.value
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
