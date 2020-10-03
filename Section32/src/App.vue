<template>
  <div id="app">
    <div class="container">
      <quote-bar :present="present" :max="max"></quote-bar>
      <hr />
      <quote-input :quote_list="quote_list" :max="max"></quote-input>
      <hr />
      <quote-grid :quote_list="quote_list"></quote-grid>
    </div>
  </div>
</template>

<script>
import QuotesGrid from "./components/QuotesGrid";
import QuoteInput from "./components/QuoteInput";
import QuoteBar from "./components/QuoteBar";

export default {
  data: function () {
    return {
      quote_list: [
        {
          id: 1,
          text: `“Be yourself; everyone else is already taken.” ― Oscar Wilde`,
        },
      ],
      max: 10,
    };
  },
  computed: {
    present: function () {
      return this.quote_list.length;
    },
  },
  components: {
    "quote-bar": QuoteBar,
    "quote-input": QuoteInput,
    "quote-grid": QuotesGrid,
  },
};
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
