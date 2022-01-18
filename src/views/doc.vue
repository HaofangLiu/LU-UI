<template>
  <div class="layout">
    <TopnavVue></TopnavVue>
    <div class="content">
      <SideBarVue></SideBarVue>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";
import TopnavVue from "../components/Topnav.vue";
import SideBarVue from "../components/SideBar.vue";

export default defineComponent({
  components: {
    TopnavVue,
    SideBarVue,
  },
  setup() {
    return {
    };
  },
});
</script>

<style scoped lang="scss">
.content {
  main {
    margin-left: 16em;
    padding: 3px;
    margin-top: 3em;
  }
}

@media (max-width: 719px) {
  .content {
    main {
      margin-left: 0;
    }
  }
}
</style>
