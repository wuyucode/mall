import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/index.js'
import ElementUI from 'element-ui'
import router from './router/index.js'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart',VueApexCharts)
Vue.use(ElementUI)
Vue.use(Vuex)
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
