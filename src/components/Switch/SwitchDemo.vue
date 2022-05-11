<template>
  <h1>Switch组件</h1>
  <DemoComponentVue :comp="SwitchDemo1Vue" title="常规用法" />

  <!-- <div class="demo">
    <h2>支持disabled</h2>
    <div class="demo-component">
      <SwitchDemo2Vue />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="checkedBool" /&gt;</pre>
    </div>
  </div> -->
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import SwitchDemo1Vue from "./SwitchDemo1.vue";
import DemoComponentVue from "../DemoComponent.vue";

export default defineComponent({
  components: { DemoComponentVue },
  setup() {
    return {
      SwitchDemo1Vue,
    };
  },
});
</script>

<style scoped lang="scss"></style>
