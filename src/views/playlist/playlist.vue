<template>
  <div class="view">
    <div class="header"></div>
    <item
      v-for="(track, index) in tracks"
      :key="index"
      :track="track"
      :index="index"
      :class="{ playing: currentPlayingItem === index }"
      @select-item="selectItem"
    ></item>
  </div>
</template>

<script>
import getPlaylistDetail from '@/api/playlistDetail.js'
import item from './item.vue'
import { mapGetters, mapMutations } from 'vuex'
function dataUpdate (that, routeID) {
  if (routeID === '0') {
    that.tracks = that.playlist
    that.$data.localPlaylistID = that.playlistID
  } else {
    getPlaylistDetail(routeID).then(response => {
      that.$data.tracks = response.playlist.tracks
      that.$data.localPlaylistID = response.playlist.id
      // this.$data.coverImgUrl = response.playlist.coverImgUrl
      // this.$data.name = response.playlist.name
      // this.$data.creator = response.playlist.creator
    })
  }
}
export default {
  name: 'playlist',
  activated: function () {
    dataUpdate(this, this.$route.params.id)
  },
  beforeRouteUpdate(to, from, next) {
    dataUpdate(this, to.params.id)
    console.log(to.params.id)
    next()
  },
  deactivated() {
    this.tracks = null
  },
  data: function() {
    return {
      tracks: null,
      coverImgUrl: null,
      name: null,
      localPlaylistID: null,
      creator: {}
    }
  },
  computed: {
    ...mapGetters(['currentMusic', 'audioElement', 'currentIndex', 'playlistID', 'playing', 'playlist']),
    currentPlayingItem() {
      return this.localPlaylistID === this.playlistID ? this.currentIndex : null
    }
  },
  methods: {
    selectItem: function (index) {
      if (this.localPlaylistID !== this.playlistID) {
        this.setPlaylist(this.tracks)
        this.setPlaylistID(this.localPlaylistID)
      } else if (index === this.currentIndex) {
        return this.playing ? this.audioElement.pause() : this.audioElement.play() // 待优化
      }
      this.setCurrentIndex(index)
    },
    ...mapMutations(['setPlaylist', 'setCurrentIndex', 'setPlaylistID'])
  },
  components: { item }
}
</script>

<style scoped lang="scss">
.view {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.header {
  position: relative;
}
.playlist-background {
  overflow: hidden;
  > div {
    height: 220px;
    width: 100%;
    margin-top: -30px;
    background-position: center;
    background-size: cover;
    filter: blur(40px);
  }
}
img.album-cover {
  width: 100px;
  height: 100px;
}
.plhead {
  width: 80%;
  height: 100px;
  position: absolute;
  display: flex;
  top: 60px;
  left: 30px;
}
</style>
