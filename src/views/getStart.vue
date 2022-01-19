<template>
  <h1>Get start</h1>
  <article class="markdown-body">
    <h1>Get start</h1>

    <h1>Install</h1>
    <pre><code>npm install king-ui</code></pre>
    <p>or</p>
    <pre><code>yarn add king-ui</code></pre>

    <p>下一节：<a href="#/doc/get-started">开始使用</a></p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre><code>import {Button, Tabs, Switch, Dialog} from "king-ui"</code></pre>
    就可以使用我提供的组件了。

    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre>
      <code>&lt;template&gt;
        &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
        &lt;/template&gt;
        &lt;script&gt;
        import {Button, Tabs, Switch, Dialog} from "king-ui"
        export default {
          components: {Button}
        }
        &lt;/script&gt;
      </code>
    </pre>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style></style>
