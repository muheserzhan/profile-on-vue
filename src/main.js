import Vue from 'vue'
import VueSession from 'vue-session'
import App from './App.vue'

Vue.use(VueSession)

new Vue({
  el: '#profile',
  render: h => h(App)
})
