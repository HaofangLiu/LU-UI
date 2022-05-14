import{d as f,_ as m,o as l,c as u,l as D,h as p,x as R,y as V,q as k,a as _,F as w,z as E,j as v,s as F,n as S,t as A,r as T,w as d,b,g as $}from"./index.a0e6d425.js";import{D as N}from"./DemoComponent.d19cdf12.js";const z=f({setup(){}}),I={class:"tab-lu"};function j(e,n,c,o,r,a){return l(),u("div",I,[D(e.$slots,"default")])}var h=m(z,[["render",j]]);const q=f({props:{selected:{type:String}},emits:["update:selected"],setup(e,n){const c=p(null),o=p(null),r=p(null);R(()=>{V(()=>{const{width:s,left:B}=c.value.getBoundingClientRect();o.value.style.width=s+"px";const{left:y}=r.value.getBoundingClientRect(),g=B-y;o.value.style.left=g+"px"})});const a=n.slots.default();a.forEach(s=>{if(s.type!==h)throw Error("only accept Tab")});const t=k(()=>a.find(s=>s.props.title===e.selected));return{defaultElement:a,selectedTab:t,changTab:s=>{n.emit("update:selected",s.props.title)},tabSelecctedItemRef:c,indicatorRef:o,navRef:r}}}),x={class:"tabs-lu"},L={class:"tabs-nav",ref:"navRef"},M=["onClick"],U={class:"tabs-indeicator",ref:"indicatorRef"},G={class:"tabs-content"};function H(e,n,c,o,r,a){return l(),u("div",x,[_("div",L,[(l(!0),u(w,null,E(e.defaultElement,(t,i)=>(l(),u("div",{class:S(["tabs-nav-items",{selected:t.props.title===e.selected}]),key:i,onClick:s=>e.changTab(t),ref_for:!0,ref:s=>{t.props.title===e.selected&&(e.tabSelecctedItemRef=s)}},A(t.props.title),11,M))),128)),_("div",U,null,512)],512),_("div",G,[(l(),v(F(e.selectedTab),{key:e.selectedTab.props.title}))])])}var J=m(q,[["render",H]]);const C=f({components:{Tabs:J,Tab:h},setup(){return{selectedTitle:p("\u5BFC\u822A1")}}}),K=$("tab1\u5185\u5BB9"),O=$("tab2\u5185\u5BB9"),P=$("tab3\u5185\u5BB9");function Q(e,n,c,o,r,a){const t=T("Tab"),i=T("Tabs");return l(),v(i,{selected:e.selectedTitle,"onUpdate:selected":n[0]||(n[0]=s=>e.selectedTitle=s)},{default:d(()=>[b(t,{title:"\u5BFC\u822A1"},{default:d(()=>[K]),_:1}),b(t,{title:"\u5BFC\u822A2"},{default:d(()=>[O]),_:1}),b(t,{title:"\u5BFC\u822A3"},{default:d(()=>[P]),_:1})]),_:1},8,["selected"])}var W=m(C,[["render",Q]]);C.__sourceCode=`<template>
  <Tabs v-model:selected="selectedTitle">
    <Tab title="\u5BFC\u822A1">tab1\u5185\u5BB9</Tab>
    <Tab title="\u5BFC\u822A2">tab2\u5185\u5BB9</Tab>
    <Tab title="\u5BFC\u822A3">tab3\u5185\u5BB9</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Tabs, Tab },
  setup() {
    const selectedTitle = ref("\u5BFC\u822A1");
    return {
      selectedTitle,
    };
  },
});
<\/script>

<style></style>
`;const X=f({components:{DemoComponentVue:N},setup(){return{TabDemo1Vue:W}}});function Y(e,n,c,o,r,a){const t=T("DemoComponentVue");return l(),v(t,{comp:e.TabDemo1Vue,title:"tabs demo"},null,8,["comp"])}var te=m(X,[["render",Y]]);export{te as default};
