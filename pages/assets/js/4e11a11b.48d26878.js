"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[502],{87754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=r(85893),i=r(11151);const s={},o="ROCK 5A Setup Guide",u={id:"rockchip/rock-5a-wifi-vpn-router-spr",title:"ROCK 5A Setup Guide",description:"Turn your ROCK 5A into a WiFi Router, Secure VPN, or both with SPR. This guide will show you how.",source:"@site/articles/rockchip/rock-5a-wifi-vpn-router-spr.md",sourceDirName:"rockchip",slug:"/rockchip/rock-5a-wifi-vpn-router-spr",permalink:"/pages/articles/rockchip/rock-5a-wifi-vpn-router-spr",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Install a Docker Host System",id:"install-a-docker-host-system",level:2},{value:"First Login",id:"first-login",level:3},{value:"VPN Only (Virtual SPR)",id:"vpn-only-virtual-spr",level:2},{value:"Quick VPN Setup",id:"quick-vpn-setup",level:3},{value:"VPN Port Forwarding",id:"vpn-port-forwarding",level:3},{value:"WiFi Access Point / WiFi Router",id:"wifi-access-point--wifi-router",level:2},{value:"Getting started quickly:",id:"getting-started-quickly",level:3},{value:"Need Help?",id:"need-help",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"rock-5a-setup-guide",children:"ROCK 5A Setup Guide"})}),"\n",(0,n.jsx)(t.p,{children:"Turn your ROCK 5A into a WiFi Router, Secure VPN, or both with SPR. This guide will show you how."}),"\n",(0,n.jsx)(t.h2,{id:"install-a-docker-host-system",children:"Install a Docker Host System"}),"\n",(0,n.jsx)(t.p,{children:"SPR can run on any host which supports Docker, however, it is best tested with Ubuntu."}),"\n",(0,n.jsxs)(t.p,{children:["You can install Ubuntu images from ",(0,n.jsx)(t.a,{href:"https://joshua-riek.github.io/ubuntu-rockchip-download/",children:"https://joshua-riek.github.io/ubuntu-rockchip-download/"})]}),"\n",(0,n.jsxs)(t.p,{children:["Grab the Ubuntu ",(0,n.jsx)(t.strong,{children:"Server"})," image for your board and install it. See the ",(0,n.jsx)(t.a,{href:"https://github.com/Joshua-Riek/ubuntu-rockchip",children:"Ubuntu Rockchip"})," page for help."]}),"\n",(0,n.jsx)(t.h3,{id:"first-login",children:"First Login"}),"\n",(0,n.jsx)(t.p,{children:"The username and password should be ubuntu/ubuntu"}),"\n",(0,n.jsx)(t.h2,{id:"vpn-only-virtual-spr",children:"VPN Only (Virtual SPR)"}),"\n",(0,n.jsxs)(t.p,{children:["SPR can run as a VPN server only. See the full ",(0,n.jsx)(t.a,{href:"/pages/docs/setup_guides/virtual_spr",children:"VPN Setup Guide"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"When running in Virtual SPR mode it uses a virtual network, so the host system's firewall and network configuration is unaffected."}),"\n",(0,n.jsx)(t.h3,{id:"quick-vpn-setup",children:"Quick VPN Setup"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'sudo bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"vpn-port-forwarding",children:"VPN Port Forwarding"}),"\n",(0,n.jsxs)(t.p,{children:["If there is a firewall ",(0,n.jsx)(t.strong,{children:"port 51280/udp"})," needs to be open for incoming traffic, and port forwarded to the device"]}),"\n",(0,n.jsx)(t.h2,{id:"wifi-access-point--wifi-router",children:"WiFi Access Point / WiFi Router"}),"\n",(0,n.jsx)(t.p,{children:"When setting up SPR as a router it will configure the host device's network."}),"\n",(0,n.jsx)(t.p,{children:"SPR is distributed as source and as prebuilt docker images. You can get them started"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the full ",(0,n.jsx)(t.a,{href:"/pages/docs/setup_guides/setup_run_spr",children:"setup guide"})]}),"\n",(0,n.jsx)(t.h3,{id:"getting-started-quickly",children:"Getting started quickly:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/spr-networks/super\ncd super\nsudo ./base/scripts/setup.sh\nreboot\ncd ~/super/\ndocker compose up -d\n"})}),"\n",(0,n.jsx)(t.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/contact",children:"Contact us"})," with any questions"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>o});var n=r(67294);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);