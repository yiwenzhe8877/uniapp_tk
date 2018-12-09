import Vue from 'vue'
import App from './App'
import Api from './utils/api.js'
Vue.config.productionTip = false
Vue.prototype.$api=Api


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
