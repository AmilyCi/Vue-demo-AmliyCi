import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
Vue.config.productionTip = false;

Vue.config.keyCodes.f2 = 113;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
