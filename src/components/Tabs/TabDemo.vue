<template>
  <DemoComponentVue :comp="TabDemo1Vue" title="tabs demo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabDemo1Vue from "./TabDemo1.vue";
import DemoComponentVue from "../DemoComponent.vue";

export default defineComponent({
  components: { DemoComponentVue },
  setup() {
    return {
      TabDemo1Vue,
    };
  },
});
</script>

<style></style>
