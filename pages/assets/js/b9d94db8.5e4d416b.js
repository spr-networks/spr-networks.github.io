"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[8556],{75093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var i=t(85893),r=t(11151);const s={},o="NanoPC T6 Setup Guide",u={id:"rockchip/nanopc-t6-wifi-vpn-router-spr",title:"NanoPC T6 Setup Guide",description:"Turn your NanoPC T6 into a WiFi Router, Secure VPN, or both with SPR. This guide will show you how.",source:"@site/articles/rockchip/nanopc-t6-wifi-vpn-router-spr.md",sourceDirName:"rockchip",slug:"/rockchip/nanopc-t6-wifi-vpn-router-spr",permalink:"/pages/articles/rockchip/nanopc-t6-wifi-vpn-router-spr",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},a=[{value:"Install a Docker Host System",id:"install-a-docker-host-system",level:2},{value:"First Login",id:"first-login",level:3},{value:"VPN Only (Virtual SPR)",id:"vpn-only-virtual-spr",level:2},{value:"Quick VPN Setup",id:"quick-vpn-setup",level:3},{value:"VPN Port Forwarding",id:"vpn-port-forwarding",level:3},{value:"WiFi Access Point / WiFi Router",id:"wifi-access-point--wifi-router",level:2},{value:"Getting started quickly:",id:"getting-started-quickly",level:3},{value:"Need Help?",id:"need-help",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"nanopc-t6-setup-guide",children:"NanoPC T6 Setup Guide"})}),"\n",(0,i.jsx)(n.p,{children:"Turn your NanoPC T6 into a WiFi Router, Secure VPN, or both with SPR. This guide will show you how."}),"\n",(0,i.jsx)("meta",{name:"description",content:"Turn your NanoPC T6 into a powerful WiFi Router and VPN with Ad blocking using SPR. Follow this install guide"}),"\n",(0,i.jsx)(n.h2,{id:"install-a-docker-host-system",children:"Install a Docker Host System"}),"\n",(0,i.jsx)(n.p,{children:"SPR can run on any host which supports Docker, however, it is best tested with Ubuntu."}),"\n",(0,i.jsxs)(n.p,{children:["You can install Ubuntu images from ",(0,i.jsx)(n.a,{href:"https://joshua-riek.github.io/ubuntu-rockchip-download/",children:"https://joshua-riek.github.io/ubuntu-rockchip-download/"})]}),"\n",(0,i.jsxs)(n.p,{children:["Grab the Ubuntu ",(0,i.jsx)(n.strong,{children:"Server"})," image for your board and install it. See the ",(0,i.jsx)(n.a,{href:"https://github.com/Joshua-Riek/ubuntu-rockchip",children:"Ubuntu Rockchip"})," page for help."]}),"\n",(0,i.jsx)(n.h3,{id:"first-login",children:"First Login"}),"\n",(0,i.jsx)(n.p,{children:"The username and password should be ubuntu/ubuntu"}),"\n",(0,i.jsx)(n.h2,{id:"vpn-only-virtual-spr",children:"VPN Only (Virtual SPR)"}),"\n",(0,i.jsxs)(n.p,{children:["SPR can run as a VPN server only. See the full ",(0,i.jsx)(n.a,{href:"/pages/docs/setup_guides/virtual_spr",children:"VPN Setup Guide"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"When running in Virtual SPR mode it uses a virtual network, so the host system's firewall and network configuration is unaffected."}),"\n",(0,i.jsx)(n.h3,{id:"quick-vpn-setup",children:"Quick VPN Setup"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'sudo bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"vpn-port-forwarding",children:"VPN Port Forwarding"}),"\n",(0,i.jsxs)(n.p,{children:["If there is a firewall ",(0,i.jsx)(n.strong,{children:"port 51280/udp"})," needs to be open for incoming traffic, and port forwarded to the device"]}),"\n",(0,i.jsx)(n.h2,{id:"wifi-access-point--wifi-router",children:"WiFi Access Point / WiFi Router"}),"\n",(0,i.jsx)(n.p,{children:"When setting up SPR as a router it will configure the host device's network."}),"\n",(0,i.jsx)(n.p,{children:"SPR is distributed as source and as prebuilt docker images. You can get them started"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the full ",(0,i.jsx)(n.a,{href:"/pages/docs/setup_guides/setup_run_spr",children:"setup guide"})]}),"\n",(0,i.jsx)(n.h3,{id:"getting-started-quickly",children:"Getting started quickly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/spr-networks/super\ncd super\nsudo ./base/scripts/setup.sh\nreboot\ncd ~/super/\ndocker compose up -d\n"})}),"\n",(0,i.jsx)(n.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/contact",children:"Contact us"})," with any questions"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);