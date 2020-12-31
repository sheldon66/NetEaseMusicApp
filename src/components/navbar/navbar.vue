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
      items: [{ name: '播放', path: '/playlist/0' },
        { name: '推荐', path: '/recommend' },
        { name: '搜索', path: '/' },
        { name: '歌词', path: '/' },
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
    justify-content: space-between;
    a {
      flex: none;
      text-align: center;
    }
  }
}
</style>
