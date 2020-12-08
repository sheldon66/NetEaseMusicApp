<template>
  <div id="custom">
    <div>{{ custom.title }}</div>
    <div>{{ custom.subTitle }}</div>
    <div class="columns">
      <div
        class="column"
        v-for="(column, index) in custom.creatives"
        :key="index"
      >
        <songItem
          v-for="(song, subindex) in column.resources"
          :pic="song.uiElement.image.imageUrl"
          :title="song.uiElement.mainTitle.title"
          :subtitle="(song.uiElement.subTitle || {}).title"
          :key="subindex"
        >
        </songItem>
      </div>
    </div>
  </div>
</template>

<script>
import songItem from '@/components/song/item.vue'
export default {
  props: ['custom'],
  components: { songItem }

}
</script>

<style lang="scss">
div#custom {
  // padding-left: $global-padding;
  div.columns {
    // margin-left: -$global-padding;
    // padding-left: $global-padding;
    display: flex;
    div.column {
      flex: auto;
      width: 85vw;
      scroll-snap-align: start;
      flex-shrink: 0;
      padding-left: $global-padding;
      transform-origin: center center;
      transform: scale(1);
      transition: transform 0.5s;
      position: relative;
    }

    // display: grid;
    // grid-template-columns: repeat(4, 90vw);
    // grid-auto-flow: column;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
  div.columns::-webkit-scrollbar {
    display: none;
  }
}
</style>
