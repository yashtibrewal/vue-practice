<template>
  <div class="col-xs-12 col-sm-6">
    <p>{{ server }}</p>
    <button @click="changeServerStatus" type="button">OK</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      server: {},
    };
  },
  methods: {
      changeServerStatus(){
          this.server.status = 'OK';
      }
  },
  created() {
      eventBus.$on('serverClicked',(server)=>{
          this.server = server;
      })
  },
};
</script>

<style>
</style>
