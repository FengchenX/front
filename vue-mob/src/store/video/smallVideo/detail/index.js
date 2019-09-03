// import cache from '@/utils/cache'
// import { request } from '@/utils/request'
export default {
  namespaced: true,
  state: {
    location: 0            // 储存页面滚动条位置
  },
  getters: {},
  mutations: {
    set_location(state, val) {
      state.location = val
    }
  },
  actions: {}
}
