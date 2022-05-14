import{B as b,D as O}from"./DemoComponent.d19cdf12.js";import{d as C,_ as g,r as p,o as v,j as k,c as D,a as t,l as f,b as d,w as c,k as B,T as V,g as r,u as w,v as F,h as N,F as E}from"./index.a0e6d425.js";const T=C({components:{ButtonVue:b},props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!1},onConfirm:{type:Function},onCancel:{type:Function}},setup(n,o){const e=()=>{o.emit("update:visible",!n.visible)};return{close:e,clickOnOverlay:()=>{n.closeOnClickOverlay&&e()},confirm:()=>{var l;((l=n.onConfirm)==null?void 0:l.call(n))!==!1&&e()},cancel:()=>{n.onCancel&&n.onCancel(),e()}}}}),A={key:0,class:"dialog-lu"},U={class:"dialog-wrapper"},j={class:"dialog"},S=r("\u53D6\u6D88"),X=r("\u786E\u8BA4");function q(n,o,e,s,a,u){const l=p("ButtonVue");return v(),k(V,{to:"body"},[n.visible?(v(),D("div",A,[t("div",{class:"dialog-overlay",onClick:o[0]||(o[0]=(...i)=>n.clickOnOverlay&&n.clickOnOverlay(...i))}),t("div",U,[t("div",j,[t("header",null,[f(n.$slots,"header"),t("span",{class:"dialog-close",onClick:o[1]||(o[1]=(...i)=>n.close&&n.close(...i))}," X ")]),t("main",null,[f(n.$slots,"default")]),t("footer",null,[d(l,{onClick:n.cancel},{default:c(()=>[f(n.$slots,"btn1",{},()=>[S])]),_:3},8,["onClick"]),d(l,{onClick:n.confirm},{default:c(()=>[f(n.$slots,"btn2",{},()=>[X])]),_:3},8,["onClick"])])])])])):B("",!0)])}var h=g(T,[["render",q]]);const z=n=>{const{title:o,content:e,cancel:s,confirm:a,onCancel:u,onConfirm:l,closeOnClickOverlay:i}=n,m=document.createElement("div");document.body.appendChild(m);const _=w({render(){return F(h,{visible:!0,onConfirm:l,onCancel:u,closeOnClickOverlay:i,"onUpdate:visible":y=>{y===!1&&(_.unmount(),m.remove())}},{header:()=>o,default:()=>e,btn1:()=>s,btn2:()=>a})}});_.mount(m)},$=C({components:{DialogVue:h,Button:b},setup(){const n=N(!1),o=()=>{n.value=!n.value},e=()=>{console.log("click on close")},s=()=>(console.log("click on confirm"),!1);return{toggle:o,visible:n,onConfirm:s,onCancel:e,showDialog:()=>{z({title:"test",content:"\u4F60\u597D",cancel:"cancel",confirm:"confirm",onCancel:e,onConfirm:s,closeOnClickOverlay:!0})}}}}),G=t("strong",null,"header",-1),H=t("p",null,"1",-1),I=t("p",null,"2",-1),J=t("p",null,"e",-1),K=r("cacnel"),L=r("confirm"),M=r("cannot close on click overlap"),P=r("show");function Q(n,o,e,s,a,u){const l=p("DialogVue"),i=p("Button");return v(),D(E,null,[d(l,{visible:n.visible,"onUpdate:visible":o[0]||(o[0]=m=>n.visible=m),closeOnClickOverlay:!1,onConfirm:n.onConfirm,onCancel:n.onCancel},{header:c(()=>[G]),default:c(()=>[H,I,J]),btn1:c(()=>[K]),btn2:c(()=>[L]),_:1},8,["visible","onConfirm","onCancel"]),d(i,{onClick:n.toggle},{default:c(()=>[M]),_:1},8,["onClick"]),d(i,{onClick:n.showDialog},{default:c(()=>[P]),_:1},8,["onClick"])],64)}var R=g($,[["render",Q]]);$.__sourceCode=`<template>
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

import { ref,defineComponent } from "vue";
import DialogVue from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { openDialog } from "../../lib/dialogControl";

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
        content: "\u4F60\u597D",
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
<\/script>

<style></style>`;const W=C({components:{DemoComponentVue:O},setup(){return{DialogDemo1Vue:R}}});function Y(n,o,e,s,a,u){const l=p("DemoComponentVue");return v(),k(l,{comp:n.DialogDemo1Vue,title:"Dialog"},null,8,["comp"])}var nn=g(W,[["render",Y]]);export{nn as default};
