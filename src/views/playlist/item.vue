<template>
  <!-- <router-link class="playlist-item" :to="`/song/${track.id}`"> -->
  <div class="playlist-item" @dblclick="selectItem">
    <span class="index">{{ index + 1 }}</span>
    <span class="title">{{ track.name }}</span>
    <span class="authors">
      {{ track.ar.map((x) => x.name).join("/") }}
    </span>
    <span class="duration-time">{{ durationTimeFormat }}</span>
  </div>

  <!-- </router-link> -->
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
  > span {
    height: 100%;
    line-height: $line-height;
  }
  .index {
    width: 30px;
    margin-right: 10px;
    text-align: center;
  }
  .title {
    flex: 1;
  }
  .authors {
    width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .duration-time {
    width: 40px;
  }
}
.playing {
  color: white;
}
</style>
