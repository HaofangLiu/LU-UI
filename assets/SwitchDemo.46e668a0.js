import{d as r,_ as a,o as l,c as i,a as t,n as v,t as h,F as m,h as $,r as d,j as w,b as C}from"./index.a0e6d425.js";import{D as S}from"./DemoComponent.d19cdf12.js";const g=r({props:{value:Boolean},emits:["update:value"],setup(e,o){return{toggle:()=>{o.emit("update:value",!e.value)}}}}),b={class:"switch-lu"};function D(e,o,s,u,c,p){return l(),i(m,null,[t("div",b,[t("span",{class:v(["slider round",{checked:e.value}]),onClick:o[0]||(o[0]=(...n)=>e.toggle&&e.toggle(...n))},null,2)]),t("div",null,h(e.value),1)],64)}var V=a(g,[["render",D]]);const _=r({components:{Switch:V},setup(){return{bool:$(!1)}}});function k(e,o,s,u,c,p){const n=d("Switch");return l(),w(n,{value:e.bool,"onUpdate:value":o[0]||(o[0]=f=>e.bool=f)},null,8,["value"])}var B=a(_,[["render",k]]);_.__sourceCode=`<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import { ref, defineComponent } from "vue";
export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
});
<\/script>
`;const E=r({components:{DemoComponentVue:S},setup(){return{SwitchDemo1Vue:B}}}),y=t("h1",null,"Switch\u7EC4\u4EF6",-1);function F(e,o,s,u,c,p){const n=d("DemoComponentVue");return l(),i(m,null,[y,C(n,{comp:e.SwitchDemo1Vue,title:"\u5E38\u89C4\u7528\u6CD5"},null,8,["comp"])],64)}var z=a(E,[["render",F]]);export{z as default};
