<template>
  <router-view />
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import { provide, ref } from "vue";
import router from "./router/index";

export default {
  name: "App",
  setup() {
    const clientWidth = document.documentElement.clientWidth;
    const menuDisplay = ref(clientWidth > 719);
    provide("xx", menuDisplay);

    router.afterEach(() => {
      if (clientWidth <= 719) {
        menuDisplay.value = false;
      }
    });
  },
};
</script>

<style></style>
