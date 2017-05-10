import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config/routes'
import stores from './stores/'
import components from './components/' // 加载公共组件
import configs from 'configs'

Object.keys(components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`v${name}`, components[key])
})
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
  base: configs.base
})
router.beforeEach(({ meta, path }, from, next) => {
  next()
})
new Vue({ stores, router }).$mount('#app')
