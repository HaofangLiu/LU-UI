<template>
  <div class="wrapper-lu">
    <button
      v-bind="$attrs"
      class="button-lu"
      :class="[theme, size]"
      :disabled="disabled"
    >
      <span class="loading" v-if="loading">
        <svg
          class="spinner"
          width="14px"
          height="14px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="path"
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </span>
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed, onMounted,defineComponent } from "vue";

export default defineComponent({
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
});
</script>

<style lang="scss">
@use "sass:math";
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$offset: 187;
$duration: 1.4s;
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
        margin-right: 4px;
      .spinner {
        animation: rotator $duration linear infinite;
      }

      @keyframes rotator {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(270deg);
        }
      }

      .path {
        stroke-dasharray: $offset;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash $duration ease-in-out infinite,
          colors ($duration * 4) ease-in-out infinite;
      }

      @keyframes colors {
        0% {
          stroke: #4285f4;
        }
        25% {
          stroke: #de3e35;
        }
        50% {
          stroke: #f7c223;
        }
        75% {
          stroke: #1b9a59;
        }
        100% {
          stroke: #4285f4;
        }
      }

      @keyframes dash {
        0% {
          stroke-dashoffset: $offset;
        }
        50% {
          stroke-dashoffset: math.div($offset, 4);
          transform: rotate(135deg);
        }
        100% {
          stroke-dashoffset: $offset;
          transform: rotate(450deg);
        }
      }
    }
  }
}
</style>
