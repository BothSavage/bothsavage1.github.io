"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62761],{62761:function(e,t,s){s.r(t),s.d(t,{ArticleLock:function(){return ArticleLock}});var i=s(85893),n=s(54110),r=s(67294);let ArticleLock=e=>{let{validPassword:t}=e,{locale:s}=(0,n.O)(),submitPassword=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(s.COMMON.PASSWORD_ERROR,"</div>"))}},a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{a.current.focus()},[]),(0,i.jsx)("div",{id:"article-wrapper",className:"w-full flex justify-center items-center h-96 ",children:(0,i.jsxs)("div",{className:"text-center space-y-3 dark:text-gray-300 text-black",children:[(0,i.jsx)("div",{className:"font-bold",children:s.COMMON.ARTICLE_LOCK_TIPS}),(0,i.jsxs)("div",{className:"flex mx-4",children:[(0,i.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&submitPassword()},ref:a,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 bg-gray-100 dark:bg-gray-500"}),(0,i.jsx)("div",{onClick:submitPassword,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-r duration-300",children:(0,i.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key",children:["\xa0",s.COMMON.SUBMIT]})})]}),(0,i.jsx)("div",{id:"tips"})]})})}}}]);