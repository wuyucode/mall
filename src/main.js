import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/index.js'
import ElementUI from 'element-ui'
import router from './router/index.js'
import VueApexCharts from 'vue-apexcharts'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import mock from '../mock/index'
Vue.use(mock)
Vue.use(VueApexCharts)
Vue.use(VueAxios,axios)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.component('apexchart',VueApexCharts)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    store,
    render: h => h(App)
})
