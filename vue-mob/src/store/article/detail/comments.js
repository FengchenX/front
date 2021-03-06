import cache from '@/utils/cache'
import {request} from '@/utils/request'
import router from '@/router/index'

export default {
  namespaced: true,
  state: {
    toComment: {
      id: '',
      user: '',
      content: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {
    /**********************************************************************/
    // 添加评论数据数据
    async post_comments_data({commit, state}, {id, user, content}) {
      // state.toComment = {id, user, content}
      let url = `/commentApi/comments`
      let params = {user: cache.getLocal('userID'), content, to_user: user, type: 'article', target: id}
      await request('POST', url, params)
        .then(json => {
          if (json.code !== 0) {
            // 跳到登录界面
            router.push({path: '/login', query: {redirect: router.history.current.fullPath}})
            return
          }
          console.log(json.code, json.msg, json.data)
        })
    },
    // 获取评论数据
    async get_comments_data({commit, state}, {id}) {
      let res
      let url = `/commentApi/comments?type=article&target=${id}`
      await request('GET', url)
        .then(json => {
          res = json.data
        })
      return res
    }
    /**********************************************************************/
  }
}
