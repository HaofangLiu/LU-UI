<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <!-- <SwitchDemo1Vue /> -->
      <component :is="comp"></component>
    </div>
    <div class="demo-actions">
      <Button @click="checkShowCode">查看代码</Button>
    </div>
    <div v-if="checkedBool" class="demo-code">
      <pre v-html="coloredHtml" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import Button from "../lib/Button.vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { string } from "yargs";

export default defineComponent({
  components: { Button },
  props: {
    comp: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const checkedBool = ref(false);
    const checkShowCode = () => {
      checkedBool.value = !checkedBool.value;
    };
    const coloredHtml = computed(() => {
      return Prism.highlight(
        props.comp.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    return {
      checkedBool,
      Prism,
      coloredHtml,
      checkShowCode,
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
