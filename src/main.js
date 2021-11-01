import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerListeners from './bridge/listeners'
import { EventBus } from '@/eventbus'

Vue.config.productionTip = false
const bus = EventBus
Vue.prototype.$bus = bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

registerListeners(bus)
store.dispatch('readAllTasks')
