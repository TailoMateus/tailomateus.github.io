(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{eWDE:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Zttt"),o=a("vrFN"),c=a("0/Pd"),s=a("Wbzz"),l=a("vOnD").b.section.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"sc-1s8a784-0"})(["align-items:center;margin:20px 0;color:#8899a6;text-align:center;padding:1.5rem 3rem;justify-content:space-between;a{color:#8899a6;text-decoration:none;transition:color 0.5s;font-size:18px;margin-right:20px;&:hover{color:#1fa1f2;}}"]),g=function(e){var t=e.isFirst,a=e.isLast,n=e.prevPage,i=e.nextPage;return r.a.createElement(l,null,!t&&r.a.createElement(s.Link,{to:n},"← Prev"),!a&&r.a.createElement(s.Link,{to:i},"Next →"))};a.d(t,"query",(function(){return m}));var m="4276840126";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.pageContext,n=a.currentPage,s=1===n,l=n===a.numPages,m=n-1==1?"/":"/page/"+(n-1),p="/page/"+(n+1);return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home"}),t.map((function(e){var t=e.node,a=t.frontmatter,n=a.image,i=a.titleImage,o=a.date,s=a.description,l=a.title,g=t.timeToRead,m=t.fields.slug;return r.a.createElement(c.a,{slug:m,image:n,titleImage:i,date:o,timeToRead:g,title:l,description:s})})),r.a.createElement(g,{isFirst:s,isLast:l,prevPage:m,nextPage:p}))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-77493454e2ed5a609313.js.map