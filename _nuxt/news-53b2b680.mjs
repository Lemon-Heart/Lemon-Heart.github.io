import{_ as h,a as p,s as v,u as m,L as x,o as n,c as o,b as t,t as _,F as f,r as y,x as g,q as w,g as D}from"./entry-91527c4a.mjs";const $={name:"news",async setup(d,{expose:r}){r();let e,a;const{$baseURL:i}=p(),{data:l}=([e,a]=v(()=>g("news",()=>$fetch(`${i}news.json`))),e=await e,a(),e),c=l.value[0].head;m({title:c});const s={$baseURL:i,data:l,title:c};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},b={class:"cont"},k={class:"blockContent"},A={class:"list"},B={class:"list__img"},C={alt:""},L={class:"list__descr"},N={key:0,class:"list__date"},S={class:"list__h"},j={class:"list__text"},z={class:"list__textDetail"};function F(d,r,e,a,i,l){const c=x("lazy");return n(),o("div",b,[t("div",k,[t("h1",null,_(a.title),1),t("div",A,[(n(!0),o(f,null,y(a.data[0].items,(s,u)=>(n(),o("div",{key:u,class:"list__item"},[t("div",B,[w(t("img",C,null,512),[[c,{src:`/img/${s.img}`}]])]),t("div",L,[s.date?(n(),o("span",N,_(s.date),1)):D("",!0),t("h3",S,_(s.head),1),t("span",j,_(s.text),1),t("p",z,_(s.textDetail),1)])]))),128))])])])}var q=h($,[["render",F]]);export{q as default};
