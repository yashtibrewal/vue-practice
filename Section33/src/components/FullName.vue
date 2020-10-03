<template>
  <div class="form-group">
    <label for="first_name">First Name</label>
    <input
      id="first_name"
      :value="first_name"
      @input="updateName(true,$event)"
      type="text"
      class="form-control"
    />
    <label for="first_name">Last Name</label>
    <input
      id="last_name"
      :value="last_name"
      @input="updateName(false,$event)"
      type="text"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
  computed:{
      first_name(){
          return this.value.split(' ')[0];
      },
      last_name(){
          return this.value.split(' ')[1];
      }
  },
  methods: {
      updateName(isFirst,event){
          if(isFirst){
              this.value = event.target.value +" "+ this.last_name;
          }else{
              this.value = this.first_name+" "+event.target.value;
          }
          this.value = this.first_name +" "+ this.last_name;
          this.$emit("input",this.value);
      }
  }
};
</script>