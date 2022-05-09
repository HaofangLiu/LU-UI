import path from "path";
import fs from "fs";
import { searchTagContent } from "../utils";

export const vitePluginVueReturnSourceCode = (options?: {}): {
  name: string;
  transform(code: string, id: string);
} => {
  return {
    name: "vitePluginVueReturnSourceCode",
    // transform 可用于转换已加载的模块内容
    transform(code: string, id: string) {
      if (!id.endsWith(".vue")) {
        return;
      }
      //filename ends with number
      if (/\d+.vue$/.test(id)) {
        const filePath = path.resolve(id);
        let sourceCode = fs.readFileSync(filePath, "utf8");
        return {
          code: (code += `_sfc_main.__sourceCode = ${JSON.stringify(
            sourceCode
          )}\n`),
          map: null,
        };
      }
    },
  };
};
