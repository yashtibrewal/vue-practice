<template>
  <div class="row">
    <div class="col-12">
      <div class="heading"><strong>Quotes Added</strong></div>
      <div class="base-completed">
        <div :style="completed" class="completed center">
          <div>{{ this.present }}/{{ this.max }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["present", "max"],
  computed: {
    completed: function () {
      return "width:" + (this.present / this.max) * 100 + "%;";
    },
  },
};
</script>

<style scoped>
.heading{
    margin: 10px;
    font-size:20px;
    
}
.base-completed {
  height: 40px;
  background-color: lightgray;
  width: 100%;
  border: 1px solid black;
  margin: 10px;
}

.completed {
  height: 100%;
  width: 70%;
  transition-duration: 500ms;
  background-color: #007bff;
  color: white;
}
</style>