"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76586],{76586:function(e,t,n){n.r(t);var s=n(85893),r=n(67294),a=n(66043),c=n(41664),l=n.n(c),i=n(82477);t.default=e=>{let[t,n]=(0,r.useState)([]),[c,d]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(0,i.Pq)({serverURL:(0,a.J)("COMMENT_WALINE_SERVER_URL"),count:5}).then(e=>{let{comments:t}=e;d(!1),n(t)})},[]),(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsxs)("div",{children:["Loading...",(0,s.jsx)("i",{className:"ml-2 fas fa-spinner animate-spin"})]}),!c&&t&&0===t.length&&(0,s.jsx)("div",{children:"No Comments"}),!c&&t&&t.length>0&&t.map(e=>(0,s.jsxs)("div",{className:"pb-2",children:[(0,s.jsx)("div",{className:"dark:text-gray-300 text-gray-600 text-xs waline-recent-content wl-content",dangerouslySetInnerHTML:{__html:e.comment}}),(0,s.jsx)("div",{className:"dark:text-gray-400 text-gray-400 font-sans text-sm text-right cursor-pointer hover:text-red-500 hover:underline pt-1",children:(0,s.jsxs)(l(),{href:{pathname:e.url,hash:e.objectId,query:{target:"comment"}},children:["--",e.nick]})})]},e.objectId))]})}}}]);