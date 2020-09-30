new Vue({
  el: "#exercise",
  data: {
    attachHighlight: true,
    user_class: "green",
    condition: true,
    user_style: "",
    progress_width:"width: 0px; ",
    progress_style: this.progress_width+ this.bar,
    bar:"height:10px; background-color:green",
    completion:0,
  },
  computed: {
    effectClass: function () {
      return {
        highlight: this.attachHighlight,
        shrink: !this.attachHighlight,
      };
    },
    arraySyntaxClass: function () {
      return { box: true, red: true };
    },
    hasBorder: function () {
      return { border: this.condition };
    },
  },
  methods: {
    startProgress:function(event){
      console.log('starting progress')
      var progressInterval = setInterval(()=>{
        if(this.completion<100){
          this.completion+=10;
          this.progress_width = "width:"+(this.completion*2)+'px;'
          this.progress_style = this.progress_width + this.bar;
        }else{
          clearInterval(progressInterval);
        }
      },250)
    },
    updateStyle: function (event) {
      this.user_style = event.target.value;
    },
    updateUserClass: function (event) {
      this.user_class = event.target.value;
    },
    updateUserCondition: function (event) {
      this.condition = event.target.value === "true" ? true : false;
    },
    startEffect: function () {
      setInterval(() => {
        this.attachHighlight = !this.attachHighlight;
      }, 1000);
    },
  },
});
