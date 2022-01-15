<template>
  <div class="tabs-lu">
    <div class="tabs-nav" ref="navRef">
      <div
        class="tabs-nav-items"
        :class="{ selected: tab.props.title === selected }"
        v-for="(tab, index) in defaultElement"
        :key="index"
        @click="changTab(tab)"
        :ref="
          (el) => {
            if (tab.props.title === selected) tabSelecctedItemRef = el;
          }
        "
      >
        {{ tab.props.title }}
      </div>
      <div class="tabs-indeicator" ref="indicatorRef"></div>
    </div>

    <div class="tabs-content">
      <component :is="selectedTab" :key="selectedTab.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  computed,
  onBeforeUpdate,
  watchEffect,
  onMounted,
  effect,
  onUpdated,
} from "vue";
import Tab from "./Tab.vue";
export default defineComponent({
  props: {
    selected: {
      type: String,
    },
  },
  emits: ["update:selected"],
  setup(props, context) {
    // 计算下滑块长度
    const tabSelecctedItemRef = ref(null);
    const indicatorRef = ref<HTMLDivElement>(null);
    const navRef = ref<HTMLDivElement>(null);

    // 为了防止watchEffect在挂在前执行
    onMounted(() => {
      watchEffect(() => {
        const { width, left: left2 } =
          tabSelecctedItemRef.value.getBoundingClientRect();
        indicatorRef.value.style.width = width + "px";
        const { left: left1 } = navRef.value.getBoundingClientRect();
        const left = left2 - left1;
        indicatorRef.value.style.left = left + "px";
      });
    });

    // 获取到插槽的虚拟节点
    const defaultElement = context.slots.default();
    defaultElement.forEach((element) => {
      if (element.type !== Tab) {
        throw Error("only accept Tab");
      }
    });

    // 显示对应的插槽内容
    const selectedTab = computed(() =>
      defaultElement.find((item) => item.props.title === props.selected)
    );

    // 点击改变Tab事件
    const changTab = (tab) => {
      context.emit("update:selected", tab.props.title);
    };

    return {
      defaultElement,
      selectedTab,
      changTab,
      tabSelecctedItemRef,
      indicatorRef,
      navRef,
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
  position: relative;
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
.tabs-indeicator {
  position: absolute;
  height: 3px;
  background: $blue;
  width: 100px;
  left: 16px;
  bottom: 0;
  transition: all 0.25s;
}
</style>
