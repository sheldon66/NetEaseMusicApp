<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
export default {
  components: { navbar }
}

</script>
<style lang="scss">
#app {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
