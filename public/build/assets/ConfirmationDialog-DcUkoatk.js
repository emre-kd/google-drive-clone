import{_ as c,a as r}from"./SecondaryButton-DkfOyd5y.js";import{D as f}from"./DangerButton-BJoHs5xd.js";import{o as d,c as _,w as t,b as e,t as p,a as n,d as i}from"./app-B-nztPtg.js";const u={class:"p-6"},x=e("h2",{class:"text-2xl mb-2 font-semibold"},"Please Confirm",-1),h={class:"mt-6 flex justify-end"},k={__name:"ConfirmationDialog",props:{show:Boolean,message:String},emits:["cancel","confirm"],setup(o,{emit:m}){const a=m;return(w,s)=>(d(),_(r,{show:o.show,"max-width":"md"},{default:t(()=>[e("div",u,[x,e("p",null,p(o.message),1),e("div",h,[n(c,{onClick:s[0]||(s[0]=l=>a("cancel"))},{default:t(()=>[i("Cancel")]),_:1}),n(f,{class:"ml-3",onClick:s[1]||(s[1]=l=>a("confirm"))},{default:t(()=>[i(" Confirm ")]),_:1})])])]),_:1},8,["show"]))}};export{k as _};