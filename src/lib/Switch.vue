<template>
  <div class="switch-lu">
    <span
      class="slider round"
      :class="{ checked: value }"
      @click="toggle"
    ></span>
  </div>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref ,defineComponent} from "vue";

export default defineComponent({
  props: {
    value: Boolean,
  },
  emits: ["update:value"],
  setup(props,context) {
    const toggle = () => {
        context.emit('update:value', !props.value)
    };
    return { toggle };
  },
});
</script>

<style lang="scss">
.switch-lu {
  display: inline-block;
  width: 60px;
  height: 34px;
  position: relative;

  .slider {
    cursor: pointer;
    background-color: #ccc;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  .slider::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    top: 4px;
    background-color: white;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round::before {
    border-radius: 50%;
  }

  .slider.checked {
    background-color: #2196f3;

    &::before {
      left: 30px;
    }
  }
}
</style>
