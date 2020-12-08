<template>
  <nav id="navbar">
    <ul>
      <li v-for="(item, index) in items" :key="`${index}`">
        <router-link to="/">{{ item }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data: function () {
    return { items: ['发现', '播客', '我的', 'K歌', '云村'] }
  }
}
</script>

<style lang="scss">
nav#navbar {
  height: 0;
  position: relative;
  padding-bottom: 20px;
  ul {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    height: 20px;
    width: 100%;
    background-color: $primary-color;
    z-index: 100;
    li {
      flex: auto;
      text-align: center;
    }
  }
}
</style>
