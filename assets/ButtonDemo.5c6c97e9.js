import{B as f,D as v}from"./DemoComponent.d19cdf12.js";import{d as l,_ as a,r as i,o as c,c as d,b as o,w as e,F as m,g as u,h as x}from"./index.a0e6d425.js";const g=l({components:{Button:f},setup(){return{onClick:()=>{console.log("hi")}}}}),k=u("default"),D=u("danger"),V=u("success"),b=u("text");function z(n,s,r,p,_,B){const t=i("Button");return c(),d(m,null,[o(t,null,{default:e(()=>[k]),_:1}),o(t,{theme:"danger",onClick:n.onClick},{default:e(()=>[D]),_:1},8,["onClick"]),o(t,{theme:"success"},{default:e(()=>[V]),_:1}),o(t,{theme:"text"},{default:e(()=>[b]),_:1})],64)}var L=a(g,[["render",z]]);g.__sourceCode=`<template>
  <Button>default</Button>
  <Button theme="danger" @click="onClick">danger</Button>
  <Button theme="success">success</Button>
  <Button theme="text">text</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };

    return {
      onClick,
    };
  },
});
<\/script>
`;const h=l({components:{Button:f},setup(){}}),w=u("large"),y=u("medium"),F=u("small");function N(n,s,r,p,_,B){const t=i("Button");return c(),d(m,null,[o(t,{size:"large"},{default:e(()=>[w]),_:1}),o(t,{size:"medium"},{default:e(()=>[y]),_:1}),o(t,{size:"small"},{default:e(()=>[F]),_:1})],64)}var T=a(h,[["render",N]]);h.__sourceCode=`<template>
  <Button size="large">large</Button>
  <Button size="medium">medium</Button>
  <Button size="small">small</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {},
});
<\/script>
`;const $=l({components:{Button:f},setup(){}}),E=u("default"),I=u("default");function S(n,s,r,p,_,B){const t=i("Button");return c(),d(m,null,[o(t,{disabled:""},{default:e(()=>[E]),_:1}),o(t,{theme:"text",disabled:""},{default:e(()=>[I]),_:1})],64)}var j=a($,[["render",S]]);$.__sourceCode=`<template>
  <Button disabled>default</Button>
  <Button theme="text" disabled>default</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {},
});
<\/script>
`;const C=l({components:{Button:f},setup(){const n=x(!1);return{loadingBool:n,toogleLoading:()=>{n.value=!n.value}}}}),q=u("default loading"),A=u("click me"),G=u("text");function H(n,s,r,p,_,B){const t=i("Button");return c(),d(m,null,[o(t,{loading:""},{default:e(()=>[q]),_:1}),o(t,{loading:n.loadingBool,onClick:n.toogleLoading},{default:e(()=>[A]),_:1},8,["loading","onClick"]),o(t,{theme:"text",loading:""},{default:e(()=>[G]),_:1})],64)}var J=a(C,[["render",H]]);C.__sourceCode=`<template>
  <Button loading>default loading</Button>
  <Button :loading="loadingBool" @click="toogleLoading">click me</Button>
  <Button theme="text" loading>text</Button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: { Button },
  setup() {
    const loadingBool = ref(false);
    const toogleLoading = () => {
      loadingBool.value = !loadingBool.value;
    };
    return {
      loadingBool,
      toogleLoading,
    };
  },
});
<\/script>
`;const K=l({components:{DemoComponentVue:v},setup(){return{ButtonDemo1Vue:L,ButtonDemo2Vue:T,ButtonDemo3Vue:j,ButtonDemo4Vue:J}}});function M(n,s,r,p,_,B){const t=i("DemoComponentVue");return c(),d(m,null,[o(t,{comp:n.ButtonDemo1Vue,title:"Button with Theme"},null,8,["comp"]),o(t,{comp:n.ButtonDemo2Vue,title:"Button witth Size"},null,8,["comp"]),o(t,{comp:n.ButtonDemo3Vue,title:"Button witth Disabled"},null,8,["comp"]),o(t,{comp:n.ButtonDemo4Vue,title:"Button witth Loading"},null,8,["comp"])],64)}var Q=a(K,[["render",M],["__scopeId","data-v-483bd524"]]);export{Q as default};
