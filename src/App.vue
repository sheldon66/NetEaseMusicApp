<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>
    <div class="router-view-wrapper">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </div>
    <player class="player"></player>
    <div class="player-bg-wrapper">
      <div
        class="player-bg"
        :style="{ backgroundImage: `url(${bgImageUrl})` }"
      ></div>
    </div>
    <div class="player-mask"></div>
  </div>
</template>

<script>
import player from '@/views/player/player'
import { mapMutations, mapGetters } from 'vuex'
import navbar from '@/components/navbar/navbar.vue'

export default {
  components: { player, navbar },
  computed: {
    ...mapGetters(['audioElement', 'currentMusic']),
    bgImageUrl() {
      return this.currentMusic.al ? `${this.currentMusic.al.picUrl}?param=300y300` : require('@/assets/bg.jpg')
    }
  },
  methods: { ...mapMutations(['setPlayling', 'setAudioElement']) }
}

</script>
<style lang="scss">
$padding-horizontal: 15px;
$player-height: 80px;
$header-height: 50px;
#app {
  overflow: hidden;
  -webkit-overflow-scrolling: auto;
  color: $primary-color;
  header {
    height: $header-height;
    width: 100%;
    position: absolute;
    padding: 0 $padding-horizontal;
    top: 0;
    left: 0;
  }
  .router-view-wrapper {
    padding: $header-height $padding-horizontal 0px $padding-horizontal;
    width: 100%;
    height: calc(100% - #{$player-height});
    .view {
      width: 100%;
      height: 100%;

      overflow-y: auto;
      overflow-x: hidden;
    }
  }
  .player-bg-wrapper,
  .player-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .player {
    height: $player-height;
    padding: 0 $padding-horizontal 0 $padding-horizontal;
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
  transform: scale(1.2);
  width: 100%;
  height: 100%;
}
.player-mask {
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
