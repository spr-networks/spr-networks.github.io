"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[5607],{64168:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=i(85893),s=i(11151),t=i(5449);const a={sidebar_label:"Raspberry Pi 4 Setup Guide",sidebar_position:1},o="Raspberry Pi 4 Setup",l={id:"hardware/Raspberry-Pi/raspberry-pi4-wifi-vpn-router-spr",title:"raspberry-pi4-wifi-vpn-router-spr",description:"<meta",source:"@site/articles/hardware/Raspberry-Pi/raspberry-pi4-wifi-vpn-router-spr.md",sourceDirName:"hardware/Raspberry-Pi",slug:"/hardware/Raspberry-Pi/raspberry-pi4-wifi-vpn-router-spr",permalink:"/pages/articles/hardware/Raspberry-Pi/raspberry-pi4-wifi-vpn-router-spr",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Raspberry Pi 4 Setup Guide",sidebar_position:1},sidebar:"mySidebar",previous:{title:"WiFi HATs by Supernetworks",permalink:"/pages/articles/hardware/pi5-hat-wifi-spr"},next:{title:"Raspberry Pi 5 Setup Guide",permalink:"/pages/articles/hardware/Raspberry-Pi/raspberry-pi5-wifi-vpn-router-spr"}},d={},h=[{value:"VPN Only (Virtual SPR)",id:"vpn-only-virtual-spr",level:2},{value:"Quick VPN Setup",id:"quick-vpn-setup",level:3},{value:"VPN Port Forwarding",id:"vpn-port-forwarding",level:3},{value:"WiFi Access Point / WiFi Router Mode:",id:"wifi-access-point--wifi-router-mode",level:2},{value:"Completing the Setup",id:"completing-the-setup",level:3},{value:"Post Setup Tasks",id:"post-setup-tasks",level:3},{value:"Follow the SPR Setup Guide",id:"follow-the-spr-setup-guide",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Running SPR",id:"running-spr",level:3},{value:"Building from source",id:"building-from-source",level:3},{value:"Using a different wireless card",id:"using-a-different-wireless-card",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:"Turn your PI4 into a powerful WiFi Router and VPN with Ad blocking using SPR. Follow this install guide"}),"\n",(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"raspberry-pi-4-setup",children:"Raspberry Pi 4 Setup"})}),"\n","\n",(0,n.jsx)("div",{style:{display:"flex",flexDirection:"row",padding:4,gap:8,marginBottom:20},children:(0,n.jsx)("img",{src:t.Z,width:"400",alt:"PI4 Starter Kit"})}),"\n",(0,n.jsxs)(r.p,{children:["We also offer ",(0,n.jsx)(r.a,{href:"../spr-pi4-wifi-vpn-starter-kit",children:"PI4 Starter Kits"})]}),"\n",(0,n.jsx)(r.h2,{id:"vpn-only-virtual-spr",children:"VPN Only (Virtual SPR)"}),"\n",(0,n.jsxs)(r.p,{children:["SPR can run as a VPN server only. See the full ",(0,n.jsx)(r.a,{href:"/pages/docs/setup_guides/virtual_spr",children:"VPN Setup Guide"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"When running in Virtual SPR mode it uses a virtual network, so the host system's firewall and network configuration is unaffected."}),"\n",(0,n.jsx)(r.h3,{id:"quick-vpn-setup",children:"Quick VPN Setup"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'sudo bash -c "$(curl -fsSL https://raw.github.com/spr-networks/super/master/virtual_install.sh)"\n'})}),"\n",(0,n.jsx)(r.h3,{id:"vpn-port-forwarding",children:"VPN Port Forwarding"}),"\n",(0,n.jsxs)(r.p,{children:["If there is a firewall ",(0,n.jsx)(r.strong,{children:"port 51280/udp"})," needs to be open for incoming traffic, and port forwarded to the device"]}),"\n",(0,n.jsx)(r.h2,{id:"wifi-access-point--wifi-router-mode",children:"WiFi Access Point / WiFi Router Mode:"}),"\n",(0,n.jsx)(r.p,{children:"When setting up SPR as a router it will configure the host device's network."}),"\n",(0,n.jsxs)(r.p,{children:["For running SPR on a Raspberry Pi 4, a pre-built image is available on the ",(0,n.jsx)(r.a,{href:"https://github.com/spr-networks/super/releases/",children:"releases page"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["You can download ",(0,n.jsx)(r.code,{children:"spr.img.xz"})," and flash it with a tool such as the ",(0,n.jsx)(r.a,{href:"https://github.com/raspberrypi/rpi-imager",children:"Raspberry Pi Imager"}),", or if you prefer to write the image using the command line:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# On a mac, write the image to the external disk (rdiskX).\n# Be careful to make sure you identify your removable drive correctly.\n$ xzcat spr.img.xz | dd of=/dev/rdiskX bs=$[1024*1024]\n"})}),"\n",(0,n.jsx)(r.h3,{id:"completing-the-setup",children:"Completing the Setup"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Plug in your Pi SPR to your local network using a ethernet cable, and boot"}),"\n",(0,n.jsxs)(r.li,{children:['On Pis, the built in WiFi hosts an open AP "sprlab-setup". Join the open AP and go to ',(0,n.jsx)(r.a,{href:"https://192.168.2.1",children:"https://192.168.2.1"})," or ",(0,n.jsx)(r.a,{href:"https://spr.local",children:"https://spr.local"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Alternatively, without connecting to the open AP, visit ",(0,n.jsx)(r.a,{href:"https://spr.local",children:"https://spr.local"})," to run through the UI setup. This is a mDNS name, if it does not resolve: Check your router DHCP table to see if you can locate the Pi SPR or scan for it with ping/nmap."]}),"\n",(0,n.jsx)(r.li,{children:"The setup will guide you through configuring your SPR networking and adding your first device, as well as setting a UI password."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"post-setup-tasks",children:"Post Setup Tasks"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Enable DNS Ad Blocking and other DNS Blocklists for the network"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Configure VPN Devices"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Configure service reachability under the Firewall Services tab"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"follow-the-spr-setup-guide",children:"Follow the SPR Setup Guide"}),"\n",(0,n.jsxs)(r.p,{children:["If you prefer to run on an existing image, or run from a fresh Ubuntu server install,\nyou can ",(0,n.jsx)(r.a,{href:"/docs/setup_guides/setup_run_spr",children:"Follow the SPR setup guide"})]}),"\n",(0,n.jsx)(r.h2,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,n.jsx)(r.p,{children:"The current setup assumes you'll be using a Raspberry Pi Model 4b with an mt76 based wireless adapter.\nThe built-in ethernet port of the Raspberry Pi is connected to upstream/WAN/internet."}),"\n",(0,n.jsx)(r.h3,{id:"running-spr",children:"Running SPR"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A WiFi Dongle for better performance and WPA3 support. The following WiFi6 dongles work great: ",(0,n.jsx)(r.a,{href:"https://www.amazon.com/dp/B0B94R78N7",children:"Netgear's A8000 6-E"}),", and the bulkier ",(0,n.jsx)(r.a,{href:"https://www.amazon.com/dp/B0BY8GMW32",children:"ALFA AWUS036AXML 6-E"}),".\nFor Wifi5: ",(0,n.jsx)(r.a,{href:"https://amzn.to/3wei0NY",children:"Netgear's A620"})," and ",(0,n.jsx)(r.a,{href:"https://amzn.to/3u6U5NS",children:"Alfa's AWUS036ACM"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"WiFi dongles",type:"info",children:(0,n.jsxs)(r.p,{children:["The WiFi 5 dongles have been tested to perform well with a ",(0,n.jsx)(r.em,{children:"500-550Mbps"})," top speed in a low noise environment and the WiFi 6 dongles can reach closer to ",(0,n.jsx)(r.em,{children:"700Mpbs"})," in a low noise environment."]})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.a,{href:"https://amzn.to/3ijDuAN",children:"USB SSD"})," works best. A 16GB SD card can also be used but is not recommended"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Ethernet cable for setup (and if you run uplink over the wire)"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Optional"})," An Ethernet USB Dongle for additional LAN devices since the built-in ethernet card (eth0) will be used for the WAN. The ",(0,n.jsx)(r.a,{href:"https://amzn.to/3qkuujo",children:"UE 300"})," has been tested to run near line speed on the Pi (",(0,n.jsx)(r.em,{children:"950Mbps"}),"). The ",(0,n.jsx)(r.a,{href:"https://www.amazon.com/TP-Link-Portable-Ethernet-Notebooks-UE330/dp/B01N9M32TA",children:"U3 330"})," also works and provides additional USB 3.0 ports."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Optional"})," For running multiple WiFi adapters, a powered USB 3.0 capable hub is recommended"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["Grab the Complete Starter Kit for everything you need to get started ",(0,n.jsx)(r.a,{href:"https://www.supernetworks.org/devkit.html",children:"here"})]})}),"\n",(0,n.jsx)(r.h3,{id:"building-from-source",children:"Building from source"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"8 GB of RAM are recommended for building SPR on the Pi. Any amount of RAM can work for building but ramdisks have to be disabled in the docker build. The prebuilt GHCR has prebuilt SPR images available also."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"using-a-different-wireless-card",children:"Using a different wireless card"}),"\n",(0,n.jsxs)(r.p,{children:["For using a different wireless adapter, the default hostapd configuration may need to be modified in the UI or in ",(0,n.jsx)(r.code,{children:"configs/wifi/"}),". Note that the built-in Raspberry Pi Wireless card can not be used as an AP by default as it does not support AP/VLAN, which is a feature that SPR relies on."]})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5449:(e,r,i)=>{i.d(r,{Z:()=>n});const n=i.p+"assets/images/pi4b-4d119946c9ab02df338769c9e3c07852.jpg"},11151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>a});var n=i(67294);const s={},t=n.createContext(s);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);