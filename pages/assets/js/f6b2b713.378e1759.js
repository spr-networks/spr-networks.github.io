"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6967],{5005:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(85893),i=t(11151);const a={},o="WiFi Mesh Support",r={id:"guides_plus/mesh",title:"WiFi Mesh Support",description:"Today Mesh support has been tested primarily with wired backhaul.",source:"@site/docs/guides_plus/mesh.md",sourceDirName:"guides_plus",slug:"/guides_plus/mesh",permalink:"/pages/docs/guides_plus/mesh",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pages/docs/guides_plus/plus"},next:{title:"MITMProxy with PFW",permalink:"/pages/docs/guides_plus/mitmproxy"}},d={},l=[{value:"Install",id:"install",level:2},{value:"Additional Tips",id:"additional-tips",level:2},{value:"VLAN Tags and Mesh Node APs",id:"vlan-tags-and-mesh-node-aps",level:3}];function h(e){const s={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"wifi-mesh-support",children:"WiFi Mesh Support"})}),"\n",(0,n.jsx)(s.p,{children:"Today Mesh support has been tested primarily with wired backhaul.\nSPR does not use 802.11s mesh networking for wireless backhaul but may do so in a future release"}),"\n",(0,n.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(s.p,{children:"To get started, install SPR on your mesh device, and enable PLUS and the Mesh plugin."}),"\n",(0,n.jsx)(s.p,{children:"Next, visit the Mesh page and generate a mesh downhual token."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"plus-mesh",src:t(18966).Z+"",width:"2664",height:"1082"})}),"\n",(0,n.jsx)(s.p,{children:"Copy the generated token, and then navigate back to the main SPR router."}),"\n",(0,n.jsx)(s.p,{children:"Select the IP of the mesh router, and configure it with the key."}),"\n",(0,n.jsx)(s.h2,{id:"additional-tips",children:"Additional Tips"}),"\n",(0,n.jsx)(s.p,{children:"For security, you need to register an OTP code on both devices during setup.\nThe OTP codes provide safeguards against potential abuse of the token system that the mesh setup uses."}),"\n",(0,n.jsx)(s.p,{children:"When you're done setting up the nodes, a button exists to sync OTP codes across your mesh devices."}),"\n",(0,n.jsx)(s.h3,{id:"vlan-tags-and-mesh-node-aps",children:"VLAN Tags and Mesh Node APs"}),"\n",(0,n.jsx)(s.p,{children:"If your Mesh Node AP has a VLAN Tag applied, it will not be able to correctly bridge traffic.\nThe SPR UI will warn if a VLAN Tag is set and ask you to remove it if a device should be configured as a mesh node.\nSimilarly, the SPR UI will also warn if assigning a VLAN Tag to a known mesh device."})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},18966:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/plus-mesh-326e8701fe3ffb66a80b53a0a6532917.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(67294);const i={},a=n.createContext(i);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);