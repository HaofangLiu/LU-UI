<template>
  <div>
    <TopnavVue></TopnavVue>
    <div class="banner">
      <h1>Lu-UI</h1>
      <h2>一个简单的Vue UI组件库</h2>
      <span class="actions">
        <a href="https://github.com/HaofangLiu">仓库链接</a>
        <router-link to="/doc">开始</router-link>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopnavVue from "../components/Topnav.vue";

export default defineComponent({
  components: {
    TopnavVue,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.banner {
  padding: 100px 0;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.actions {
  padding: 8px 0;
  > a {
    margin: 0 8px;
    padding: 0 8px;
    $h: 28px;
    display: inline-block;
    height: $h;
    line-height: $h;
    border-radius: 14px;
    background-color: white;
  }
}
</style>
