import{r,o as l,c as o,a as g,f as m,t as c,u,d as y}from"./index.15685115.js";const h={class:"inline-block whitespace-pre-wrap"},x={key:0,class:"-ml-1"},k={__name:"Typing",props:{text:{type:String,default:""},speed:{type:Number,default:100},cursor:{type:String,default:"|"},delay:{type:Number,default:0}},emits:["waiting","typing","done"],setup(i,{emit:t}){const e=i;let p=0,s=0,a=r(!1),n=r("");setTimeout(d,e.delay),t("waiting");function d(){a.value=!0,s=setInterval(f,e.speed),t("typing")}function f(){n.value=e.text.slice(0,p++),n.value.length>=e.text.length&&_()}function _(){a.value=!1,clearInterval(s),t("done")}return(v,w)=>(l(),o("span",null,[g("span",h,[m(c(u(n))+" ",1),u(a)?(l(),o("span",x,c(e.cursor),1)):y("",!0)])]))}};export{k as _};
