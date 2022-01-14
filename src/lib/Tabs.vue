<template>
  <div class="tabs-lu">
    <div class="tabs-nav">
      <div
        class="tabs-nav-items"
        :class="{ selected: tab.props.title === selected }"
        v-for="(tab, index) in defaultElement"
        :key="index"
        @click="changTab(tab)"
        :ref="
          (el) => {
            if (el) tabItemRef[index] = el;
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
import { ref, defineComponent, computed, onBeforeUpdate, onMounted } from "vue";
import Tab from "./Tab.vue";
export default defineComponent({
  props: {
    selected: {
      type: String,
    },
  },
  emits: ["update:selected"],
  setup(props, context) {
    // console.log(context);
    // console.log({ ...context });

    // 计算下滑块长度
    const tabItemRef = ref<HTMLDivElement[]>([]);
    const indicatorRef = ref<HTMLDivElement>(null);
    onMounted(() => {
      // console.log({...tabItem.value})
      const divs = tabItemRef.value;
      const res = divs.find((item) => item.classList.contains("selected"));
      const { width } = res.getBoundingClientRect();
      indicatorRef.value.style.width = width + "px";
    });

    // 保在每次更新之前重置ref
    onBeforeUpdate(() => {
      tabItemRef.value = [];
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
      tabItemRef,
      indicatorRef,
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
  left: 0;
  bottom: 0;
}
</style>
