// audio元素
export const audioElement = state => state.audioElement

export const currentMusic = state => state.playlist[state.currentIndex] || {}

export const playing = state => state.playing

export const playlist = state => state.playlist

export const currentIndex = state => state.currentIndex
