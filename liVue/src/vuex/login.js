import vue from 'vue'
import vuex from 'vuex'

var state ={
	isLogin:0
}

const mutations = {
	changeLogin(state,data){
		state.isLogin = data
	}
}

export default{
	state,
	mutations
}
