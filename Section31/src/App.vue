<template>
  <div>
    <button class="btn" @click="updateComponentName('appBlue', 'blue')">Blue</button>
    <button class="btn" @click="updateComponentName('appGreen', 'green')">Green</button>
    <button class="btn" @click="updateComponentName('appPurple', 'purple')">Purple</button>
    <hr />
    <keep-alive>
      <component :is="component_name">
        <div :style="color" class="box">
          {{ name }}
        </div>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Blue from "./components/Blue";
import Green from "./components/Green";
import Purple from "./components/Purple";

export default {
  data() {
    return {
      component_name: "",
      name:"",
      color: "",
    };
  },
  methods: {
    updateComponentName(name, color) {
      this.component_name = name;
      this.name = color;
      this.color = "background-color:" + color;
    },
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appPurple: Purple,
  },
};
</script>

<style scoped>
.box {
  background-color: lightyellow;
  border: 1px solid #ccc;
  width: 500px;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  padding:10px
}
</style>