<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <div v-myon:click="customeDirective">Custome Directive</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    customeDirective() {
      console.log("customeDirective() called");
    },
  },
  directives: {
    'myon': {
      bind(el, binding, vnode) {
        console.log("Bind called");
        el.addEventListener(binding.arg,binding.value);
      },
    },
  },
};
</script>

<style scoped>
</style>
