import{_ as b,a as v,s as x,u as $,o as e,c as t,b as n,t as l,F as u,r as d,x as q,f as B,j as L}from"./entry-91527c4a.mjs";const A={name:"requisites",async setup(m,{expose:p}){p();let a,s;const{$baseURL:i}=v(),{data:h}=([a,s]=x(()=>q("requisites",()=>$fetch(`${i}requisites.json`))),a=await a,s(),a),r="\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B";$({title:r});const o={$baseURL:i,data:h,title:r};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},H={class:"cont"},S={class:"blockContent"},g={class:"p"},w={key:0},C={key:1},D=["href"],F=["innerHTML"];function M(m,p,a,s,i,h){const r=L;return e(),t("div",H,[n("div",S,[n("h1",null,l(s.title)),n("p",g,l(s.data.head),1),n("table",null,[n("tbody",null,[(e(!0),t(u,null,d(s.data.items,(o,f)=>(e(),t("tr",{key:f},[(e(!0),t(u,null,d(o,(_,c)=>(e(),t("td",{key:c},[c==="numbers"?(e(),t("div",w,[(e(!0),t(u,null,d(_,(k,y)=>(e(),B(r,{key:y,tel:k},null,8,["tel"]))),128))])):c==="mail"?(e(),t("div",C,[n("a",{href:`mailto:${_}`},l(_),9,D)])):(e(),t("div",{key:2,innerHTML:_},null,8,F))]))),128))]))),128))])])])])}var T=b(A,[["render",M]]);export{T as default};
