import{S as t,i as n,s as o,z as s}from"../chunks/vendor-3751e217.js";import{g as i}from"../chunks/navigation-20968cc5.js";import{b as e}from"../chunks/paths-45dac81d.js";import"../chunks/singletons-bb9012b7.js";function a(t){var n=this&&this.__awaiter||function(t,n,o,s){return new(o||(o=Promise))((function(i,e){function a(t){try{r(s.next(t))}catch(n){e(n)}}function c(t){try{r(s.throw(t))}catch(n){e(n)}}function r(t){var n;t.done?i(t.value):(n=t.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,c)}r((s=s.apply(t,n||[])).next())}))};return s((()=>n(void 0,void 0,void 0,(function*(){const t=window.location.hash.split("/");let n="edit";t.length>2&&(n=`${t[1]}#${t[2]}`),yield i(`${e}/${n}`,{replaceState:!0})})))),[]}export default class extends t{constructor(t){super(),n(this,t,a,null,o,{})}}
