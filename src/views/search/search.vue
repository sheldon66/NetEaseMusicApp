<template>
  <div id="search">
    <div class="search-input">
      <form action="">
        <input
          type="search"
          v-model="keywords"
          id="search-bar"
          @keyup.enter="search"
        />
      </form>
    </div>
    <div v-if="result" class="search-result">
      <div
        v-for="item in result"
        :key="item.id"
        class="item"
        @click="selectItem(item.id)"
      >
        <div class="title">{{ item.name }}</div>
        <div class="subtitle">
          {{ item.artists.map((i) => i.name).join("/") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getApiData from '@/api/index.js'
import { mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      result: null,
      keywords: null
    }
  },
  methods: {
    ...mapMutations(['insertPlaylist']),
    search() {
      getApiData(`/search?keywords=${this.keywords}`)
        .then(response => {
          this.result = response.result.songs
        })
    },
    selectItem(songID) {
      console.log(songID)
      getApiData(`/song/detail?ids=${songID}`).then(
        response => {
          this.insertPlaylist(response.songs[0])
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
#search {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  .search-input {
    // position: fixed;
    // left: $padding-horizontal;
    // right: $padding-horizontal;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid white;
    height: 30px;
    color: white;
    border-radius: 5px;
    padding: 0 10px;
    form {
      height: 100%;
      width: 100%;
      input {
        background-color: rgba(0, 0, 0, 0);
        height: 100%;
        width: 100%;
        color: white;
      }
    }
  }
}
.search-result {
  margin-top: 30px;
  height: calc(100% - 80px);
  overflow: auto;
  .item {
    display: flex;
    height: $line-height;
    align-items: center;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    .title {
      flex: auto;
    }
    .subtitle {
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: none;
    }
  }
}
</style>
