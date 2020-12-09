<template>
  <div>
    <div class="header">
      <div class="playlist-background">
        <div
          :style="{ backgroundImage: `url(${coverImgUrl}?param=120y120)` }"
        ></div>
      </div>
      <div class="plhead">
        <div class="plhead_fl">
          <img class="album-cover" :src="`${coverImgUrl}?param=100y100`" />
        </div>
        <div class="plhead_rl">
          <div>{{ name }}</div>
          <div>{{ creator.nickname }}</div>
        </div>
      </div>
    </div>
    <div v-for="(track, index) in tracks" :key="index">
      <div>{{ index + 1 }}</div>
      <div>{{ track.name }}</div>
      <div>
        {{ track.ar.map((x) => x.name).join("/") }} - {{ track.al.name }}
      </div>
    </div>
  </div>
</template>

<script>
import getPlaylistDetail from '@/api/playlistDetail.js'

export default {
  created: function () {
    getPlaylistDetail('5350512347').then(response => {
      this.$data.tracks = response.playlist.tracks
      this.$data.coverImgUrl = response.playlist.coverImgUrl
      this.$data.name = response.playlist.name
      this.$data.creator = response.playlist.creator
    })
  },
  data: function() {
    return {
      tracks: null,
      coverImgUrl: null,
      name: null,
      creator: {}
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
}
.playlist-background {
  overflow: hidden;
  > div {
    height: 140px;
    width: 100%;
    background-position: center;
    background-size: cover;
    filter: blur(40px);
  }
}
.plhead {
  width: 80%;
  height: 100px;
  position: absolute;
  display: flex;
  top: 20px;
  left: 20px;
}
</style>
