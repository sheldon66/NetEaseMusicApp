<template>
  <div
    id="song"
    v-if="receivedData"
    class="playlist-background"
    :style="{
      backgroundImage: `url(${song.al.picUrl || ''}?param=240y240)`,
    }"
  >
    <div class="song-content">
      <div class="song-name">
        {{ song.name }}
      </div>
      <audio
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
      ></audio>
      <button><i class="iconfont">&#xf07e;</i></button>
    </div>
  </div>
</template>

<script>
import getApiData from '@/api/index'
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
  }
}
</script>

<style lang="scss">
#song {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
}
.song-content {
  padding-top: 50px;
  backdrop-filter: blur(30px);
  height: 100%;
  width: 100%;
}
</style>
