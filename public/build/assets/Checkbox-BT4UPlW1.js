import{h as n,v as d,y as l,o as i,f as p}from"./app-B-nztPtg.js";const h=["value"],k={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(e,{emit:a}){const r=a,s=e,t=n({get(){return s.checked},set(o){r("update:checked",o)}});return(o,c)=>d((i(),p("input",{type:"checkbox",value:e.value,"onUpdate:modelValue":c[0]||(c[0]=u=>t.value=u),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,h)),[[l,t.value]])}};export{k as _};
