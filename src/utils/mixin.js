export const loadMixin = {
  data() {
    return {
      loading: true // loading状态
    }
  },
  methods: {
    _hideLoad() {
      this.loading = false
    }
  }
}
