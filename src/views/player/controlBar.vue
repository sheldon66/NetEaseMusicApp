<template>
  <div class="control-bar">
    <i class="iconfont" :class="playModeStyle" @click="switchPlayMode"></i>
    <i class="iconfont icon-prev" @click="$emit('play-previous')"></i>
    <i
      :class="{
        iconfont: true,
        'icon-play': !playing,
        'icon-pause': playing,
      }"
      @click="$emit('play-toggle')"
    ></i>
    <i class="iconfont icon-next" @click="$emit('play-next')"></i>

    <i class="iconfont icon-comment"></i>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data: function () {
    return {
      playModeIconClass: ['icon-loop', 'icon-loop-one', 'icon-random']
    }
  },
  computed: {
    ...mapGetters(['playing', 'playMode']),
    playModeStyle () {
      return this.playModeIconClass[this.playMode]
    }
  },
  methods: {
    ...mapMutations(['setPlayMode']),
    switchPlayMode() {
      const newPlayMode = (this.playMode + 1) % 3
      this.setPlayMode(newPlayMode)
    }
  }
}
</script>
<style lang="scss" scoped>
.control-bar {
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
  .iconfont {
    font-size: 30px;
  }
}
</style>
