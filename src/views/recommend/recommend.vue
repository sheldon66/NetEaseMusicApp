<template>
  <div class="recommend" :class="{ loading: loading }">
    <template v-if="!loading">
      <div class="list">
        <div class="toplist">
          <span>云音乐特色榜</span>
          <div class="content">
            <div class="cover" v-for="(item, index) in toplist" :key="index">
              <router-link :to="`/playlist/${item.id}`">
                <img :src="`${item.coverImgUrl}?param=150y150`" />
              </router-link>
            </div>
          </div>
        </div>
        <div class="personalized-list">
          <div>热门歌单</div>
          <div class="content">
            <div
              class="cover"
              v-for="(item, index) in personalizedList"
              :key="index"
            >
              <router-link :to="`/playlist/${item.id}`">
                <img :src="`${item.picUrl}?param=150y150`" />
                <div>{{ item.name }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import getApiData from '@/api/index.js'
import { loadMixin } from '@/utils/mixin.js'
export default {
  created() {
    getApiData('/toplist').then(response => {
      this.toplist = response.list.slice(0, 4)
    })
    getApiData('/personalized').then(response => {
      this.personalizedList = response.result
      this._hideLoad()
    })
  },
  mixins: [loadMixin],
  data() {
    return {
      toplist: null,
      personalizedList: null
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
}
.cover {
  width: 25%;
  padding: 0 0 5vw 5vw;
  img {
    width: 100%;
  }
  div {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
.list {
  width: 100%;
}
.loading {
  background: url("~@/assets/reload-1s-100px.svg") no-repeat center top 100px;
}
</style>
