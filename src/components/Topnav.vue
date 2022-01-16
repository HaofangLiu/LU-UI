<template>
  <div class="topnav">
    <div class="nav-icon" @click="toggleMenu">
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
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-compass"></use>
      </svg>
    </router-link>
    <ul class="menu" :class="{ open: menuVisible }">
      <li>
        <router-link to="/doc"> Document </router-link>
      </li>
      <li><a href="https://wiredjs.com/">Weired UI</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  setup() {
    const menuVisible = inject<Ref<boolean>>("xx");
    const toggleMenu = () => {
      console.log(menuVisible.value);
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu,
      menuVisible,
    };
  },
});
</script>

<style scoped lang="scss">
.topnav {
  font-size: 16px;
  height: 3em;
  display: flex;
  position: fixed;
  padding: 0.5em 1.5em;
  top: 0;
  left: 0;
  width: 100%;
  .logo > svg {
    width: 2em;
    height: 2em;
    margin-right: auto;
  }
  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-left: auto;
    li {
      line-height: 31px;
      margin: 0 1em;
    }
  }

  .nav-icon {
    display: none;
    width: 1em;
    cursor: pointer;
  }

  @media (max-width: 719px) {
    .menu {
      display: block;
      background: #f9f9f9;
      visibility: hidden;
      width: 110px;
      position: absolute;
      transition: all 0.25s ease;
      left: 8px;
      top: 48px;
      z-index: 1;
      opacity: 0;
      border-radius: 5%;
      &.open {
        visibility: visible;
        opacity: 1;
      }
    }

    .logo {
      margin: 0 auto;
    }
    .nav-icon {
      display: flex;
    }
  }
}
</style>
