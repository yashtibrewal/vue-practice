<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 offset-md-3 justify-content-center">
      <div><strong>Quote</strong></div>
      <textarea rows="5" v-model="input_quote" id="quote" />

      <div class="center">
        <button @click="addQuote" class="btn btn-primary">Add Quote</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote_list", "max"],
  data: function () {
    return {
      input_quote: "",
    };
  },
  methods: {
    addQuote(event) {
      if (this.quote_list.length >= this.max) {
        alert("Cannot add more elements, Please delete before continuing");
      } else if (this.input_quote !== "") {
        let id;
        if (this.quote_list.length !== 0) {
          id = this.quote_list[this.quote_list.length - 1].id + 1;
        } else {
          id = 1;
        }
        this.quote_list.push({ id: id, text: this.input_quote });
        this.input_quote = "";
      }
    },
  },
};
</script>


<style scoped>
textarea {
  width: 100%;
}
</style>
