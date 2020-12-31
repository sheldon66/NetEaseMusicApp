<template>
  <div class="playlist-item" @click="selectItem">
    <div class="index">{{ index + 1 }}</div>
    <div class="title">{{ track.name }}</div>
    <div class="authors">
      {{ track.ar.map((x) => x.name).join("/") }}
    </div>
    <!-- <div class="duration-time">{{ durationTimeFormat }}</div> -->
  </div>
</template>

<script>
import { secondsToFormatmmSS } from '@/utils/datetime.js'
export default {
  props: ['track', 'index'],
  methods: {
    selectItem() {
      this.$emit('select-item', this.index)
    }
  },
  computed: {
    durationTimeFormat() {
      return secondsToFormatmmSS(this.track.dt / 1000)
    }
  }
}
</script>

<style lang="scss">
$line-height: 50px;
.playlist-item {
  display: flex;
  align-items: center;
  height: $line-height;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  > div {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    line-height: $line-height;
  }
  > div:not(:last-child) {
    margin-right: 10px;
  }
  .index {
    flex: none;
    width: 30px;
  }
  .title {
    flex: auto;
    text-overflow: ellipsis;
  }
  .authors {
    flex: none;
    width: 80px;
    text-overflow: ellipsis;
  }
  .duration-time {
    flex: none;
    width: 40px;
    text-align: right;
  }
}
.playing {
  color: white;
}
</style>
