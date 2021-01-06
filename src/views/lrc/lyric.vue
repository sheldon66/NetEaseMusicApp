<template>
  <div class="container" ref="container">
    <div id="lyric" :style="{ transform: `translate(0, ${lyricTop}px)` }">
      <div
        v-for="(line, index) in lyric"
        :key="index"
        :index="index"
        :class="{ highlight: lineIndex == index }"
      >
        {{ line.text }}
      </div>
    </div>
  </div>
</template>
<script>
import getApiData from '@/api/index.js'
import parseLyric from '@/utils/parseLyric'
import _thottle from '@/utils/thottle.js'
import { mapGetters } from 'vuex'
export default {
  created() {
    if (this.currentMusic.id) {
      this.getLyric(this.currentMusic.id)
    }
  },
  mounted() {
    this.$nextTick(() => this.clacTop())
  },
  data() {
    return {
      lyric: null,
      lineIndex: 0,
      top: 0,
      lineHeight: 30
    }
  },
  methods: {
    getLyric(musicID) {
      getApiData(`/lyric?id=${musicID}`).then(
        response => {
          this.lyric = parseLyric(response.lrc.lyric)
        }
      )
    },
    clacTop() {
      const container = this.$refs.container
      const height = container.offsetHeight
      this.top = height / 2
    },
    thottleGetLine: _thottle((lyric, time, data) => {
      if (lyric && lyric.length > 0) {
        const length = lyric.length
        let low = 0
        let high = length - 1
        let mid
        while (low < high) {
          mid = Math.trunc((low + high) / 2)
          if (mid + 1 < length && time >= lyric[mid + 1].time) {
            low = mid + 1
          } else if (mid > 0 && time <= lyric[mid].time) {
            high = mid
          } else {
            data.lineIndex = mid
            return
          }
        }
      }
    }, 500)
  },

  computed: {
    ...mapGetters(['currentMusic', 'currentTime']),
    lyricTop() {
      return Math.floor(this.top - (this.lineIndex + 0.5) * this.lineHeight)
    }
  },
  watch: {
    currentMusic (newMusic) {
      this.getLyric(newMusic.id)
    },
    currentTime (newTime) {
      const data = this.$data
      this.thottleGetLine(this.lyric, newTime + 0.1, data) // 防抖以后函数体异步执行, 要传入this.$data
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  height: 100%;
  #lyric {
    text-align: center;
    div {
      line-height: 30px;
    }
    .highlight {
      color: white;
    }
  }
}
</style>
