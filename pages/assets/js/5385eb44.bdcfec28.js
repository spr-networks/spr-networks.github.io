"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[8985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=s,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const o={},i="DNS",a={unversionedId:"services/dns",id:"services/dns",title:"DNS",description:"CoreDNS is an extensible golang dns server. It powers kubernetes and many other services today.",source:"@site/docs/services/dns.md",sourceDirName:"services",slug:"/services/dns",permalink:"/pages/docs/services/dns",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DHCP Client",permalink:"/pages/docs/services/dhcp_client"},next:{title:"Extensions",permalink:"/pages/docs/services/extensions"}},l={},c=[{value:"The DNS Service runs off CoreDNS with custom plugins",id:"the-dns-service-runs-off-coredns-with-custom-plugins",level:3},{value:"DNS Configuration Files:",id:"dns-configuration-files",level:3},{value:"Local Mappings",id:"local-mappings",level:3},{value:"DNS over HTTPS",id:"dns-over-https",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dns"},"DNS"),(0,s.kt)("p",null,"CoreDNS is an extensible golang dns server. It powers kubernetes and many other services today.\nThe server is configured to use DNS over HTTPS upstream for all requests and handles DNS for wireguard and wifi clients. "),(0,s.kt)("h3",{id:"the-dns-service-runs-off-coredns-with-custom-plugins"},"The DNS Service runs off CoreDNS with custom plugins"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/spr-networks/coredns-block"},"Ad Blocking")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/spr-networks/coredns-rebinding_protection"},"DNS Rebinding Protection")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/spr-networks/coredns-jsonlog"},"JSON Log"))),(0,s.kt)("h3",{id:"dns-configuration-files"},"DNS Configuration Files:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/spr-networks/super/blob/main/base/template_configs/dns/Corefile"},"Corefile"))),(0,s.kt)("h3",{id:"local-mappings"},"Local Mappings"),(0,s.kt)("p",null,'CoreDNS is configured to use Local Mappings of names from DHCP. If a device DHCPs\nwith a client name of "test", "test.lan" resolves with the LAN IP address.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"hosts /state/dns/local_mappings {\n  ttl 60\n  reload 30s\n  fallthrough\n}\n")),(0,s.kt)("h3",{id:"dns-over-https"},"DNS over HTTPS"),(0,s.kt)("p",null,"The config for SPR is using DNS over HTTPS by default for all upstream requests."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"dns over https",src:r(3610).Z,width:"1324",height:"740"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/dns"}," \u21e8 View the code")))}u.isMDXComponent=!0},3610:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/spr-dns-over-https-d331bec246bb1c72584d251e64faccc9.png"}}]);