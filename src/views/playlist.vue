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
    <item
      v-for="(track, index) in tracks"
      :key="index"
      :track="track"
      :index="index"
      @select-item="selectItem"
    ></item>
  </div>
</template>

<script>
import getPlaylistDetail from '@/api/playlistDetail.js'
import item from '@/components/playlist/item.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'playlist',
  created: function () {
    getPlaylistDetail(this.$route.query.id).then(response => {
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
  },
  computed: {
    ...mapGetters(['currentMusic', 'audioElement'])
  },
  methods: {
    selectItem: function (index) {
      this.setPlaylist(this.tracks)
      this.setCurrentIndex(index)
      // this.audioElement.play()
    },
    ...mapMutations(['setPlaylist', 'setCurrentIndex'])
  },
  components: { item }
}
</script>

<style scoped lang="scss">
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
