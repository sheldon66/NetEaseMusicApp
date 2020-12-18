<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="view"></router-view>
    <player></player>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
import player from '@/views/player/player'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: { navbar, player },
  computed: { ...mapGetters(['audioElement', 'currentMusic']) },
  methods: { ...mapMutations(['setPlayling', 'setAudioElement']) }
}

</script>
<style lang="scss">
#app {
  overflow-y: scroll;
  -webkit-overflow-scrolling: auto;
}
</style>
