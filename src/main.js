// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import VeLine from 'v-charts/lib/line.common'
import PieLine from 'v-charts/lib/pie.common'
// Vue.config.productionTip = false
import './common/css/theme.styl'
Vue.use(ElementUI)
// Vue.use(VCharts)
Vue.component(VeLine.name,VeLine) //按需引入折线图
Vue.component(PieLine.name,PieLine)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
