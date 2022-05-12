import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginMd2Vue from "vite-plugin-md2vue";
import { vitePluginVueReturnSourceCode } from "./src/vitePlugin/vueReturnSourceCode";
// https://vitejs.dev/config/

export default defineConfig({
  base: "/LU-UI/",
  plugins: [vue(), vitePluginMd2Vue(), vitePluginVueReturnSourceCode()],
});
