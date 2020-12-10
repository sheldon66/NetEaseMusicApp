import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId: null,
    avatarUrl: null,
    nickname: null

  },
  mutations: {
    updateLoginStatus: function (store, payload) {
      store.isLogin = payload.isLogin
      store.userId = payload.userId || null
      store.avatarUrl = payload.avatarUrl || null
      store.nickname = payload.nickname || null
    }
  },
  actions: {
  },
  modules: {
  }
})
