import Vue from 'vue'
import Vuex from 'vuex'
import Login from './login.js'
import SearchList from './SearchList.js'
import hot from './Hot.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		Login,
		SearchList,
		hot
	}
	
})

export default store