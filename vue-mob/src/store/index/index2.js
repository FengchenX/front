// import cache from '@/utils/cache'
import {request} from '@/utils/request'

export default {
  namespaced: true,
  state: {
    /*************************************************/
    page: 1,       // 各个栏目page的对象
    location: 0,   // 各个栏目location的对象
    /*************************************************/
    currentContent: ''                     // 当前栏目的缓存数据，为了刷新时不用再次请求
  },
  getters: {
    meta: state => {
      // 当前栏目的page、location
      let page = state.page
      let location = state.location
      let content = state.currentContent
      return {page, location, content}
    }
  },
  mutations: {
    setLocation(state, obj) {
      state.location = obj
    }
  },
  actions: {
    // 获取文章列表数据
    async get_listItem_data({getters}, params) {
      /*****************************************************/
      let res = await request('GET', '/topApi/tops', params)
      /*****************************************************/
      return res
    }
  }
}
