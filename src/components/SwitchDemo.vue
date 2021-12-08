<template>
  <p>Switch组件</p>
  <Switch v-model:value="checkedBool" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const checkedBool = ref(true);
    return {
      checkedBool,
    };
  },
};
</script>

<style></style>
