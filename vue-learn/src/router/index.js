import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from 'components/home'
import about from 'components/about'
import movie from 'components/movie'
import operation from 'components/operation/operation'
import VideoUp from  'components/operation/VideoUp'
import OperateContent from  'components/operation/OperateContent'
import Movie from 'components/operation/Movie'
import player from "../components/common/player";

let router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/home',
        component: home
      },
      {
        path: '/about',
        component: about
      },
      {
        path: '/movie',
        component: movie
      },
      {
        path: '/player',
        component: player
      },
      {
        path: '/operation',
        component: operation,
        children:[{
          path: '',
          component: OperateContent
        },{
          path: 'upload-video',
          component: VideoUp
        },{
          path: 'movies',
          component: Movie
        }]
      },
      // {
      //   path: '/upload-video',
      //   component: VideoUp
      // },
      {
        path: '*',
        component: home
      }
    ]
})

export default router;
