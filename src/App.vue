<template>
  <div id="app">
    <header>
      <div class="title">vue-player</div>
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
        :style="{ backgroundImage: `url(${coverImgUrl}?param=300y300)` }"
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
  width: 100%;
  height: 100%;
  header {
    height: 60px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .router-view-wrapper {
    padding: 75px 15px 5px 15px;
    width: 100%;
    height: calc(100% - 60px);
    .view {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .player {
      height: 60px;
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
