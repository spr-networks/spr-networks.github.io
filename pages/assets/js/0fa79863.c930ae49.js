"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[7027],{2363:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(85893),t=s(11151);const i={slug:"virtual-spr-on-a-gcloud-tier-free-instance",title:"Run Virtual SPR on a Google Cloud Free Tier Instance",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard","Google Cloud"]},l=void 0,o={permalink:"/pages/blog/virtual-spr-on-a-gcloud-tier-free-instance",source:"@site/blog/2022-10-13-virtual-spr-gcloud.md",title:"Run Virtual SPR on a Google Cloud Free Tier Instance",description:"Introduction",date:"2022-10-13T00:00:00.000Z",formattedDate:"October 13, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"Virtual",permalink:"/pages/blog/tags/virtual"},{label:"Cloud",permalink:"/pages/blog/tags/cloud"},{label:"VPN",permalink:"/pages/blog/tags/vpn"},{label:"WireGuard",permalink:"/pages/blog/tags/wire-guard"},{label:"Google Cloud",permalink:"/pages/blog/tags/google-cloud"}],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"Philip Olausson",url:"https://twitter.com/capslcc",key:"ltspo"}],frontMatter:{slug:"virtual-spr-on-a-gcloud-tier-free-instance",title:"Run Virtual SPR on a Google Cloud Free Tier Instance",authors:"ltspo",tags:["SPR","Virtual","Cloud","VPN","WireGuard","Google Cloud"]},unlisted:!1,prevItem:{title:"January 2023's Turtles Challenge",permalink:"/pages/blog/january-2023-turtles"},nextItem:{title:"Run Virtual SPR on a AWS Micro Tier Instance",permalink:"/pages/blog/virtual-spr-on-a-aws-micro-tier-instance"}},a={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup Account",id:"setup-account",level:2},{value:"Create Instance",id:"create-instance",level:2},{value:"Firewall rules for VPN access",id:"firewall-rules-for-vpn-access",level:2},{value:"Access instance &amp; install SPR",id:"access-instance--install-spr",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["This guide shows how to setup a new E2 instance in Google Cloud, allow VPN access in firewall and install Virtual SPR.\nThe result is a private VPN with a custom DNS server able to block ads, log traffic, and more ",(0,r.jsx)(n.a,{href:"/docs/intro#the-service-listing",children:"features"})," included in SPR."]}),"\n",(0,r.jsxs)(n.p,{children:["For a more general and in-depth guide see the ",(0,r.jsx)(n.a,{href:"/blog/virtual%20SPR",children:"Virtual SPR Guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"setup-account",children:"Setup Account"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#create-instance",children:"Skip"})," this section if you already have an Google Cloud account & a project setup."]}),"\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://cloud.google.com",children:"Google Cloud"})," & sign in with a Google account, or create a new one and enable Google Cloud.\nGoogle have a ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/free/",children:"Free Tier"})," where you get $300 in free credits when signing up as a new customer.\nContinue by creating a Payment Profile."]}),"\n",(0,r.jsxs)(n.p,{children:["When done click ",(0,r.jsx)(n.strong,{children:"New Project"})," in the top menu dropdown and pick a name for your project."]}),"\n",(0,r.jsx)(n.h2,{id:"create-instance",children:"Create Instance"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(90370).Z+"",width:"2373",height:"1568"})}),"\n",(0,r.jsxs)(n.p,{children:["In the top navigation menu go to ",(0,r.jsx)(n.strong,{children:"Compute Engine"})," and click ",(0,r.jsx)(n.strong,{children:"VM Instances"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Enable"})," if you haven't used the service before. If promped to create a project, pick a name for it & click ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Create Instance"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(97802).Z+"",width:"1958",height:"1626"})}),"\n",(0,r.jsx)(n.p,{children:"Select a name for your instance & pick a region."}),"\n",(0,r.jsxs)(n.p,{children:["For Series go with E2 and ",(0,r.jsx)(n.em,{children:"Machine type"})," for the least expensive alternative."]}),"\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.em,{children:"Boot disk"})," click ",(0,r.jsx)(n.strong,{children:"Change"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(79149).Z+"",width:"2123",height:"1246"})}),"\n",(0,r.jsx)(n.p,{children:"Select and save:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Operating System ",(0,r.jsx)(n.strong,{children:"Ubuntu"})]}),"\n",(0,r.jsxs)(n.li,{children:["Version ",(0,r.jsx)(n.strong,{children:"Ubuntu 22.04 LTS"})," ",(0,r.jsx)(n.em,{children:"x86/64"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Expand ",(0,r.jsx)(n.em,{children:"Advanced options"}),", then ",(0,r.jsx)(n.em,{children:"Networking"}),", scroll down to ",(0,r.jsx)(n.em,{children:"Network interfaces"})," and click ",(0,r.jsx)(n.strong,{children:"default"}),".\nSelect ",(0,r.jsx)(n.em,{children:"External IPv4 address"})," and click ",(0,r.jsx)(n.strong,{children:"Create IP address"})," to assign a static IP address for your instance."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(86725).Z+"",width:"2030",height:"1646"})}),"\n",(0,r.jsxs)(n.p,{children:["The default settings is fine for the other options.\nNow click ",(0,r.jsx)(n.strong,{children:"Create"})," to boot up the instance."]}),"\n",(0,r.jsx)(n.h2,{id:"firewall-rules-for-vpn-access",children:"Firewall rules for VPN access"}),"\n",(0,r.jsxs)(n.p,{children:["In the navigation go to ",(0,r.jsx)(n.strong,{children:"VPC Network"})," and click ",(0,r.jsx)(n.strong,{children:"Firewall"}),". Click ",(0,r.jsx)(n.strong,{children:"Create Firewall Rule"})," at the top of the page."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(55777).Z+"",width:"1778",height:"1610"})}),"\n",(0,r.jsx)(n.p,{children:"Settings in screenshot:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Name ",(0,r.jsx)(n.strong,{children:"allow-wireguard"})]}),"\n",(0,r.jsxs)(n.li,{children:["Diretion of Traffic ",(0,r.jsx)(n.strong,{children:"ingress"})]}),"\n",(0,r.jsxs)(n.li,{children:["Network ",(0,r.jsx)(n.strong,{children:"default"})]}),"\n",(0,r.jsxs)(n.li,{children:["Targets ",(0,r.jsx)(n.strong,{children:"All instances in the network"})," ",(0,r.jsx)(n.em,{children:"all is fine, specify a target if you run more instances"})]}),"\n",(0,r.jsxs)(n.li,{children:["Source Filter ",(0,r.jsx)(n.strong,{children:"IP ranges"})]}),"\n",(0,r.jsxs)(n.li,{children:["Source IP Ranges 0.0.0.0/0 ",(0,r.jsx)(n.em,{children:"or if you know the range you will be connecting from"})]}),"\n",(0,r.jsxs)(n.li,{children:["Protocols and Ports ",(0,r.jsx)(n.strong,{children:"UDP"})," and ",(0,r.jsx)(n.strong,{children:"51280"})]}),"\n",(0,r.jsxs)(n.li,{children:["Second Source filter ",(0,r.jsx)(n.strong,{children:"None"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Note: This only allows connections to the instance, WireGuard will authorize clients when connecting"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"access-instance--install-spr",children:"Access instance & install SPR"}),"\n",(0,r.jsxs)(n.p,{children:["Your instance should be available under ",(0,r.jsx)(n.em,{children:"Compute Engine"})," -> ",(0,r.jsx)(n.em,{children:"VM Instances"}),".\nClick ",(0,r.jsx)(n.strong,{children:"SSH"})," in the listing:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(6724).Z+"",width:"2051",height:"1623"})}),"\n",(0,r.jsx)(n.p,{children:"A browser window should popup with a terminal.\nRun the SPR virtual installer with sudo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'sudo bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Check out the source for ",(0,r.jsx)(n.code,{children:"virtual_install.sh"})," ",(0,r.jsx)(n.a,{href:"https://github.com/spr-networks/super",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If you want to add another device, just run the setup script again:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cd super\nsudo ./virtual_install.sh\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now you have a WireGuard VPN config ready, either scan the QR Code or paste the config into the ",(0,r.jsx)(n.a,{href:"https://www.wireguard.com/install/",children:"WireGuard client"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on setting up the client see ",(0,r.jsx)(n.a,{href:"/blog/virtual%20SPR#configure-the-vpn-client-on-your-device",children:"the Virtual SPR Guide"})," on how to connect your VPN client to the instance."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},90370:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gcloud-1-d717f56e144b82e7f42e12a7a7952d34.png"},97802:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gcloud-2-1b86c8ae7fb9207e74aa9981a03979ae.png"},79149:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gcloud-3-99765b92c841419c1efdf9185788e25a.png"},6724:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gcloud-4-d47918f061785814ae4933d8d555703e.png"},55777:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gcloud-5-28bb490d742f1abe47984b82695e9ffd.png"},86725:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gcloud-6-0c880ad3c1ee99f749615383ec7216cc.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var r=s(67294);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);