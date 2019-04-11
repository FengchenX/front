import { testApi } from 'api'
import * as TYPE from '../actionType/testType'
// import _ from 'lodash'

const state = {
    test: ''
}

const getters = {
    test: state => state.test
}

const actions = {
	test({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.TEST_REQUEST)
		testApi.test().then((response) => {
			console.log("11111111")
			console.log(response)
			rootState.requesting = false
			commit(TYPE.TEST_SUCCESS, response)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.TEST_FAILURE)
		})
	}
}

const mutations = {
	[TYPE.TEST_REQUEST] (state) {

	},
	[TYPE.TEST_SUCCESS] (state, response) {
		console.log("22222222222222")
		console.log(response)
		// state.test = _.values(response.Data.test)
		state.test = response.Data.test
	},
	[TYPE.TEST_FAILURE] (state) {

	}
}

export default {
	state,
	getters,
	actions,
	mutations
}