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
    playlistID: null,
    currentIndex: 0,
    playMode: 0 // 0: 顺序播放 1:单曲循环 2:随机播放
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
    setPlaylistID: function (state, playlistID) {
      state.playlistID = playlistID
    },
    setCurrentIndex: function (state, currentIndex) {
      state.currentIndex = currentIndex
    },
    setPlayMode: function (state, playMode) {
      state.playMode = playMode
    }
  },
  modules: {
  }
})
