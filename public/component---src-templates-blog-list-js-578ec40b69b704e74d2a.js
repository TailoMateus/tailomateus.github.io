(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{eWDE:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("Zttt"),o=n("vrFN"),c=(n("OG14"),n("vOnD")),l=n("ibEc"),s=n("kOA+"),m=n.n(s);function d(){var e=g(["\n    height: auto;\n  "]);return d=function(){return e},e}function p(){var e=g(["\n    width: ",";\n  "]);return p=function(){return e},e}function u(){var e=g(["\n    width: ",";\n  "]);return u=function(){return e},e}function g(e,t){return t||(t=e.slice(0)),e.raw=t,e}var f=Object(c.c)(m.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1w5cmwb-0"})(["color:#8899a6;display:inline-block;width:",";padding:20px;margin:1%;box-sizing:border-box;border:1px solid #eee;text-decoration:none;vertical-align:top;&:hover{color:#1fa1f2;}"," ",""],(function(e){return e.search?"100%":"31%"}),l.a.lessThan("medium")(u(),(function(e){return e.search?"100%":"48%"})),l.a.lessThan("small")(p(),(function(e){return e.search?"100%":"97%"}))),h=c.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1w5cmwb-1"})(["align-items:center;display:inline-block;width:100%;"]),w=c.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1w5cmwb-2"})(["display:inline-block;"]),v=c.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-1w5cmwb-3"})(["font-size:0.9rem;margin-top:15px;display:inline-block;"]),b=c.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1w5cmwb-4"})(["font-size:1.5rem;font-weight:700;margin:20px 0;height:48px;line-height:24px;overflow:hidden;"]),y=c.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-1w5cmwb-5"})(["font-size:1.2rem;font-weight:300;line-height:23px;height:46px;overflow:hidden;"]),x=c.c.div.withConfig({displayName:"styled__GroupImage",componentId:"sc-1w5cmwb-6"})(["height:150px;overflow:hidden;",""],l.a.lessThan("medium")(d())),I=function(e){var t=e.slug,n=e.image,i=e.titleImage,r=e.date,o=e.timeToRead,c=e.title,l=e.description,s=e.search;return a.a.createElement(f,{to:t,search:s,cover:!0,direction:"right",bg:"#fff",duration:.6},a.a.createElement(h,null,a.a.createElement(x,null,a.a.createElement("img",{width:"100%",src:n,alt:i})),a.a.createElement(w,null,a.a.createElement(v,null,r," • ",1==o?o+" minute":(o||3)+" minutes"," to read"),a.a.createElement(b,null,c),a.a.createElement(y,null,l))))},E=c.c.section.withConfig({displayName:"styled__PaginationWrapper",componentId:"yo2rsq-0"})(["align-items:center;margin:20px 0;text-align:center;padding:1.5rem 3rem;justify-content:space-between;a{text-decoration:none;transition:color 0.5s;font-size:18px;margin-right:20px;&:hover{color:#1fa1f2;}}"]),_=function(e){var t=e.isFirst,n=e.isLast,i=e.prevPage,r=e.nextPage;return a.a.createElement(E,null,!t&&a.a.createElement(m.a,{to:i,cover:!0,direction:"left",bg:"#fff",duration:.6},"← Prev"),!n&&a.a.createElement(m.a,{to:r,cover:!0,direction:"right",bg:"#fff",duration:.6},"Next →"))};n.d(t,"query",(function(){return P}));var P="4276840126";t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=e.pageContext,i=n.currentPage,c=1===i,l=i===n.numPages,s=i-1==1?"/":"/page/"+(i-1),m="/page/"+(i+1);return a.a.createElement(r.a,null,a.a.createElement(o.a,{title:"Home"}),t.map((function(e){var t=e.node,n=t.frontmatter,i=n.image,r=n.titleImage,o=n.date,c=n.description,l=n.title,s=t.timeToRead,m=t.fields.slug;return a.a.createElement(I,{slug:m,image:i,titleImage:r,date:o,timeToRead:s,title:l,description:c,search:!1})})),a.a.createElement(_,{isFirst:c,isLast:l,prevPage:s,nextPage:m}))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-578ec40b69b704e74d2a.js.map