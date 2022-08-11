import Vue from 'vue'
import App from './App.vue'

import 'locomotive-scroll/dist/locomotive-scroll.css';
import 'locomotive-scroll/dist/locomotive-scroll.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
