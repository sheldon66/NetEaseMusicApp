<template>
  <div class="row">
    <div class="cover-pic" v-bind:style="styleObj"></div>
    <div v-if="index" class="index">{{ title }}</div>
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      styleObj: {
        backgroundImage: `url(${this.pic}?param=140y140)`
      }
    }
  },
  props: ['index', 'pic', 'title', 'subtitle']

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
