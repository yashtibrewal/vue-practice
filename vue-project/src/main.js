import Vue from 'vue'
import App from './App.vue'

const eventBus = new Vue({
  methods:{
    callServerDetails(server){
      // console.log("callServerDetails() called with \n"+server);
      eventBus.$emit('serverClicked',server)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

export {
  eventBus,
}