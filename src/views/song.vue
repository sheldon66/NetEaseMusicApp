<template>
  <div
    id="song"
    v-if="receivedData"
    class="playlist-background"
    :style="{
      backgroundImage: `url(${song.al.picUrl}?param=240y240)`,
    }"
  >
    <div class="song-content">
      <div class="song-name">
        <p>{{ song.name }}</p>
        <p>{{ authorNames }}</p>
      </div>
      <img :src="`${song.al.picUrl}?param=240y240`" />
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${song.id}.mp3`"
        @play="setPlayling(true)"
        @pause="setPlayling(false)"
      ></audio>
      <progress-bar></progress-bar>
      <div class="control-bar">
        <i class="iconfont icon-loop"></i>
        <i class="iconfont icon-prev"></i>
        <i
          class="iconfont"
          @click="playOrPause"
          :class="{
            'icon-play': !playing,
            'icon-pause': playing,
          }"
        ></i>
        <i class="iconfont icon-next"></i>
        <i class="iconfont icon-comment"></i>
      </div>
    </div>
  </div>
</template>

<script>
import getApiData from '@/api/index'
import progressBar from '@/components/common/progress.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  beforeCreate: function () {
    getApiData(`/song/detail?ids=${this.$route.params.id}`).then(
      response => {
        this.$data.song = response.songs[0]
        this.receivedData = true
      }
    )
  },
  data: function() {
    return {
      receivedData: false,
      song: null
    }
  },
  computed: {
    authorNames: function () {
      return this.song.ar.map((x) => x.name).join('/')
    },
    ...mapState(['playing'])
  },
  methods: {
    playOrPause: function () {
      this.$nextTick(
        () => {
          this.$refs.audio.paused ? this.$refs.audio.play() : this.$refs.audio.pause()
        }
      )
    },
    ...mapMutations(['togglePlay', 'setPlayling'])
  }
}
</script>

<style lang="scss">
#song {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  color: white;
}
.song-content {
  padding-top: 50px;
  backdrop-filter: blur(30px);
  height: 100%;
  width: 100%;
  img {
    border-radius: 50%;
    width: 100px;
  }
}
</style>
