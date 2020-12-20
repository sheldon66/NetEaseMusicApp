<template>
  <!-- <router-link class="playlist-item" :to="`/song/${track.id}`"> -->
  <div class="playlist-item" @dblclick="selectItem">
    <div class="index">
      {{ index + 1 }}
    </div>
    <div class="content">
      <div class="title">{{ track.name }}</div>
      <div class="subtitle">
        {{ track.ar.map((x) => x.name).join("/") }} - {{ track.al.name }}
      </div>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ['track', 'index'],
  methods: {
    selectItem() {
      this.$emit('select-item', this.index)
    }
  }
}
</script>

<style lang="scss">
.playlist-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
  .index {
    width: 10%;
    margin-right: 5px;
    text-align: center;
    color: #888;
  }
  .content {
    width: 90%;
    > div {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .subtitle {
      font-size: $small-fontsize;
      color: #888;
    }
  }
}
.playing {
  color: red;
}
</style>
