<template>
  <p>Dialog</p>
  <DialogVue
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :onConfirm="onConfirm"
    :onCancel="onCancel"
  >
    <template v-slot:header>
      <strong>header</strong>
    </template>

    <template #default>
      <p>1</p>
      <p>2</p>
      <p>e</p>
    </template>

    <template #btn1>cacnel</template>
    <template #btn2>confirm</template>
  </DialogVue>
  <Button @click="toggle">cannot close on click overlap</Button>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">

import { ref,defineComponent, watch, computed, onMounted } from "vue";
import DialogVue from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/dialogControl";

export default defineComponent({
  components: { DialogVue, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const onCancel = () => {
      console.log("click on close");
    };
    // by return boolean to control if close the dialog
    const onConfirm = () => {
      console.log("click on confirm");
      return false;
    };

    const showDialog = () => {
      openDialog({
        title: "test",
        content: "你好",
        cancel: "cancel",
        confirm: "confirm",
        onCancel,
        onConfirm,
        closeOnClickOverlay: true,
      });
    };
    return {
      toggle,
      visible,
      onConfirm,
      onCancel,
      showDialog,
    };
  },
});
</script>

<style></style>
