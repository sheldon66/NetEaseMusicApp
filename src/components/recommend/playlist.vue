<template>
  <ul id="playlist-rcmd">
    <li v-for="item in playlist" :key="item.creativeId">
      <div class="cover">
        <img
          :src="`${item.uiElement.image.imageUrl}?param=140y140`"
          :alt="item.uiElement.mainTitle.title"
        />
        <span>{{ item.uiElement.mainTitle.title }}</span>
        <a href=""></a>
      </div>
    </li>
  </ul>
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
  li {
    div.cover {
      width: 27vw;
      padding-right: 3vw;
      img {
        width: 27vw;
        border-radius: $cover-border-radius;
      }
    }
  }
}
#playlist-rcmd::-webkit-scrollbar {
  display: none;
}
</style>
