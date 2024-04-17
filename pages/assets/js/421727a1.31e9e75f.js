"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[8921],{69860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(85893),i=n(11151);const r={sidebar_position:11},a="Alerts",o={id:"guides/alerts",title:"Alerts",description:"Overview",source:"@site/docs/guides/alerts.md",sourceDirName:"guides",slug:"/guides/alerts",permalink:"/pages/docs/guides/alerts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Logs and Events",permalink:"/pages/docs/guides/logs"},next:{title:"Docker Tips & Tricks",permalink:"/pages/docs/guides/development/docker-dev"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Viewing &amp; Resolving Alerts",id:"viewing--resolving-alerts",level:2},{value:"Defining Custom Alerts",id:"defining-custom-alerts",level:2},{value:"Event Templating",id:"event-templating",level:3},{value:"Decorators",id:"decorators",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"alerts",children:"Alerts"}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Built into SPR is an alerting mechanism. When an event arrives that matches an alert\nconfiguration, an alert can be presented as a Notification or stored into the Event Database\nas an alert to be resolved at a later time."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alerts-overview",src:n(54185).Z+"",width:"2806",height:"1638"})}),"\n",(0,s.jsx)(t.h2,{id:"viewing--resolving-alerts",children:"Viewing & Resolving Alerts"}),"\n",(0,s.jsxs)(t.p,{children:["To see alerts stored in the database head over to the ",(0,s.jsx)(t.code,{children:"Alerts"})," page."]}),"\n",(0,s.jsxs)(t.p,{children:["Alerts have a 'State' variable which is currently one of ",(0,s.jsx)(t.code,{children:"New"})," or ",(0,s.jsx)(t.code,{children:"Resolved"}),". Click the resolve or resolve all buttons to move\nalert events to the Triaged state."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alerts-resolve",src:n(41997).Z+"",width:"2852",height:"1652"})}),"\n",(0,s.jsx)(t.h2,{id:"defining-custom-alerts",children:"Defining Custom Alerts"}),"\n",(0,s.jsx)(t.p,{children:"The alert rules are a little bit complicated seeming at first but they are flexible\nand configurable."}),"\n",(0,s.jsxs)(t.p,{children:["Alerts match an Event Prefix. In the example below, these are ",(0,s.jsx)(t.code,{children:"nft:drop:mac"})," events.\nWe optionally copy the event fields into the alert that will be stored."]}),"\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.code,{children:"Add Condition Filter +"})," to create field requirements  beyond the event topic prefix.\nIf 'Match All' is set, then all conditions must match, otherwise just one. The conditions can also be logically inverted.\nIn the screenshot, we add a condition that the UDP Source Port should be 42 to create the alert. This is a nonsensical requirement\nto demonstrate the feature."]}),"\n",(0,s.jsxs)(t.p,{children:["The syntax used for the event matchings uses JSONPath. See ",(0,s.jsx)(t.a,{href:"https://jsonpath.com/",children:"https://jsonpath.com/"})," for details."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alerts-custom",src:n(59459).Z+"",width:"2826",height:"2014"})}),"\n",(0,s.jsx)(t.h3,{id:"event-templating",children:"Event Templating"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to custom event matches, alert titles and bodies can be written as templates for what to render in the frontend.\nIn general, take the field to display and wrap it in curly brackets, for example: ",(0,s.jsx)(t.code,{children:"{{Ethernet.SrcMAC}}"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"decorators",children:"Decorators"}),"\n",(0,s.jsxs)(t.p,{children:["The event template also supports decorators. The following are supported: ",(0,s.jsx)(t.code,{children:"Device"}),", ",(0,s.jsx)(t.code,{children:"DeviceIcon"}),", ",(0,s.jsx)(t.code,{children:"DeviceName"}),", ",(0,s.jsx)(t.code,{children:"DeviceIP"}),", ",(0,s.jsx)(t.code,{children:"DeviceMAC"}),'.\nTo apply a decorator follow up a field name with "#Decorator". This allows converting a MAC address to a device\'s known IP for example,\nor rendering the assigned device icon for that device.']}),"\n",(0,s.jsxs)(t.p,{children:["Here is an example template with decorators:\n",(0,s.jsx)(t.code,{children:"MAC IP Violation {{IP.SrcIP#Device}} {{IP.SrcIP}} {{Ethernet.SrcMAC}} to {{IP.DstIP}} {{Ethernet.DstMAC}}"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},59459:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/alert-custom-5193040408fcedefce9a3c9d82bea448.png"},54185:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/alerts-overview-56a12de61748d397aa699ebbd74bc063.png"},41997:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/alerts-resolve-48b54709b09d7bc8dcb76a046babdcd9.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);