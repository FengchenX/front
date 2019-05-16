import { movieApi } from 'api'
import * as TYPE from '../actionType/movieType'

const state = {
	movieList: {
	  total: 0,
    movies: []
  },
  movie: {},
  msg: '',
  mv:{},
  mvList:{
	  total: 0,
    movie_videos: []
  }
}

const getters = {
	movieList: state => state.movieList,
  movie: state => state.movie,
  msg: state => state.msg,
  mvList: state=>state.mvList
}

const actions = {
  addMovie({commit, state, rootState}, movie) {
	  rootState.requesting = true;
	  commit(TYPE.MOVIE_POST_REQUEST);
    movieApi.addMovie(movie).then((res)=>{
      rootState.requesting = false;
      commit(TYPE.MOVIE_POST_SUCCESS, res);
    }, (error)=>{
      rootState.requesting = false;
      commit(TYPE.MOVIE_POST_FAILURE);
    })
  },
  getMovies({commit, state, rootState}, params) {
    rootState.requesting = true;
    commit(TYPE.MOVIE_LIST_REQUEST);
    movieApi.getMovies(params).then((res) => {
      rootState.requesting = false
      commit(TYPE.MOVIE_LIST_SUCCESS, res)
    }, (error) => {
      rootState.requesting = false
      commit(TYPE.MOVIE_LIST_FAILURE)
    });
  },
  addMV({commit, state, rootState}, mv) {
    rootState.requesting = true;
    commit(TYPE.MV_POST_REQUEST);
    movieApi.addMV(mv).then((res)=>{
      rootState.requesting = false;
      commit(TYPE.MV_POST_SUCCESS, res);
    }, (error)=>{
      rootState.requesting = false;
      commit(TYPE.MV_POST_FAILURE);
    })
  },
  async getMVs({commit, state, rootState}, args) {
    rootState.requesting = true;
    commit(TYPE.MV_LIST_REQUEST);
    await movieApi.getMVs(args).then((res) => {
      rootState.requesting = false
      commit(TYPE.MV_LIST_SUCCESS, res)
    }, (error) => {
      rootState.requesting = false
      commit(TYPE.MV_LIST_FAILURE)
    });
  },
}

const mutations = {
	[TYPE.MOVIE_LIST_REQUEST] (state) {

	},
	[TYPE.MOVIE_LIST_SUCCESS] (state, res) {
		state.movieList = res.data;
	},
	[TYPE.MOVIE_LIST_FAILURE] (state) {

	},
  [TYPE.MOVIE_POST_REQUEST] (state) {

  },
  [TYPE.MOVIE_POST_SUCCESS] (state, res) {
	  state.movie = res.data;
    state.msg = res.msg;
  },
  [TYPE.MOVIE_POST_FAILURE] (state) {

  },

  [TYPE.MV_POST_REQUEST] (state) {

  },
  [TYPE.MV_POST_SUCCESS] (state, res) {
    state.mv = res.data;
    state.msg = res.msg;
  },
  [TYPE.MV_POST_FAILURE] (state) {

  },

  [TYPE.MV_LIST_REQUEST] (state) {

  },
  [TYPE.MV_LIST_SUCCESS] (state, res) {
	  console.log('get mv list', res.data)
    state.mvList = res.data;
  },
  [TYPE.MV_LIST_FAILURE] (state) {

  },
}

export default {
	state,
	getters,
	actions,
	mutations
}
