"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59206],{59206:function(e,n,r){r.r(n),r.d(n,{default:function(){return WordCount}});var t=r(85893),a=r(54110),s=r(67294);function WordCount(){let{locale:e}=(0,a.O)();return(0,s.useEffect)(()=>{(function(){var e,n;let r=(n=null===(e=document.getElementById("notion-article"))||void 0===e?void 0:e.innerHTML)?n=n.replace(/<[^>]+>|&[^>]+;/g,"").trim():"",t=function(e){if(!e)return 0;let n=0;try{n=(e=(e=(e=(e=e.replace(/(\r\n+|\s+|　+)/g,"龘")).replace(/[\x00-\xff]/g,"m")).replace(/m+/g,"*")).replace(/龘+/g,"")).length}catch(e){}return n}(r);document.getElementById("wordCount").innerHTML=t,document.getElementById("readTime").innerHTML=Math.floor(t/400)+1;let a=document.getElementById("wordCountWrapper");a.classList.remove("hidden")})()}),(0,t.jsxs)("span",{id:"wordCountWrapper",className:"flex gap-3 font-light",children:[(0,t.jsxs)("span",{className:"flex whitespace-nowrap items-center",children:[(0,t.jsx)("i",{className:"pl-1 pr-2 fas fa-file-word"}),(0,t.jsx)("span",{children:e.COMMON.WORD_COUNT}),"\xa0",(0,t.jsx)("span",{id:"wordCount",children:"0"})]}),(0,t.jsxs)("span",{className:"flex whitespace-nowrap items-center",children:[(0,t.jsx)("i",{className:"mr-1 fas fa-clock"}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{id:"readTime",children:"0"}),"\xa0",e.COMMON.MINUTE]})]})}}}]);