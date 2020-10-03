<template>
  <div class="row">
    <div class="info col-8 offset-2 center">
      INFO: Click on the quote to delete it.
    </div>
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
      v-for="quote in quote_list"
      :key="quote.id"
    >
      <div
        @mouseenter="mouseEntered"
        @mouseleave="mouseLeft"
        @click="deleteQuote(quote.id)"
        class="card"
      >
        {{ quote.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote_list"],
  data: function () {
    return {};
  },
  methods: {
    mouseEntered: function (event) {
      event.target.classList.add("deleteCard");
    },
    mouseLeft: function (event) {
      event.target.classList.remove("deleteCard");
    },
    deleteQuote(quote_id) {
      console.log(quote_id);
      for (let i = 0; i < this.quote_list.length; i++) {
        if (this.quote_list[i].id == quote_id) {
          this.quote_list.splice(i, 1);
          break;
        }
      }
    },
  },
};
</script>


<style scoped>
.info {
  background-color: lightblue;
  font-weight: 500;
  color: black;
  padding: 5px;
}
.card {
  text-align: center;
  border: 1px solid gray;
  font-family: "Courgette", cursive;
  font-size: 30px;
  margin: 10px;
  padding: 10px;
}
.deleteCard {
  background-color: #ffe6e6;
}
</style>