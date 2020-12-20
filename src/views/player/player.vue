<template>
  <div id="player">
    <div class="player-bar">
      <div class="control-bar">
        <i class="iconfont icon-prev" @click="playPreviousMusic"></i>
        <i
          :class="{
            iconfont: true,
            'icon-play': !playing,
            'icon-pause': playing,
          }"
          @click="switchPlay"
        ></i>
        <i class="iconfont icon-next" @click="playNextMusic"></i>
      </div>
      <progress-bar
        :percent="percent"
        @percentchange="percent = $event"
      ></progress-bar>
      <div class="model-bar">
        <i class="iconfont" :class="playModeStyle" @click="switchPlayMode"></i>
        <i class="iconfont icon-comment"></i>
      </div>
    </div>
    <audio
      ref="player"
      @play="setPlaying(true)"
      @pause="setPlaying(false)"
      @ended="playNextMusic"
      @timeupdate="updateTime"
    ></audio>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import progressBar from './progressBar.vue'
export default {
  data: function () {
    return {
      currentTime: 0,
      playModeIconClass: ['icon-loop', 'icon-loop-one', 'icon-random']
    }
  },
  computed: {
    ...mapGetters(['audioElement', 'currentMusic', 'playing', 'playlist', 'currentIndex', 'playMode']),
    playModeStyle () {
      return this.playModeIconClass[this.playMode]
    },
    percent: {
      get() { return this.currentTime * 1000 / this.currentMusic.dt },
      set(newPercent) {
        const currentTime = this.currentMusic.dt * newPercent / 1000
        this.audioElement.currentTime = currentTime
      }
    }
  },
  methods: {
    ...mapMutations(['setPlaying', 'setAudioElement', 'setCurrentIndex', 'setPlayMode']),
    switchPlay() {
      this.playing ? this.audioElement.pause() : this.audioElement.play()
    },
    switchPlayMode() {
      const newPlayMode = (this.playMode + 1) % 3
      this.setPlayMode(newPlayMode)
    },
    updateTime() {
      this.currentTime = this.audioElement.currentTime
    },
    playNextMusic(event) {
      if (event.type === 'ended' && this.playMode === 1) {
        this.audioElement.currentTime = 0
      } else {
        const newIndex = (this.currentIndex + 1) % this.playlist.length
        this.setCurrentIndex(newIndex)
      }
    },
    playPreviousMusic() {
      const newIndex = (this.currentIndex - 1) % this.playlist.length
      this.setCurrentIndex(newIndex)
    }
  },
  watch: {
    currentMusic(newMusic, oldMusic) {
      this.audioElement.src =
        `https://music.163.com/song/media/outer/url?id=${newMusic.id}.mp3`
      this.$nextTick(() => this.audioElement.play())
    }
  },
  mounted() {
    this.$nextTick(() => this.setAudioElement(this.$refs.player))
  },
  components: { progressBar }
}
</script>

<style lang="scss">
.player-bar {
  display: flex;
  height: 50px;
  > * {
    flex: auto;
    height: 100%;
  }
  .iconfont {
    font-size: 36px;
  }
}
</style>
