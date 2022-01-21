<template>
  <div>
    <p>主题</p>
    <Button>default</Button>
    <Button theme="danger" @click="onClick">danger</Button>
    <Button theme="success">success</Button>
    <Button theme="text">text</Button>
  </div>

  <div>
    <p>大小</p>
    <Button>default</Button>
    <Button size="large">large</Button>
    <Button size="medium">medium</Button>
    <Button size="small">small</Button>
  </div>

  <div>
    <p>禁用</p>
    <Button>default</Button>
    <Button disabled>default</Button>
    <Button theme="text" disabled>default</Button>
  </div>

  <div>
    <p>加载中</p>
    <Button>default</Button>
    <Button loading>default loading</Button>
    <Button :loading="loadingBool" @click="toogleLoading">click me</Button>
    <Button theme="text" loading>text</Button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch, computed, onMounted } from "vue";
import Button from "../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {
    const loadingBool = ref(false);

    const toogleLoading = () => {
      loadingBool.value = !loadingBool.value;
    };

    const onClick = () => {
      console.log("hi");
    };

    return {
      onClick,
      loadingBool,
      toogleLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
div + div {
  margin: 10px 0;
}
</style>
