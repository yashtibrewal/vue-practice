new Vue({
  el: "#exercise",
  data: {
    value: 0,
    user_input: 0,
    timeout: 5000,
  },
  methods: {
    getUserValue: function (event) {
      this.timeout = event.target.value;
    },
  },
  computed: {
    result: function () {
      if (this.value === 37) {
        return "done";
      } else {
        return "not there yet";
      }
    },
  },
  watch: {
    result: function (value) {
      var that = this;
      setTimeout(function () {
        that.value = 0;
      }, that.timeout);
    },
  },
});
