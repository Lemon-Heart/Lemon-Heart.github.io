import{_ as m,a as B,s as b,u as x,o as a,c as _,b as s,t as c,F as u,r as d,x as y,f as g,j as v}from"./entry-91527c4a.mjs";const $={name:"sko",async setup(k,{expose:l}){l();let o,e;const{$baseURL:r}=B(),{data:i}=([o,e]=b(()=>y("sko",()=>$fetch(`${r}sko.json`))),o=await o,e(),o),n="\u041D\u0430\u0434\u0437\u043E\u0440\u043D\u044B\u0435 \u043E\u0440\u0433\u0430\u043D\u044B";x({title:n});const t={$baseURL:r,data:i,title:n};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},j={class:"cont"},A={class:"blockContent"},S={class:"skoBlock"},w=["src"],C=s("span",{class:"skoBlock__sp"},"\u0421\u0430\u0439\u0442",-1),D=["href"],F=s("span",{class:"skoBlock__sp"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",-1);function L(k,l,o,e,r,i){const n=v;return a(),_("div",j,[s("div",A,[s("h1",null,c(e.title)),s("h2",null,c(e.data.h2),1),s("div",S,[(a(!0),_(u,null,d(e.data.items,(t,p)=>(a(),_("div",{key:p,class:"skoBlock__item"},[s("img",{src:`/img/${t.img}`,alt:""},null,8,w),s("h4",null,c(t.head),1),C,s("a",{target:"blank",href:t.site},c(t.site),9,D),F,(a(!0),_(u,null,d(t.numbers,(h,f)=>(a(),g(n,{key:f,tel:h},null,8,["tel"]))),128))]))),128))])])])}var E=m($,[["render",L]]);export{E as default};
