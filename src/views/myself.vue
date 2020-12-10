<template>
  <div v-if="getLoginStatus">
    <login v-if="!isLogin"></login>
    <div class="profile" v-else>
      <img :src="`${avatarUrl}?param=100y100`" />
      <div>{{ nickname }}</div>
    </div>
    <profile class="playlists" v-if="isLogin"></profile>
  </div>
</template>

<script>
import login from '@/components/login/login.vue'
import checkLogin from '@/api/checkLogin'
import { mapState } from 'vuex'
import profile from '@/views/profile.vue'

export default {
  created: function() {
    checkLogin().then(
      response => {
        this.$store.commit('updateLoginStatus', response)
        this.$data.getLoginStatus = true
      }
    )
  },
  data: function() {
    return {
      getLoginStatus: false
    }
  },
  computed: mapState(['isLogin', 'avatarUrl', 'nickname']),
  components: { login, profile }
}
</script>

<style lang="scss">
.profile {
  display: flex;
  margin-top: 40px;
  height: 50px;
  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-right: 20px;
  }
  div {
    font-size: 1.5em;
  }
}
</style>
