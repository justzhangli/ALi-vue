// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Jsonp from 'vue-jsonp'
import VueCookies from 'vue-cookies'
// import {Search} from 'mint-ui'
// import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Jsonp)
Vue.use(VueCookies)
//Vue.use(Search)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//告知vue使用了仓库
  VueCookies,
  components: { App },
  template: '<App/>'
})
