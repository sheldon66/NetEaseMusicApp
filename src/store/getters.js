// audio元素
export const audioElement = state => state.audioElement

export const currentMusic = state => state.playlist[state.currentIndex] || {}

export const playing = state => state.playing
