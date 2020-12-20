<template>
  <div id="app">
    <header>vue-player</header>
    <router-view class="view"></router-view>
    <player></player>
  </div>
</template>

<script>
import player from '@/views/player/player'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: { player },
  computed: { ...mapGetters(['audioElement', 'currentMusic']) },
  methods: { ...mapMutations(['setPlayling', 'setAudioElement']) }
}

</script>
<style lang="scss">
#app {
  overflow: hidden;
  -webkit-overflow-scrolling: auto;
}
</style>
