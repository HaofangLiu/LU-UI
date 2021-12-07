<template>
  <div class="layout">
    <TopnavVue></TopnavVue>
    <div class="content">
      <aside :class="{ open: menuVisible }">
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";
import TopnavVue from "../components/Topnav.vue";

export default defineComponent({
  components: {
    TopnavVue,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("xx");
    return {
      menuVisible,
    };
  },
});
</script>

<style scoped lang="scss">
.content {
  > aside {
    font-size: 16px;
    padding: 10px;
    background-color: #fff;
    width: 15em;
    position: fixed;
    top: 3em;
    left: 0;
    bottom: 0;
    border-right: 1px solid #eaecef;
    overflow-y: auto;
  }

  main {
    margin-left: 16em;
    padding: 3px;
    margin-top: 3em;
  }
}

@media (max-width: 719px) {
  aside {
    top: 3em;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
  .content {
    main {
      margin-left: 0;
    }
  }
}

.open {
  transform: translateX(0);
}
</style>
