<template>
  <div id="app">
    <header>vue-player</header>
    <router-view class="view"></router-view>
    <player></player>
    <div class="player-bg-wrapper">
      <div
        class="player-bg"
        :style="{ backgroundImage: `url(${coverImgUrl}?param=300y300)` }"
      ></div>
    </div>
    <div class="player-mask"></div>
  </div>
</template>

<script>
import player from '@/views/player/player'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: { player },
  computed: {
    ...mapGetters(['audioElement', 'currentMusic']),
    coverImgUrl() {
      return this.currentMusic.al ? this.currentMusic.al.picUrl : ''
    }
  },
  methods: { ...mapMutations(['setPlayling', 'setAudioElement']) }
}

</script>
<style lang="scss">
#app {
  overflow: hidden;
  -webkit-overflow-scrolling: auto;
  color: $primary-color;
  .view {
    height: calc(100vh - 150px);
  }
  .player-bg-wrapper,
  .player-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.player-bg-wrapper {
  z-index: -2;
  overflow: hidden;
}
.player-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.7;
  filter: blur(15px);
  transition: all 0.8s;
  transform: scale(1.1);
  width: 100%;
  height: 100%;
}
.player-mask {
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
