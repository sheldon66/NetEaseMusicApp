<template>
  <router-link class="item" to="/">
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

<style lang="scss" scoped>
a.item {
  display: flex;
  align-items: center;
  .index {
    width: 10%;
    text-align: center;
  }
  .subtitle {
    font-size: $small-fontsize;
  }
}
</style>
