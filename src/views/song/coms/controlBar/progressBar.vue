<template>
  <div class="progress">
    <!-- <div class="progress-bar" @click="dotMove" @mousemove="dotDrag"> -->
    <div class="progress-bar" @mousemove="dotDrag" @click="barClick">
      <div class="unfilled" ref="unfilledBar"></div>
      <div class="filled" :style="{ width: `${(percent * 100).toFixed(2)}%` }">
        <div class="dot" @mousedown="dotDown" @mouseup="dotUp"></div>
      </div>
    </div>
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
      dot: { moveable: false, width: 0 },
      rect: null
    }
  },
  watch: {
    percent: function(newPercent) {
      if (newPercent >= 0 && !this.moveable) {
        this.dot.width = newPercent
      }
    }
  },
  methods: {
    dotMove: function (e) {
      const offsetWidth = Math.min(
        this.rect.width,
        Math.max(0, e.clientX - this.rect.left)
      )
      this.dot.width = offsetWidth
    },
    dotDown: function (e) {
      this.dot.moveable = true
      this.rect = this.$refs.unfilledBar.getBoundingClientRect()
    },
    dotUp: function (e) {
      this.dot.moveable = false
      this.dot.startX = e.clientX
    },
    dotDrag: function (e) {
      if (!this.dot.moveable) {
        return false
      }
      this.dotMove(e)
    },
    barClick: function (e) {
      this.rect = this.$refs.unfilledBar.getBoundingClientRect()
      const offsetWidth = Math.min(
        this.rect.width,
        Math.max(0, e.clientX - this.rect.left)
      )
      this.dot.width = offsetWidth
    },
    bindEvents: function () {
      document.addEventListener('mousemove', this.dotDrag)
      document.addEventListener('mouseup', this.dotUp)
    },
    unbindEvents: function () {
      document.addEventListener('mousemove', this.dotDrag)
      document.addEventListener('mouseup', this.dotUp)
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.bindEvents()
    })
  },
  beforeDestroy() {
    this.unbindEvents()
  }
}
</script>
<style lang="scss">
.progress {
  margin: 20px;
}
.progress-bar {
  height: 50px;
  width: 100%;
  position: relative;
}
.filled {
  background-color: red;
  height: 20px;
  position: absolute;
  left: 0;
}
.unfilled {
  background-color: blue;
  height: 20px;
  width: 100%;
  position: absolute;
  left: 0;
}
.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  right: -10px;
}
</style>
