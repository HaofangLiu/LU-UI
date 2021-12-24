<template>
  <div class="tabs-lu">
    <div class="tabs-nav">
      <div class="tabs-nav-items" v-for="(t, index) in titles" key="index">
        {{ t }}
      </div>
    </div>
    <div class="tabs-content">
      <component v-for="(c, index) in defalut" key="index" :is="c" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Tab from "./Tab.vue";
export default defineComponent({
  setup(props, context) {
    const defalut = context.slots.default();
    defalut.forEach((element) => {
      if (element.type !== Tab) {
        throw Error("only accept Tab");
      }
    });
    const titles = defalut.map((ele) => {
      return ele.props.title;
    });
    return {
      defalut,
      titles,
    };
  },
});
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.tabs-nav {
  display: flex;
  color: $color;
  border-bottom: 1px solid $border-color;
  &-items {
    padding: 8px 0;
    margin: 0 16px;
    cursor: pointer;
    &.selected {
      color: $blue;
    }
  }
  &:first-child {
    margin-left: 0;
  }
}
.tabs-content {
  padding: 8px 0;
}
</style>
