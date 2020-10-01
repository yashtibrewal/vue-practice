<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        @click="serverClicked(server)"
        class="list-group-item"
        v-for="server in servers"
        :server="server"
        :key="server.id"
      >
        Server #{{ server.id }} - {{ server.status }}
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unkown" },
        { id: 4, status: "Normal" },
      ],
    };
  },
  methods: {
    serverClicked(server) {
        // console.log(server)
        eventBus.callServerDetails(server)
    },
  },
};
</script>
