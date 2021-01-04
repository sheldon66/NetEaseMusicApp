<template>
  <div id="player">
    <div class="player-bar">
      <status-bar></status-bar>
      <control-bar
        @play-next="playNextMusic"
        @play-previous="playPreviousMusic"
        @play-toggle="togglePlay"
      ></control-bar>
    </div>
    <audio
      ref="player"
      autoplay
      :loop="playMode === 1"
      @play="setPlaying(true)"
      @pause="setPlaying(false)"
      @ended="playNextMusic"
      @timeupdate="updateTime"
    ></audio>
  </div>
</template>

<script>
import getApiData from '@/api/index'
import { mapMutations, mapGetters } from 'vuex'
import ControlBar from './controlBar.vue'
import StatusBar from './statusBar.vue'
export default {
  computed: {
    ...mapGetters(['audioElement', 'currentTime', 'seekTime', 'currentMusic',
      'playing', 'playlist', 'currentIndex', 'playMode'])
  },
  methods: {
    ...mapMutations(['setPlaying', 'setAudioElement', 'setCurrentIndex', 'setCurrentTime']),
    togglePlay() {
      this.playing ? this.audioElement.pause() : this.audioElement.play()
    },
    updateTime() {
      this.setCurrentTime(this.audioElement.currentTime)
    },
    playNextMusic(event) {
      const newIndex = (this.currentIndex + 1) % this.playlist.length
      this.setCurrentIndex(newIndex)
    },
    playPreviousMusic() {
      const newIndex = (this.currentIndex - 1) % this.playlist.length
      this.setCurrentIndex(newIndex)
    }
  },
  watch: {
    currentMusic(newMusic, oldMusic) {
      getApiData(`/song/url?id=${newMusic.id}`).then(
        response => {
          this.audioElement.src = response.data[0].url
        })
      this.$nextTick(() => this.audioElement.play())
    },
    seekTime(newTime, oldTime) {
      this.$refs.player.currentTime = newTime
    }
  },
  mounted() {
    this.$nextTick(() => this.setAudioElement(this.$refs.player))
  },
  components: { ControlBar, StatusBar }
}
</script>
<style lang="scss" scoped>
.player-bar {
  height: 100%;
  color: $highlight-color;
  > * {
    // flex: none;
  }
  > .status-bar {
    // flex: auto;
    min-width: 0;
  }
}
</style>
