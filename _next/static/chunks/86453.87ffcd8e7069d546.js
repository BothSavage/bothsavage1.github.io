"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86453],{86453:function(e,r,l){l.r(r);var a=l(85893),i=l(11163),s=l(67294);r.default=e=>{let{children:r,isOpen:l,onOpen:d,onClose:t,className:n}=e,c=(0,i.useRouter)();(0,s.useEffect)(()=>{let sideBarDrawerRouteListener=()=>{switchSideDrawerVisible(!1)};return c.events.on("routeChangeComplete",sideBarDrawerRouteListener),()=>{c.events.off("routeChangeComplete",sideBarDrawerRouteListener)}},[c.events]);let switchSideDrawerVisible=e=>{e?d&&d():t&&t();let r=window.document.getElementById("sidebar-drawer"),l=window.document.getElementById("sidebar-drawer-background");e?(null==r||r.classList.replace("-mr-72","mr-0"),null==l||l.classList.replace("hidden","block")):(null==r||r.classList.replace("mr-0","-mr-72"),null==l||l.classList.replace("block","hidden"))};return(0,a.jsxs)("div",{id:"sidebar-wrapper",className:" block lg:hidden top-0 "+n,children:[(0,a.jsx)("div",{id:"sidebar-drawer",className:"".concat(l?"mr-0 w-72 visible":"-mr-72 max-w-side invisible"," bg-gray-50 right-0 top-0 dark:bg-hexo-black-gray shadow-black shadow-lg flex flex-col duration-300 fixed h-full overflow-y-scroll scroll-hidden z-30"),children:r}),(0,a.jsx)("div",{id:"sidebar-drawer-background",onClick:()=>{switchSideDrawerVisible(!1)},className:"".concat(l?"block":"hidden"," animate__animated animate__fadeIn fixed top-0 duration-300 left-0 z-20 w-full h-full bg-black/70")})]})}}}]);