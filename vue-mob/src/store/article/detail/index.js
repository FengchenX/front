// import cache from '@/utils/cache'
import { request } from '@/utils/request'
export default {
  namespaced: true,
  state: {

  },
  getters: {
  },
  mutations: {
  },
  actions: {
    /**********************************************************************/
    // 获取文章数据详情
    async get_article_data({ commit, state }, { id }) {
      let res
      let url = `/artApi/articles/${id}`
      await request('GET', url)
        .then(json => {
          res = json.data
        })
      return res
    }
    /**********************************************************************/
  }
}
