<template>
  <div class="control-bar">
    <i class="iconfont icon-loop"></i>
    <i class="iconfont icon-prev"></i>
    <i
      class="iconfont"
      @click="togglePlaying"
      :class="{
        'icon-play': !playing,
        'icon-pause': playing,
      }"
    ></i>
    <i class="iconfont icon-next"></i>
    <progress-bar :percent="percent"></progress-bar>
    <i class="iconfont icon-comment"></i>
  </div>
</template>

<script>
import progressBar from './progressBar.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: { progressBar },
  props: {
    currentTimeMs: {
      type: [Number],
      default: 0
    },
    durationTimeMs: {
      type: [Number],
      default: 0
    }
  },
  computed: {
    percent: function () { return this.currentTimeMs / this.durationTimeMs }, // 匿名函数不能用this
    ...mapState(['playing', 'audioElement'])
  },
  methods: {
    ...mapMutations(['togglePlay', 'setPlayling', 'setAudioElement']),
    togglePlaying: function () {
      this.setPlayling(!this.playing)
    }
  }

}
</script>

<style lang="scss">
</style>
