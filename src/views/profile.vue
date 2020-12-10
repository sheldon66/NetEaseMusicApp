<template>
  <div>
    <router-link
      v-for="(playlist, index) in playlists"
      :to="`/playlist?id=${playlist.id}`"
      :key="index"
    >
      <item
        class="user-created-playlists"
        :title="playlist.name"
        :pic="playlist.coverImgUrl"
        :subtitle="`${playlist.trackCount} 首`"
      ></item>
    </router-link>
  </div>
</template>

<script>
import getApiData from '@/api/index'
import item from '@/components/common/item.vue'
export default {
  created: function () {
    getApiData(`/user/playlist?uid=${this.$store.state.userId}`).then(
      response => {
        this.playlists = response.playlist
      }
    )
  },
  data: function() {
    return {
      playlists: null
    }
  },
  components: { item }

}
</script>

<style>

</style>
