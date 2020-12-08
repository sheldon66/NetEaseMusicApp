<template>
  <div class="song-item">
    <div class="cover-pic" v-bind:style="styleObj"></div>
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
  props: ['pic', 'title', 'subtitle']

}
</script>

<style lang="scss">
div.song-item {
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "cover-pic title"
    "cover-pic subtitle";
  .cover-pic {
    grid-area: cover-pic;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 15vw;
    border-radius: $cover-border-radius;
  }
  .title {
    grid-area: title;
  }
  .subtitle {
    grid-area: subtitle;
  }
}
</style>
