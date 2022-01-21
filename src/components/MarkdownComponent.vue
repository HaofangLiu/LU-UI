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
    const start = shallowRef("");
    import(/* @vite-ignore */props.path).then((val) => {
      start.value = val.default;
    });

    return {
      start,
    };
  },
});
</script>

<style></style>
