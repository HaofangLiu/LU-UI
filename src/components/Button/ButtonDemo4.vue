<template>
  <Button loading>default loading</Button>
  <Button :loading="loadingBool" @click="toogleLoading">click me</Button>
  <Button theme="text" loading>text</Button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {
    const loadingBool = ref(false);
    const toogleLoading = () => {
      loadingBool.value = !loadingBool.value;
    };
    return {
      loadingBool,
      toogleLoading,
    };
  },
});
</script>
