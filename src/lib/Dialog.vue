<template>
  <Teleport to="body">
    <div v-if="visible" class="dialog-lu">
      <div class="dialog-overlay" @click="clickOnOverlay"></div>
      <div class="dialog-wrapper">
        <div class="dialog">
          <header>
            <slot name="header"></slot>
            <span class="dialog-close" @click="close"> X </span>
          </header>
          <main>
            <slot></slot>
          </main>
          <footer>
            <ButtonVue @click="cancel"><slot name="btn1">取消</slot></ButtonVue>
            <ButtonVue @click="confirm"><slot name="btn2">确认</slot></ButtonVue>
          </footer>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { ref,defineComponent } from "vue";
import ButtonVue from "./Button.vue";

export default defineComponent({
  components: { ButtonVue },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    onConfirm: {
      type: Function,
    },
    onCancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", !props.visible);
    };
    const clickOnOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const confirm = () => {
      if (props.onConfirm?.() !== false) {
        close();
      }
    };
    const cancel = () => {
      props.onCancel && props.onCancel();
      close();
    };
    return { close, clickOnOverlay, confirm, cancel };
  },
});
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.dialog-lu {
  .dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 10;
    }

    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }

    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }

    > main {
      padding: 12px 16px;
    }

    > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }

    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      margin-left: auto;
    }
  }
}
</style>
