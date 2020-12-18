import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId: null,
    avatarUrl: null,
    nickname: null,
    playing: false,
    audioElement: null,
    currentTime: 0,
    durationTime: 0,
    playlist: [],
    currentIndex: -1
  },
  getters,
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
    setPlaying: function (state, status) {
      state.playing = status
    },
    setAudioElement: function (state, ele) {
      state.audioElement = ele
    },
    setPlaylist: function (state, playlist) {
      state.playlist = playlist
    },
    setCurrentIndex: function (state, currentIndex) {
      state.currentIndex = currentIndex
    }
  },
  modules: {
  }
})
