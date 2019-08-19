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
    }
  },
  actions: {
    /**********************************************************************/
    // 用户登录
    async put_login_data({ commit, state }, {name, pwd}) {
      let url = '/authApi/auth/login'
      let params = {user: name, password: pwd}
      let result
      await request('PUT', url, params)
        .then(res => {
          commit('setSession', res.data.session)
          result = res
        })
      return result
    }
    /**********************************************************************/
  }
}
