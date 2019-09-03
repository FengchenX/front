import Vue from 'vue'
import axios from 'axios'
import cache from '@/utils/cache'
// import qs from 'qs'

Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://data.toutiaojk.com/extend/list/'
/**************************************************************/
// axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers = {
  // 'session': '88b86c53-ba9d-4867-bee7-f2bced256e2d'
}
/**************************************************************/

export var request = async (type = 'POST', url = '', data = {}, headers = {}) => {
  let result
  type = type.toUpperCase()
  // 设置头部
  let local = cache.getLocal('session')
  if (local) {
    // 存在session
    headers.session = local
  }
  if (JSON.stringify(headers) !== '{}') {
    axios.defaults.headers = headers
  }
  // url = ajaxURL[url]
  if (type === 'GET') {
    console.log('request**********************GET', url, data)
    await axios.get(url, {params: data})
      .then(res => {
        result = res.data
      })
  } else if (type === 'POST') {
    console.log('request**********************POST', url, data)
    // await axios.post(url, qs.stringify(data))
    await axios.post(url, data)
      .then(res => {
        result = res.data
      })
  } else if (type === 'PUT') {
    console.log('request**********************PUT', url, data)
    await axios.put(url, data).then(
      res => {
        result = res.data
      }
    )
  } else if (type === 'DELETE') {
    console.log('request**************************DELETE', url, data)
    await axios.delete(url, {params: data})
  }
  return result
}
