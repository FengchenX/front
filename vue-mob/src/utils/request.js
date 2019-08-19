import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'

Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://data.toutiaojk.com/extend/list/'
/**************************************************************/
// axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers = {
  // 'session': '88b86c53-ba9d-4867-bee7-f2bced256e2d'
}
/**************************************************************/

// const ajaxURL = {
//     // 主页
//     classID: 'appclassid.php',          // 栏目
//     Class: 'appclass.php',              // 栏目列表
//     /*******************************/
//     Goods: '/goodApi/goods', // 商品
//     /*******************************/
//     Stick: 'appistop.php',              // 栏目置顶
//     // 详情页
//     Artilce: 'apparticle.php',          // 文章
//     Recommend: 'apptuijian.php',        // 文章推荐
//     // 搜索页
//     Search: 'search.php'                // 搜索
// }

export var request = async(type = 'POST', url = '', data = {}) => {
    let result
    type = type.toUpperCase()
    // url = ajaxURL[url]
    if (type === 'GET') {
        console.log('request**********************GET', url, data)
        await axios.get(url, { params: data })
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
      await axios.delete(url, { params: data })
    }
    return result
}
