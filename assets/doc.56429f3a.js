import{T as $}from"./Topnav.848cb22f.js";import{d as l,i as S,_ as d,r as a,o as i,c as u,a as e,b as o,w as s,n as T,p as x,e as b,g as _}from"./index.a0e6d425.js";const B=l({components:{},setup(){return{menuVisible:S("xx")}}}),c=n=>(x("data-v-716283a3"),n=n(),b(),n),w=c(()=>e("h2",null,"Document",-1)),g=_("INTRO"),I=_("GET START"),y=c(()=>e("br",null,null,-1)),C=c(()=>e("h2",null,"Component",-1)),k=_("Switch"),N=_("Button"),D=_("Dialog"),E=_("Tabs");function R(n,r,p,m,h,v){const t=a("router-link");return i(),u("aside",{class:T({open:n.menuVisible})},[w,e("ol",null,[e("li",null,[o(t,{to:"/doc"},{default:s(()=>[g]),_:1})]),e("li",null,[o(t,{to:"/doc/getStart"},{default:s(()=>[I]),_:1})])]),y,C,e("ol",null,[e("li",null,[o(t,{to:"/doc/switch"},{default:s(()=>[k]),_:1})]),e("li",null,[o(t,{to:"/doc/button"},{default:s(()=>[N]),_:1})]),e("li",null,[o(t,{to:"/doc/dialog"},{default:s(()=>[D]),_:1})]),e("li",null,[o(t,{to:"/doc/tabs"},{default:s(()=>[E]),_:1})])])],2)}var j=d(B,[["render",R],["__scopeId","data-v-716283a3"]]);const z=l({components:{TopnavVue:$,SideBarVue:j},setup(){return{}}}),A={class:"layout"},G={class:"content"};function O(n,r,p,m,h,v){const t=a("TopnavVue"),f=a("SideBarVue"),V=a("router-view");return i(),u("div",A,[o(t),e("div",G,[o(f),e("main",null,[o(V)])])])}var H=d(z,[["render",O],["__scopeId","data-v-0e3610dd"]]);export{H as default};