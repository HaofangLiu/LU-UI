<template>
  <div class="topnav">
    <div class="nav-icon" @click="toggleMenu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-nav"></use>
      </svg>
    </div>
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-compass"></use>
      </svg>
    </router-link>
    <div class="menu-section">
      <svg class="icon menu-icon" aria-hidden="true">
        <use xlink:href="#icon-line"></use>
      </svg>
      <ul class="menu">
        <li>
          <router-link to="/doc"> Document </router-link>
        </li>
        <li>
          <a href="https://wiredjs.com/">Weired UI</a>
        </li>
      </ul>
    </div>
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
.top-nav .topnav .nav-icon {
  display: none;
}
.topnav {
  font-size: 16px;
  height: 3em;
  display: flex;
  position: fixed;
  padding: 0.5em 1.5em;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
  .logo > svg {
    width: 2em;
    height: 2em;
    margin-right: auto;
  }
  .menu-section {
    margin-left: auto;
    & > .menu {
      display: flex;
      white-space: nowrap;
      > li {
        line-height: 31px;
        > a {
          padding: 0 2em;
          &:hover{
            color: rgba(192, 177, 37, 0.911);
          }
        }
      }
    }
  }

  .nav-icon,
  .menu-icon {
    display: none;
    width: 1em;
    cursor: pointer;
  }

  @media (max-width: 719px) {
    .menu-section {
      margin-left: 0;
      > .menu {
        visibility: hidden;
        opacity: 0;
        flex-direction: column;
        background: #f9f9f9;
        position: absolute;
        transition: opacity 0.25s ease;
        top: 40px;
        right: 15px;
        border-radius: 5%;
        > li {
          > a {
            display: block;
            border-radius: 10%;
            padding: 10px 15px;
            &:hover {
              background-color: blanchedalmond;
            }
          }
        }
      }
      &:hover {
        & > .menu {
          visibility: visible;
          opacity: 1;
        }
      }
    }
    > .logo {
      margin: 0 auto;
    }
    > .nav-icon,
    .menu-icon,
    > .menu-section {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
