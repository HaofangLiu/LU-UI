<template>
  <h1>Switch组件</h1>
  <div class="demo">
    <h2>常规使用</h2>
    <div class="demo-component">
    <SwitchDemo1Vue />
      <!-- <component :is="SwitchDemo1Vue"></component> -->
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{SwitchDemo1Vue.__sourceCode}}</pre>
    </div>
  </div>
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
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import SwitchDemo1Vue from "./SwitchDemo1.vue";
console.log(SwitchDemo1Vue);
export default defineComponent({
  components: { Switch, Button, SwitchDemo1Vue },
  setup() {
    const checkedBool = ref(true);
    return {
      checkedBool,
      SwitchDemo1Vue
    };
  },
});
</script>

<style scoped lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
