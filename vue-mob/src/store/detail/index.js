import cache from '@/utils/cache'
import {request} from '@/utils/request'

export default {
  namespaced: true,
  state: {
    historyArticle: {},     // 文章历史数据
    location: {},            // 储存页面滚动条位置
    historyComments: {}
  },
  getters: {},
  mutations: {
    set_historyArticle(state, val) {
      state.historyArticle = val
      cache.setSession('history_Article', val)
    },
    /*****************************************************************/
    set_historyComments(state, val) {
      state.historyComments = val
      cache.setSession('history_comments', val)
    },
    /*****************************************************************/
    set_location(state, val) {
      state.location = val
    }
  },
  actions: {
    // 获取文章数据
    async get_Article_data({commit, state}, {id, datafrom}) {
      let res
      let historyArticle
      historyArticle = JSON.parse(cache.getSession('history_Article'))
      if (historyArticle && historyArticle[id]) {
        res = historyArticle[id]
      } else {
        let params = {
          'id': id,
          'datafrom': datafrom
        }
        await request('post', 'Artilce', params)
          .then(json => {
            res = json.data
            state.historyArticle[id] = res
            historyArticle = state.historyArticle
          })
      }
      commit('set_historyArticle', historyArticle)
      return res
    },
    /**********************************************************************/
    // 获取评论数据数据
    async get_comments_data({commit, state}, {id}) {
      // let res
      // let historyComments
      // historyComments = JSON.parse(cache.getSession('history_comments'))
      // if (historyComments && historyComments[id]) {
      //   res = historyComments[id]
      // } else {
      //   let url = `/goodApi/goods/${id}/comments`
      //   await request('GET', url)
      //     .then(json => {
      //       res = json.data
      //       state.historyComments[id] = res
      //       historyComments = state.historyComments
      //     })
      // }
      // commit('set_historyComments', historyComments)
      // return res
      // eslint-disable-next-line no-unused-vars
      let res
      let url = `/goodApi/goods/${id}/comments`
      await request('GET', url)
        .then(json => {
          res = json.data
        })
      return res
    }
    /**********************************************************************/
  }
}
