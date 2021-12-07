<template>
  <div class="topnav">
    <div class="icon" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
          fill="currentColor"
        ></path>
      </svg>
    </div>

    <img class="logo" src="../assets/compass.svg" />
    <ul class="menu">
      <li>menu</li>
      <li>menu</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  setup() {
    const menuVisible = inject<Ref<boolean>>("xx");

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu,
    };
  },
});
</script>

<style scoped lang="scss">
.topnav {
  border-bottom: 1px solid #eaecef;
  background-color: #fff;
  font-size: 16px;
  height: 3em;
  display: flex;
  position: fixed;
  padding: 0.5em 1.5em;
  top: 0;
  left: 0;
  width: 100%;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      line-height: 31px;
      margin: 0 1em;
    }
  }

  > .icon {
    display: none;
    width: 1em;
    cursor: pointer;
  }

  @media (max-width: 719px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .icon {
      display: flex;
    }
  }
}
</style>
