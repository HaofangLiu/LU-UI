<template>
  <DemoComponentVue :comp="DialogDemo1Vue" title="Dialog" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DialogDemo1Vue from "./DialogDemo1.vue";
import DemoComponentVue from "../DemoComponent.vue";

export default defineComponent({
  components: { DemoComponentVue },
  setup() {
    return {
      DialogDemo1Vue,
    };
  },
});
</script>

<style></style>
