<template>
  <Button>default</Button>
  <Button theme="danger" @click="onClick">danger</Button>
  <Button theme="success">success</Button>
  <Button theme="text">text</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };

    return {
      onClick,
    };
  },
});
</script>
