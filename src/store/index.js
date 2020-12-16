import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId: null,
    avatarUrl: null,
    nickname: null,
    playing: false,
    audioElement: null
  },
  mutations: {
    updateLoginStatus: function (state, payload) {
      state.isLogin = payload.isLogin
      state.userId = payload.userId || null
      state.avatarUrl = payload.avatarUrl || null
      state.nickname = payload.nickname || null
    },
    togglePlay: function (state) {
      state.playing = !state.playing
    },
    setPlayling: function (state, status) {
      state.playing = status
    },
    setAudioElement: function (state, ele) {
      state.audioElement = ele
    }
  },
  modules: {
  }
})
