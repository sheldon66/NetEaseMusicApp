<template>
  <nav id="navbar">
    <div class="tabtitle">
      <router-link
        v-for="(item, index) in items"
        :key="`${index}`"
        :to="item.path"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data: function () {
    return {
      items: [{ name: '正在播放', path: '/playinglist' },
        { name: '推荐', path: '/recommend' },
        { name: '搜索', path: '/' },
        { name: '我的歌单', path: '/' },
        { name: '历史', path: '/' }]
    }
  }
}
</script>

<style lang="scss">
nav#navbar {
  height: 30px;
  div.tabtitle {
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    a {
      flex: auto;
      text-align: center;
    }
  }
}
</style>
