"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41352],{41352:function(e,t,n){n.r(t),n.d(t,{MenuItemCollapse:function(){return MenuItemCollapse}});var s=n(85893),l=n(41766),a=n(41664),i=n.n(a),r=n(11163),o=n(67294);let MenuItemCollapse=e=>{var t,n;let{link:a}=e,[c,d]=(0,o.useState)(!1),u=(null==a?void 0:null===(t=a.subMenus)||void 0===t?void 0:t.length)>0,h=(0,r.useRouter)(),[x,f]=(0,o.useState)(!1);if(!a||!a.show)return null;let m=h.pathname===a.to||h.asPath===a.to;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{onClick:()=>{d(!c)},className:"py-2 px-5 duration-300 text-base justify-between hover:bg-indigo-700 hover:text-white hover:shadow-lg cursor-pointer font-light flex flex-nowrap items-center "+(m?"bg-indigo-500 text-white ":" text-black dark:text-white "),children:[!u&&(0,s.jsxs)(i(),{href:null==a?void 0:a.to,target:(null==a?void 0:null===(n=a.to)||void 0===n?void 0:n.indexOf("http"))===0?"_blank":"_self",children:[(0,s.jsxs)("div",{className:"my-auto items-center justify-between flex ",children:[a.icon&&(0,s.jsx)("i",{className:"".concat(a.icon," w-4 mr-6 text-center")}),(0,s.jsx)("div",{children:a.name})]}),a.slot]}),u&&(0,s.jsxs)("div",{onClick:u?()=>{f(!x)}:null,className:"my-auto items-center w-full justify-between flex ",children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("i",{className:"".concat(a.icon," w-4 mr-6 text-center")}),null==a?void 0:a.name]}),(0,s.jsx)("i",{className:"px-2 fas fa-chevron-left transition-all duration-200 ".concat(x?"-rotate-90":"")})]})]}),u&&(0,s.jsx)(l.Z,{isOpen:x,children:a.subMenus.map((e,t)=>{var n;return(0,s.jsx)("div",{className:"cursor-pointer whitespace-nowrap dark:text-gray-200  w-full font-extralight dark:bg-black text-left px-5 justify-start bg-gray-100  hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-900 tracking-widest transition-all duration-200 border-b dark:border-gray-800 py-3 pr-6",children:(0,s.jsx)(i(),{href:e.to,target:(null==a?void 0:null===(n=a.to)||void 0===n?void 0:n.indexOf("http"))===0?"_blank":"_self",children:(0,s.jsxs)("span",{className:"text-sm",children:[(0,s.jsx)("i",{className:"".concat(e.icon," w-4 mr-3 text-center")}),e.title]})})},t)})})]})}}}]);