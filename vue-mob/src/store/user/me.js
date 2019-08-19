import cache from '@/utils/cache'
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
    // 查询用户信息
    async get_user_info({ state }) {
      let id = cache.getLocal('userID')
      let url = `/authApi/auth/users/${id}`
      let result
      await request('GET', url).then(
        res => {
          result = res
        }
      )
      return result
    }
    /**********************************************************************/
  }
}
