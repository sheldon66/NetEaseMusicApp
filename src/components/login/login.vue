<template>
  <div id="login">
    <div>
      <input
        v-model="username"
        type="text"
        id="username"
        placeholder="用户名"
        autocomplete="username"
      />
    </div>
    <div>
      <input
        v-model="password"
        type="password"
        id="password"
        autocomplete="current-password"
        placeholder="密码"
      />
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import getApiData from '@/api/index.js'
export default {
  data: function() {
    return {
      username: null,
      password: null,
      loginData: null
    }
  },
  methods: {
    login: function(event) {
      getApiData(`/login?email=${this.$data.username}&password=${this.$data.password}`).then(
        response => { this.$data.loginData = response.data }
      )
    }
  }

}
</script>

<style lang="scss">
#login {
  margin-top: 20vh;
  margin-left: 5vw;
  margin-right: 5vw;
  input {
    height: 30px;
    width: 100%;
    border-bottom: 1px solid rgb(206, 206, 206);
    margin-top: 20px;
  }
  button {
    margin-top: 40px;
    height: 30px;
    width: 100%;
    background-color: $primary-color;
    border-radius: 15px;
  }
}
</style>
