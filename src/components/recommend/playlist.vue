<template>
  <div id="playlist-rcmd">
    <router-link
      class="cover"
      v-for="item in playlist"
      :key="item.creativeId"
      :to="`/playlist?id=${item.creativeId}`"
    >
      <img
        :src="`${item.uiElement.image.imageUrl}?param=140y140`"
        :alt="item.uiElement.mainTitle.title"
      />
      <span>{{ item.uiElement.mainTitle.title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['playlist']

}
</script>

<style lang="scss">
#playlist-rcmd {
  display: flex;
  overflow-x: scroll;
  padding-left: $global-padding;
  a.cover {
    width: 27vw;
    padding-right: 3vw;
    img {
      width: 27vw;
      border-radius: $cover-border-radius;
    }
  }
}
#playlist-rcmd::-webkit-scrollbar {
  display: none;
}
</style>
