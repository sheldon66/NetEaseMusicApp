<template>
  <div class="status-bar">
    <div class="status">
      <div class="text-status">
        <span v-if="!currentMusic.id">欢迎使用vue-player</span>
        <template v-else>
          <div class="title-author">
            {{ currentMusic.name }}-{{ authorNames }}
          </div>
          <div class="time">
            {{ currentTimeFormat }}/{{ durationTimeFormat }}
          </div>
        </template>
      </div>
      <progress-bar
        :percent="percent"
        @percentchange="percent = $event"
      ></progress-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { secondsToFormatmmSS } from '@/utils/datetime.js'
import progressBar from './progressBar.vue'
export default {
  components: { progressBar },
  methods: {
    ...mapMutations(['setSeekTime'])
  },
  computed: {
    ...mapGetters(['currentMusic', 'currentTime']),
    currentTimeFormat() {
      return secondsToFormatmmSS(this.currentTime)
    },
    durationTimeFormat() {
      return secondsToFormatmmSS(this.currentMusic.dt / 1000)
    },
    authorNames() {
      return this.currentMusic.ar ? this.currentMusic.ar.map((x) => x.name).join('/') : ''
    },
    percent: {
      get() { return this.currentTime * 1000 / this.currentMusic.dt },
      set(newPercent) {
        const currentTime = this.currentMusic.dt * newPercent / 1000
        this.setSeekTime(currentTime)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-status {
  display: flex;
  position: relative;
  > * {
    overflow: hidden;
  }
  .title-author {
    flex: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .time {
    flex: none;
    width: 100px;
    text-align: right;
  }
}
</style>
