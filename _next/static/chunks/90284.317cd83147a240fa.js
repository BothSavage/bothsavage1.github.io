"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90284],{90284:function(_,e,t){t.r(e);var T=t(85893),i=t(66043),a=t(22006),E=t(67294);e.default=_=>{let{frontMatter:e}=_,t=(0,i.J)("COMMENT_GITALK_CSS_CDN_URL"),M=(0,i.J)("COMMENT_GITALK_JS_CDN_URL"),n=(0,i.J)("COMMENT_GITALK_CLIENT_ID"),C=(0,i.J)("COMMENT_GITALK_CLIENT_SECRET"),N=(0,i.J)("COMMENT_GITALK_REPO"),l=(0,i.J)("COMMENT_GITALK_OWNER"),I=(0,i.J)("COMMENT_GITALK_ADMIN").split(","),r=(0,i.J)("COMMENT_GITALK_DISTRACTION_FREE_MODE"),loadGitalk=async()=>{await (0,a.TY)(t,"css"),await (0,a.TY)(M,"js");let _=window.Gitalk,T=new _({clientID:n,clientSecret:C,repo:N,owner:l,admin:I,id:e.id,distractionFreeMode:r});T.render("gitalk-container")};return(0,E.useEffect)(()=>{loadGitalk()},[]),(0,T.jsx)("div",{id:"gitalk-container"})}}}]);