<template>
  <component :is="content" class="markdown-body" />
</template>

<script lang="ts">
import { defineComponent, shallowRef } from "vue";
export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>
