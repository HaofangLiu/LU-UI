<template>
  <h1>tabs Demo</h1>
  <Tabs v-model:selected="selectedTitle">
    <Tab title="导航1">tab1内容</Tab>
    <Tab title="导航2">tab2内容</Tab>
    <Tab title="导航3">tab3内容</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Tabs, Tab },
  setup() {
    const selectedTitle = ref("导航1");
    return {
      selectedTitle,
    };
  },
});
</script>

<style></style>
