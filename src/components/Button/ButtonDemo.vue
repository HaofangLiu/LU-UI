<template>
  <DemoComponentVue :comp="ButtonDemo1Vue" title="Button with Theme" />
  <DemoComponentVue :comp="ButtonDemo2Vue" title="Button witth Size" />
  <DemoComponentVue :comp="ButtonDemo3Vue" title="Button witth Disabled" />
  <DemoComponentVue :comp="ButtonDemo4Vue" title="Button witth Loading" />

</template>

<script lang="ts">
import { ref, defineComponent, watch, computed, onMounted } from "vue";
import DemoComponentVue from "../DemoComponent.vue";
import ButtonDemo1Vue from "./ButtonDemo1.vue";
import ButtonDemo2Vue from "./ButtonDemo2.vue";
import ButtonDemo3Vue from "./ButtonDemo3.vue";
import ButtonDemo4Vue from "./ButtonDemo4.vue";

export default defineComponent({
  components: {
    DemoComponentVue,
  },
  setup() {
    return {
      ButtonDemo1Vue,
      ButtonDemo2Vue,
      ButtonDemo3Vue,
      ButtonDemo4Vue
    };
  },
});
</script>

<style lang="scss" scoped>
div + div {
  margin: 10px 0;
}
</style>
