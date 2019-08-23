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
        console.log('1111111111111111111111111113')
        router.push('/login')
        return
      }
      let url = `/authApi/auth/users/${id}`
      let result
      await request('GET', url).then(
        res => {
          if (res.code !== 0) {
            console.log('2222222222222222222222222222222')
            router.push('/login')
            return
          }
          result = res
          info = res.data
        }
      )
      return result
    }
    /**********************************************************************/
  }
}
