<template>
  <div class="wrapper-lu">
    <button
      v-bind="$attrs"
      class="button-lu"
      :class="[theme, size]"
      :disabled="disabled"
    >
      <span class="loading" v-if="loading"></span>
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed, onMounted } from "vue";

export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {},
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
.wrapper-lu {
  display: inline-block;
  & + & {
    margin-left: 8px;
  }
  .button-lu {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    &:hover,
    &:focus {
      color: #5acea7;
      border-color: #7fe7c4;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    &.danger {
      border-color: transparent;
      box-shadow: none;
      color: #000;
      background-color: #e88080;
      &:hover,
      &:focus {
        background-color: #e98b8b;
      }
    }
    &.success {
      border-color: transparent;
      box-shadow: none;
      color: #000;
      background-color: #63e2b7;
      &:hover,
      &:focus {
        background-color: #7fe7c4;
      }
    }
    &.text {
      border-color: transparent;
      box-shadow: none;
      color: #000;
      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    }

    &.large {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.medium {
      font-size: 18px;
      height: 34px;
      padding: 0 4px;
    }
    &.small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
    &[disabled] {
      cursor: not-allowed;
      color: grey;
    }

    .loading {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: blue blue blue transparent;
      border-style: solid;
      border-width: 2px;
    }
  }
}
</style>
