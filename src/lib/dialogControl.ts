import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { title, content, cancel, confirm,onCancel,onConfirm,closeOnClickOverlay } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          onConfirm,
          onCancel,
          closeOnClickOverlay,
          "onUpdate:visible": (value) => {
            if (value === false) {
              app.unmount();
              div.remove();
            }
          },
        },
        {
          header: () => title,
          default: () => content,
          btn1: () => cancel,
          btn2: () => confirm,
        }
      );
    },
  });
  app.mount(div);
};
