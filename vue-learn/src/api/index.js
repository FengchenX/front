import * as url from './urlConfig'
import axios from 'axios'


/**************************************************************/
export const topApi = {
	list() {
		return axios.get(url.top+'/frees').then((response) => {
			return response.data
		})
	}
}

export const movieApi = {
  addMovie(param) {
    return axios.post(url.movie, param).then((response) => {
      return response.data
    })
  },
  getMovies(params) {
    return axios.get(url.movie, {params}).then((res)=>{
      return res.data
    })
  },
  addMV(mv){
    return axios.post(`${url.movie}/${mv.movie_id}/videos`, mv).then((res)=>{
      return res.data
    })
  },
  getMVs(args){
    let {movie_id, params} = args
    return axios.get(`${url.movie}/${movie_id}/videos`, {params}).then((res)=>{
      return res.data
    })
  }
}
export const videoApi = {
  list(params) {
    return axios.get(url.video, {params}).then((response) => {
      return response.data
    })
  },
  getVideo(id){
    return axios.get(`${url.video}/${id}`).then((response) => {
      return response.data
    })
  }
}

/**************************************************************/

//获取轮播图
export const bannerApi = {
	list() {
		return axios.get(url.banner).then((response) => {
			return response.data
		})
	}
}

// 排行榜
export const rankApi = {
	ranking3() {
		return axios.get(url.ranking3).then((response) => {
			return response.data
		})
	}
}

// 推广
export const promoteApi = {
	promote() {
		return axios.get(url.promote).then((response) => {
			return response.data
		})
	}
}

// 直播
export const liveApi = {
	live() {
		return axios.get(url.live).then((response) => {
			return response.data
		})
	}
}

// 具体内容
export const contentApi = {
	content() {
		return axios.get(url.contet).then((response) => {
			return response.data
		})
	}
}

// 具体内容的三日排行榜信息
export const contentrankApi = {
	contentrank(param) {
		return axios.post(url.contentrank, param).then((response) => {
			return response.data
		})
	},
	contentrankweek(param) {
		return axios.post(url.contentrankweek, param).then((response) => {
			return response.data
		})
	}
}

