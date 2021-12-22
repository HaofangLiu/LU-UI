<template>
  <h1>tabs Demo</h1>
  <Tabs>
    <Tab title="导航1">tab1</Tab>
    <Tab title="导航2">tab2</Tab>
    <Tab title="导航3">tab3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {defineComponent } from "vue";

export default defineComponent({
  components: { Tabs, Tab },
});
</script>

<style></style>
