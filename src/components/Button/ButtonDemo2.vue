<template>
  <Button size="large">large</Button>
  <Button size="medium">medium</Button>
  <Button size="small">small</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {},
});
</script>
