<template>
  <div class="top-nav">
    <TopnavVue></TopnavVue>

    <div class="banner">
      <h1>Lu-UI</h1>
      <h2>A UI toolkit inspired by weired UI</h2>
      <span class="actions">
        <a href="https://github.com/HaofangLiu">Github</a>
        <router-link to="/doc">start</router-link>
      </span>
    </div>
  </div>
  <div class="feature">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>Based on Vue 3</h3>
        <p>Use Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>Based TypeScript</h3>
        <p>Use TypeScript</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huixingSVG"></use>
        </svg>
        <h3>easy to read, easy to use</h3>
        <p>All components simple to read and use</p>
      </li>
    </ul>
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
.top-nav {
  background: rgb(54, 71, 79);
  background: linear-gradient(
    335deg,
    rgba(54, 71, 79, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 80px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.actions {
  padding: 20px 0;
  > a {
    color: #f9f1ef;
    margin: 0 8px;
    padding: 0 8px;
    display: inline-block;
    border-radius: 14px;
    background-color: #36474f;
    &:hover {
      text-decoration: none;
      color: cornsilk;
    }
  }
}

.feature {
  width: 400px;
  margin: 50px auto;

  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  & > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > p {
        grid-area: text;
      }
    }
  }
  & svg {
    grid-area: icon;
    height: 64px;
    width: 64px;
  }
}
</style>
