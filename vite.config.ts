import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginMd2Vue from "vite-plugin-md2vue";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    vitePluginMd2Vue(),
  ],
});
