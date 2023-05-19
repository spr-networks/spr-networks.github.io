"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[2964],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"barely-ap",title:"Barely AP is Almost an Access Point",authors:"ltsrad",tags:["Python","Scapy","WiFi"]},c=void 0,s={permalink:"/pages/blog/barely-ap",source:"@site/blog/2023-05-11-barely-ap.md",title:"Barely AP is Almost an Access Point",description:"Introducing Barely AP",date:"2023-05-11T00:00:00.000Z",formattedDate:"May 11, 2023",tags:[{label:"Python",permalink:"/pages/blog/tags/python"},{label:"Scapy",permalink:"/pages/blog/tags/scapy"},{label:"WiFi",permalink:"/pages/blog/tags/wi-fi"}],readingTime:.675,truncated:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"barely-ap",title:"Barely AP is Almost an Access Point",authors:"ltsrad",tags:["Python","Scapy","WiFi"]},nextItem:{title:"March 2023's Turtles Challenge",permalink:"/pages/blog/spr-turtles-march"}},p={authorsImageUrls:[void 0]},u=[{value:"Introducing Barely AP",id:"introducing-barely-ap",level:2},{value:"What",id:"what",level:3},{value:"Note",id:"note",level:3},{value:"Usage:",id:"usage",level:3}],d={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introducing-barely-ap"},"Introducing Barely AP"),(0,o.kt)("p",null,"We've ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/barely-ap"},"published barely an implementation of a WiFi 802.11 Access Point, using Scapy")," to teach people about WiFi authentication."),(0,o.kt)("h3",{id:"what"},"What"),(0,o.kt)("p",null,"On Linux, this code lets you spin up a python access point over monitor mode.  It implements features like handling probe requests, authentication, association, and reassociation, and encryption and decryption of data using CCMP (Counter Mode Cipher Block Chaining Message Authentication Code Protocol)."),(0,o.kt)("h3",{id:"note"},"Note"),(0,o.kt)("p",null,"This code just barely gets the job done -- it should NOT be used as a reference for writing production code. It has NO protocol security, as it is not security robust despite performing authenticated CCMP encryption."),(0,o.kt)("h3",{id:"usage"},"Usage:"),(0,o.kt)("p",null,"Building & running "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./build.sh\n./setup.sh\n")),(0,o.kt)("p",null,"Inspect IP traffic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ndocker exec -it barely-ap tcpdump -i scapyap\ndocker exec -it barely-sta tcpdump -i wlan1\n")))}y.isMDXComponent=!0}}]);