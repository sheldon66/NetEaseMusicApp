<template>
  <div id="player">
    <div class="player-bar">
      <div class="control-bar">
        <i class="iconfont icon-prev"></i>
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
        <i class="iconfont icon-loop"></i>
        <i class="iconfont icon-comment"></i>
      </div>
    </div>
    <audio
      ref="player"
      @play="setPlaying(true)"
      @pause="setPlaying(false)"
      @timeupdate="updateTime"
    ></audio>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import progressBar from './progressBar.vue'
export default {
  data: function () {
    return { currentTime: 0 }
  },
  computed: {
    ...mapGetters(['audioElement', 'currentMusic', 'playing', 'playlist', 'currentIndex']),
    percent: {
      get() { return this.currentTime * 1000 / this.currentMusic.dt },
      set(newPercent) {
        const currentTime = this.currentMusic.dt * newPercent / 1000
        this.audioElement.currentTime = currentTime
      }
    }
  },
  methods: {
    ...mapMutations(['setPlaying', 'setAudioElement', 'setCurrentIndex']),
    switchPlay() {
      this.playing ? this.audioElement.pause() : this.audioElement.play()
    },
    updateTime() {
      this.currentTime = this.audioElement.currentTime
    },
    playNextMusic() {
      const newIndex = (this.currentIndex + 1) % this.playlist.length
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
