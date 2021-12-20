<template>
  <div class="tabs-lu">
    <component :is="defalut[0]" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defalut = context.slots.default();
    defalut.forEach((element) => {
      if (element.type !== Tab) {
        throw Error("only accept Tab");
      }
    });
    return {
      defalut,
    };
  },
};
</script>

<style lang="scss"></style>
