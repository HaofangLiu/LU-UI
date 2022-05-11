<template>
  <Button disabled>default</Button>
  <Button theme="text" disabled>default</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {},
});
</script>
