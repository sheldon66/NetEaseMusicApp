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
        @timeupdate="updateTime"
      ></audio>
      <control-bar
        :currentTimeMs="currentTime * 1000"
        :durationTimeMs="this.song.dt"
      ></control-bar>
    </div>
  </div>
</template>

<script>
import getApiData from '@/api/index'
import controlBar from './coms/controlBar/controlBar.vue'
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
  mounted: function () {
    this.$nextTick(() => { this.setAudioElement(this.$refs.audio) })
  },
  data: function() {
    return {
      receivedData: false,
      song: null,
      currentTime: 0
    }
  },
  computed: {
    authorNames: function () {
      return this.song.ar.map((x) => x.name).join('/')
    },
    ...mapState(['playing', 'audioElement'])
  },
  watch: {
    playing: function(newPlaying) {
      const audio = this.$refs.audio
      newPlaying ? audio.play() : audio.pause()
    }
  },
  methods: {
    ...mapMutations(['setPlayling', 'setAudioElement']),
    updateTime: function () {
      this.currentTime = this.$refs.audio.currentTime
    }
  },
  components: { controlBar }
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
