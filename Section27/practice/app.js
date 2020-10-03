new Vue({
    el:"#vue",
    data: {
        buttonText:"update"
    },
    methods:{
        updateText: function(){
            this.buttonText = "updated"
        },
        destroyIns:function(){
            this.$destroy();
        }
    },
    beforeCreate: function(){
        console.log("beforeCreate() called")
    },
    created: function(){
        console.log("created() called")
    },
    beforeMount: function(){
        console.log("beforeMount() called")
    },
    mounted: function(){
        console.log("mounted() called")
    },
    beforeUpdate: function(){
        console.log("beforeUpdate() called")
    },
    updated: function(){
        console.log("updated() called")
    },
    beforeDestroy: function(){
        console.log("beforeDestroy() called")
    },
    destroyed: function(){
        console.log("destroyed() called")
    }
})