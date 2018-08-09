// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
        Vue.use(Vuex)
import "./assets/css/base.css"
import "./assets/css/index.css"

Vue.config.productionTip = false


let store= new Vuex.Store({
  state:{n:12233}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store:store
})
