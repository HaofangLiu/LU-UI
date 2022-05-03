<template>
  <component :is="start" class="markdown-body" />
</template>

<script lang="ts">
import { defineComponent, shallowRef } from "vue";
export default defineComponent({
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // give a default value is to avoid the warning
    const start = shallowRef("null");
    import(/* @vite-ignore */ props.path).then((val) => {
      start.value = val.default;
    });

    return {
      start,
    };
  },
});
</script>

<style></style>
