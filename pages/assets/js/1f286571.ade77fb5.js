"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6644],{58122:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(85893),r=s(11151);const t={},a="Base",o={id:"development/services/base",title:"Base",description:"The base service establishes the SPR system configuration and initializes the firewall.",source:"@site/docs/development/services/base.md",sourceDirName:"development/services",slug:"/development/services/base",permalink:"/pages/docs/development/services/base",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugin Development",permalink:"/pages/docs/development/plugin-dev"},next:{title:"Database",permalink:"/pages/docs/development/services/db"}},l={},c=[{value:"Firewall Configuration",id:"firewall-configuration",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"base",children:"Base"})}),"\n",(0,i.jsx)(n.p,{children:"The base service establishes the SPR system configuration and initializes the firewall.\nIt also configures performance tuning parameters for managing irq balancing."}),"\n",(0,i.jsxs)(n.p,{children:["The main configuration variables are found in ",(0,i.jsx)(n.a,{href:"https://github.com/spr-networks/super/blob/main/base/template_configs/base/config.sh",children:"config/base/config.sh"})]}),"\n",(0,i.jsx)(n.h4,{id:"firewall-configuration",children:"Firewall Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The firewall uses NFTable rulesets defined in ",(0,i.jsx)(n.a,{href:"https://github.com/spr-networks/super/blob/main/base/scripts/nft_rules.sh",children:"base/scripts/nft_rules.sh"})]}),"\n",(0,i.jsx)(n.p,{children:"The forwarding and input policies are default drop."}),"\n",(0,i.jsxs)(n.p,{children:["The following ports can be exposed to WAN by enabling UPSTREAM_SERVICES_ENABLE in ",(0,i.jsx)(n.code,{children:"configs/base/config.sh"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"sshd (tcp 22),"}),"\n",(0,i.jsx)(n.li,{children:"api (port 80 or 443 with SSL),"}),"\n",(0,i.jsx)(n.li,{children:"iperf3 (tcp 5201)"}),"\n",(0,i.jsx)(n.li,{children:"wireguard (udp 51280)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"OR by updating them in the UI under the Firewall settings."}),"\n",(0,i.jsx)(n.p,{children:"On LAN the following services are available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DHCP tied to the authenticated MAC address over WiFi or all wired LAN devices"}),"\n",(0,i.jsx)(n.li,{children:"DNS for devices in the dns_access group"}),"\n",(0,i.jsx)(n.li,{children:"1900, 5353 multicast repeater to all devices for SSDP and MDNS"}),"\n",(0,i.jsx)(n.li,{children:"The API (port 80, 443)"}),"\n",(0,i.jsx)(n.li,{children:"SSH (tcp port 22)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Routing to devices on the LAN or to WAN only happens for authenticated, approved MAC addresses."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/spr-networks/super/tree/main/base",children:" \u21e8 View the code"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(67294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);