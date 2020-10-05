export const fruitMixin = {
  computed: {
    revFruit: function () {
      return this.fruit.split("").reverse().join("");
    },
    appendCountFruit() {
      return this.fruit + " (" + this.fruit.length + ")";
    },
  },
};