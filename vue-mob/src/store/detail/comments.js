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
    // 获取评论数据数据
    async post_comments_data({ commit, state }, {id, user, content}) {
      let url = `/goodApi/goods/${id}/comments`
      let params = {user: '游客', content}
      await request('POST', url, params)
        .then(json => {
          console.log(json.code, json.msg, json.data)
        })
    }
    /**********************************************************************/
  }
}
