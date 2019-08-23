import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

Router.prototype.go = function() {
    this.isBack = true
    window.history.go(-1)
}

// 路由懒加载
const index = () => import('@/page/index/index')
const channel = () => import('@/page/index/children/channel')
// const detail = () => import('@/page/detail/detail')
/***********************************************************************/
const detail = () => import('@/page/detail/detail2')
const index2 = () => import('@/page/index/index2')
const video = () => import('@/page/video/video')
const smallVideo = () => import('@/page/video/children/smallVideo/smallVideo')
const smallVideoDetail = () => import('@/page/video/children/smallVideo/detail/detail')
const article = () => import('@/page/video/children/article/article')
const articleDetail = () => import('@/page/video/children/article/detail/detail')
const login = () => import('@/page/user/login')
const register = () => import('@/page/user/register')
const me = () => import('@/page/user/me')
const info = () => import('@/page/user/info')

const test = () => import('@/page/test/test')
/***********************************************************************/
const search = () => import('@/page/search/search')

export default new Router({
  routes: [
    {
      path: '',
      // redirect: '/index',
      /***********************************************/
      redirect: '/index2',
      /***********************************************/
      component: App,
      children: [
          /****************************************************/
        {
          path: '/index2',
          component: index2
        },
        {
          path: '/video',
          component: video
        },
        {
          path: '/small-video',
          component: smallVideo
        },
        {
          path: '/detail/small-video',
          component: smallVideoDetail
        },
        {
          path: '/article',
          component: article
        },
        {
          path: '/detail/article',
          component: articleDetail
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/register',
          component: register
        },
        {
          path: '/me',
          component: me
        },
        {
          path: '/me/infomation',
          component: info
        },
        {
          path: '/test',
          component: test
        },
          /****************************************************/
          // index页面
          {
              name: 'index',
              path: '/index',
              component: index,
              children: [
                  // channel页面
                  {
                      name: 'channel',
                      path: 'channel',
                      component: channel
                  }
              ]
          },
          // detail页面
          {
              name: 'detail',
              path: '/detail',
              component: detail
          },
          // search页面
          {
              name: 'search',
              path: '/search',
              component: search
          }
      ]
    }
  ]
})
