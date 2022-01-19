<template>
  <aside :class="{ open: menuVisible }">
    <h2>Document</h2>
    <ol>
      <li>
        <router-link to="/doc">INTRO</router-link>
      </li>
      <li>
        <router-link to="/doc/getStart">GET START</router-link>
      </li>
    </ol>
    <br />
    <h2>Component</h2>
    <ol>
      <li>
        <router-link to="/doc/switch">Switch</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs</router-link>
      </li>
    </ol>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, inject, Ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const menuVisible = inject<Ref<boolean>>("xx");
    return {
      menuVisible,
    };
  },
});
</script>

<style scoped lang="scss">
aside {
  font-size: 16px;
  padding: 10px 0;
  background-color: #fff;
  width: 15em;
  position: fixed;
  top: 3em;
  left: 0;
  bottom: 0;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
  z-index: 1;
  h2{
    padding: 0 10px;
  }

  ol {
    li {
      a {
        display: block;
        padding: 10px 20px;
      }
      .router-link-exact-active {
        text-decoration: underline;
        background-color: blanchedalmond;
      }
    }
  }
}
@media (max-width: 719px) {
  aside {
    top: 3em;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
}
.open {
  transform: translateX(0);
}
</style>
