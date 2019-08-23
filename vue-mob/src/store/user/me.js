import cache from '@/utils/cache'
import { request } from '@/utils/request'
import router from '@/router/index'
export default {
  namespaced: true,
  state: {
    info: {}
  },
  getters: {
    info: state => {
      return state.info
    }
  },
  mutations: {
  },
  actions: {
    /**********************************************************************/
    // 查询用户信息
    async get_user_info({ state }) {
      let id = cache.getLocal('userID')
      if (!id) {
        router.push('/login')
        return
      }
      let url = `/authApi/auth/users/${id}`
      let result
      await request('GET', url).then(
        res => {
          if (res.code !== 0) {
            router.push('/login')
            return
          }
          result = res
          state.info = res.data
        }
      )
      return result
    }
    /**********************************************************************/
  }
}
