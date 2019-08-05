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
    // 添加评论数据数据
    async post_comments_data({ commit, state }, {id, user, content}) {
      let url = `/videoApi/videos/${id}/comments`
      let params = {user: '游客', content}
      await request('POST', url, params)
        .then(json => {
          console.log(json.code, json.msg, json.data)
        })
    },
    // 获取评论数据
    async get_comments_data({ commit, state }, { id }) {
      let res
      let url = `/videoApi/videos/${id}/comments`
      await request('GET', url)
        .then(json => {
          res = json.data
        })
      return res
    }
    /**********************************************************************/
  }
}
