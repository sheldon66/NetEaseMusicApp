<template>
  <div class="discover">
    <banner></banner>
    <playlist :playlist="playlistRcmd"></playlist>
    <custom :custom="custom"></custom>
    <custom :custom="custom"></custom>
  </div>
</template>

<script>
// @ is an alias to /src
import playlist from '@/components/recommend/playlist'
import custom from '@/components/recommend/custom'
import banner from '@/components/banner/banner'
import discoverData from '@/api/discover.js'
export default {
  name: 'Discover',
  created: function() {
    discoverData.then(resonpse => {
      this.$data.playlistRcmd = resonpse.playlist
      this.$data.custom = resonpse.custom
    })
  },
  data: function () {
    return {
      playlistRcmd: null,
      custom: { }
    }
  },
  components: {
    playlist, banner, custom
  }
}
</script>
