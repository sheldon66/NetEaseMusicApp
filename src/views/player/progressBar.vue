<template>
  <!-- <div class="progress-bar" @click="dotMove" @mousemove="dotDrag"> -->
  <div
    class="progress-bar"
    @mousemove="barMousemove"
    @mousedown="barMousedown"
    @mouseup="barMouseup"
  >
    <div class="total" ref="totalBar"></div>
    <div class="filled" :style="{ width: `${filledWidth}px` }">
      <!-- <div class="dot" @mousedown.stop="dotMousedown"></div> -->
    </div>
    <div
      class="dot"
      @mousedown.stop="dotMousedown"
      :style="{ left: `${filledWidth - 5}px` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    percent: {
      type: [Number],
      default: 0
    },
    percentCache: {
      type: [Number],
      default: 0
    }
  },
  data: function () {
    return {
      // dot: { moveable: false, width: 0 },
      filledWidth: 0, // 已播放进度条宽度px
      totalRect: null,
      dotMoveable: false
    }
  },
  watch: {
    percent: function(newPercent) {
      if (newPercent >= 0 && !this.dotMoveable) {
        this.filledWidth = parseInt(newPercent * this.totalRect.width)
      }
    }
  },
  methods: {
    barMousemove: function (e) {
      if (this.dotMoveable) {
        this.filledWidth = this.calOffsetWidth(e)
      }
    },
    barMouseup(e) {
      if (!this.dotMoveable) return
      this.changePercent(this.filledWidth / this.totalRect.width)
      this.dotMoveable = false
    },
    dotMousedown: function (e) {
      this.dotMoveable = true
      this.totalRect = this.$refs.totalBar.getBoundingClientRect()
    },
    barMousedown: function (e) {
      this.totalRect = this.$refs.totalBar.getBoundingClientRect()
      this.changePercent(this.calOffsetWidth(e) / this.totalRect.width)
    },
    calOffsetWidth(e) {
      return Math.min(this.totalRect.width, Math.max(0, e.clientX - this.totalRect.left))
    },
    changePercent(newPercent) {
      this.$emit('percentchange', newPercent.toFixed(2))
    },
    bindEvents: function () {
      document.addEventListener('mouseup', this.barMouseup)
    },
    unbindEvents: function () {
      document.removeEventListener('mouseup', this.barMouseup)
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.bindEvents()
      this.totalRect = this.$refs.totalBar.getBoundingClientRect()
    })
  },
  beforeDestroy() {
    this.unbindEvents()
  }
}
</script>
<style lang="scss" scoped>
$dot-raidus: 5px;
.progress-bar {
  height: 20px;
  width: 100%;
  position: relative;
  > div {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.filled {
  background-color: $highlight-color;
  height: 2px;
  position: absolute;
  left: 0;
}
.total {
  background-color: hsla(0, 0%, 100%, 0.3);
  height: 2px;
  width: 100%;
  position: absolute;
}

.dot {
  width: $dot-raidus * 2;
  height: $dot-raidus * 2;
  border-radius: 50%;
  background-color: #bfc1c1;
  position: absolute;
}
</style>
