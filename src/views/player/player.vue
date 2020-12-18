<template>
  <div id="player">
    <div class="control-bar">
      <i class="iconfont icon-loop"></i>
      <i class="iconfont icon-prev"></i>
      <i
        :class="{
          iconfont: true,
          'icon-play': !playing,
          'icon-pause': playing,
        }"
        @click="switchPlay"
      ></i>
      <i class="iconfont icon-next"></i>
      <i class="iconfont icon-comment"></i>
    </div>
    <audio ref="player" @play="playAudio" @pause="pauseAudio"></audio>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: { ...mapGetters(['audioElement', 'currentMusic', 'playing']) },
  methods: {
    ...mapMutations(['setPlaying', 'setAudioElement']),
    switchPlay() {
      this.playing ? this.audioElement.pause() : this.audioElement.play()
    },
    playAudio() {
      this.setPlaying(true)
    },
    pauseAudio() {
      this.setPlaying(false)
    }
  },
  watch: {
    currentMusic(newMusic, oldMusic) {
      this.audioElement.src =
        `https://music.163.com/song/media/outer/url?id=${newMusic.id}.mp3`
      // this.setPlayling(true)
    }
    // playing(newPlaying, oldPlaying) {
    //   if (newPlaying) {
    //     this.audioElement.play().catch(() => this.setPlayling(oldPlaying))
    //   }
    // }
  },
  mounted() {
    this.$nextTick(() => this.setAudioElement(this.$refs.player))
  }
}
</script>

<style>

</style>
