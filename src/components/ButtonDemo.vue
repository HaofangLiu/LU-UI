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
    <Button loading>default</Button>
    <Button theme="text" disabled>default</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };

    const onFocus = () => {
      console.log("dfoai");
    };

    return {
      onClick,
      onFocus,
    };
  },
};
</script>

<style lang="scss" scoped>
div + div {
  margin: 10px 0;
}
</style>
