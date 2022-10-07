"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[88],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(r),f=o,d=g["".concat(u,".").concat(f)]||g[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1014:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={slug:"bypassing guest isolation",title:"Bypassing Guest Isolation",authors:"ltsrad",tags:["SPR","Routers","Networking 101","guest wifi","escape"]},u=void 0,l={permalink:"/pages/blog/bypassing guest isolation",source:"@site/blog/2022-09-05-guest-isolation-bypass.md",title:"Bypassing Guest Isolation",description:"Escaping a Guest WiFi Network Using One Weird Trick - Routing",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Routers",permalink:"/pages/blog/tags/routers"},{label:"Networking 101",permalink:"/pages/blog/tags/networking-101"},{label:"guest wifi",permalink:"/pages/blog/tags/guest-wifi"},{label:"escape",permalink:"/pages/blog/tags/escape"}],readingTime:.225,truncated:!1,authors:[{name:"Alex Radocea",title:"Founder",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"bypassing guest isolation",title:"Bypassing Guest Isolation",authors:"ltsrad",tags:["SPR","Routers","Networking 101","guest wifi","escape"]},prevItem:{title:"SPR in the cloud",permalink:"/pages/blog/virtual SPR"},nextItem:{title:"Securely Chaining Routers",permalink:"/pages/blog/secure router chaining"}},c={authorsImageUrls:[void 0]},p=[{value:"Escaping a Guest WiFi Network Using One Weird Trick - Routing",id:"escaping-a-guest-wifi-network-using-one-weird-trick---routing",level:2},{value:"Proof of concept",id:"proof-of-concept",level:3}],g={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"escaping-a-guest-wifi-network-using-one-weird-trick---routing"},"Escaping a Guest WiFi Network Using One Weird Trick - Routing"),(0,i.kt)("p",null,"Routers have one job. Routing packets. That is what they are best at.\nAnd that's it. That's the guest network bypass."),(0,i.kt)("h3",{id:"proof-of-concept"},"Proof of concept"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ip route add 192.168.1.2 via 192.168.1.1\n")))}f.isMDXComponent=!0}}]);