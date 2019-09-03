import {request} from '@/utils/request'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // 获取搜索数据
    async get_search_data({commit, state}, {key, page}) {
      let res
      let url = `/searchApi`
      let params = page
      params.key = key
      await request('GET', url, params)
        .then(json => {
          res = json.data
        })
      return res
    }
  }
}
