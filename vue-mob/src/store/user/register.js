import cache from '@/utils/cache'
import { request } from '@/utils/request'
export default {
  namespaced: true,
  state: {

  },
  getters: {
  },
  mutations: {
    setSession(state, val) {
      cache.setLocal('session', val)
    },
    setUserID(state, val) {
      cache.setLocal('userID', val)
    }
  },
  actions: {
    /**********************************************************************/
    // 添加用户
    async post_register_data({ commit, state }, {name, pwd, nick}) {
      let url = '/authApi/auth/users'
      let params = {name: name, pwd: pwd, nick: nick}
      await request('POST', url, params)
        .then(res => {
          commit('setSession', res.data.session)
          commit('setUserID', res.data.id)
        })
    }
    /**********************************************************************/
  }
}
