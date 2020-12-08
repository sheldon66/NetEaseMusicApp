<template>
  <ul id="banner">
    <div v-for="(banner, index) in banners" :key="index" class="banner-cover">
      <img :src="banner.pic" />
      <a href=""></a>
    </div>
  </ul>
</template>

<script>
import bannerData from '@/api/banner.js'
export default {
  name: 'Banner',
  created: function() {
    bannerData.then(response => {
      this.$data.banners = response
    })
  },
  data: function () {
    return { banners: null }
  }
}
</script>

<style lang="scss">
#banner::-webkit-scrollbar {
  display: none;
}
#banner {
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-y: hidden;
  div.banner-cover {
    scroll-snap-align: start;
    flex-shrink: 0;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    width: 100%;
    text-align: center;
    img {
      border-radius: 10px;
      width: 90vw;
    }
  }
}
</style>
