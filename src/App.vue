<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
export default {
  beforeCreate: function() {
    this.$router.replace(window.location.pathname).catch(() => {})
  },
  components: { navbar }
}

</script>
<style lang="scss">
#app {
  overflow-y: scroll;
  -webkit-overflow-scrolling: auto;
}
.view {
  margin-top: 30px;
}
</style>
