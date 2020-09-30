import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus.vue';

Vue.component('my-server-status',ServerStatus);

new Vue({
  el: '#app',
  render: h => h(App)
})
