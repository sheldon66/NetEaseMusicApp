<template>
  <router-link class="playlist-item" to="/">
    <div class="index">
      {{ index }}
    </div>
    <div class="content">
      <div class="title"></div>
      {{ track.name }}
      <div class="subtitle">
        {{ track.ar.map((x) => x.name).join("/") }} - {{ track.al.name }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['track', 'index']
}
</script>

<style lang="scss">
a.playlist-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
  .index,
  .subtitle {
    color: #888;
  }
  .index {
    width: 10%;
    text-align: center;
    font-size: 1.2em;
  }
  .subtitle {
    font-size: $small-fontsize;
  }
}
</style>
