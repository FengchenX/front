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
import Player from "../components/common/Player";
import Login from "../components/user/Login";
import test from "../components/test";

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
        component: Player
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
      {
        path: '/login',
        component: Login
      },
      {
        path: '/test',
        component: test
      },
      {
        path: '*',
        component: home
      }
    ]
})

export default router;
