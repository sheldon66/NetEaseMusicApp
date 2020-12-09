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
      items: [{ name: '发现', path: '/discover' },
        { name: '播客', path: '/' },
        { name: '我的', path: '/user' },
        { name: 'K歌', path: '/' },
        { name: '云村', path: '/' }]
    }
  }
}
</script>

<style lang="scss">
nav#navbar {
  height: 0;
  position: fixed;
  padding-bottom: 20px;
  z-index: 100;
  div.tabtitle {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    height: 20px;
    width: 100%;
    background-color: $primary-color;
    a {
      flex: auto;
      text-align: center;
    }
  }
}
</style>
