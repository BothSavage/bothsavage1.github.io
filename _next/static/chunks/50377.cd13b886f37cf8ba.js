"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50377],{50377:function(e,l,t){t.r(l),t.d(l,{BlogListScroll:function(){return BlogListScroll}});var s=t(85893),r=t(54110),n=t(41664),a=t.n(n),c=t(67294),i=t(93096),d=t.n(i),o=t(66043);let BlogListScroll=e=>{let{posts:l}=e,{locale:t}=(0,r.O)(),[n,i]=(0,c.useState)(1),m=!1,u=l?Object.assign(l).slice(0,parseInt((0,o.J)("POSTS_PER_PAGE"))*n):[];if(l){let e=l.length;m=n*parseInt((0,o.J)("POSTS_PER_PAGE"))<e}let handleGetMore=()=>{m&&i(n+1)},h=(0,c.useRef)(null),x=(0,c.useCallback)(d()(()=>{let e=window.scrollY+window.outerHeight,l=h&&h.current?h.current.clientHeight:0;e>l+100&&handleGetMore()},500));return(0,c.useEffect)(()=>(window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)})),(0,s.jsxs)("div",{id:"posts-wrapper",className:"w-full md:pr-12 mb-12",ref:h,children:[u.map(e=>{var l;return(0,s.jsxs)("article",{className:"mb-12",children:[(0,s.jsx)("h2",{className:"mb-4",children:(0,s.jsx)(a(),{href:"/".concat(e.slug),className:"text-black text-xl md:text-2xl no-underline hover:underline",children:e.title})}),(0,s.jsxs)("div",{className:"mb-4 text-sm text-gray-700",children:["by ",(0,s.jsx)("a",{href:"#",className:"text-gray-700",children:(0,o.J)("AUTHOR")})," on ",(null===(l=e.date)||void 0===l?void 0:l.start_date)||e.createdTime,(0,s.jsx)("span",{className:"font-bold mx-1",children:" | "}),(0,s.jsx)("a",{href:"#",className:"text-gray-700",children:e.category}),(0,s.jsx)("span",{className:"font-bold mx-1",children:" | "})]}),(0,s.jsx)("p",{className:"text-gray-700 leading-normal",children:e.summary})]},e.id)}),(0,s.jsxs)("div",{onClick:handleGetMore,className:"w-full my-4 py-4 text-center cursor-pointer ",children:[" ",m?t.COMMON.MORE:"".concat(t.COMMON.NO_MORE," \uD83D\uDE30")," "]})]})}}}]);