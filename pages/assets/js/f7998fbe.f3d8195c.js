"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[352],{19034:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(85893),n=t(11151);const r={sidebar_label:"WiFi Pod Setup Guide",sidebar_class_name:"hidden"},o="WiFi Pod Setup Guide",d={id:"setup_guides/install",title:"WiFi Pod Setup Guide",description:"Start by flashing spr to your usb drive:",source:"@site/docs/setup_guides/install.md",sourceDirName:"setup_guides",slug:"/setup_guides/install",permalink:"/pages/docs/setup_guides/install",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"WiFi Pod Setup Guide",sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Welcome to SPR!",permalink:"/pages/docs/intro"},next:{title:"Raspberry Pi 4/5 Model B Hardware Guide",permalink:"/pages/docs/setup_guides/pi4b"}},a={},c=[{value:"Detailed step-by-step guide",id:"detailed-step-by-step-guide",level:2},{value:"Connect to spr-setup",id:"connect-to-spr-setup",level:3},{value:"Setup WiFi",id:"setup-wifi",level:3},{value:"Add your first device",id:"add-your-first-device",level:3},{value:"Connect your device",id:"connect-your-device",level:3},{value:"Setup Done",id:"setup-done",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"wifi-pod-setup-guide",children:"WiFi Pod Setup Guide"})}),"\n",(0,i.jsx)(s.p,{children:"Start by flashing spr to your usb drive:"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(s.p,{children:"How to flash the latest spr image to your device"})}),(0,i.jsxs)(s.p,{children:["Download the ",(0,i.jsx)(s.a,{href:"https://github.com/spr-networks/super/releases/latest/download/spr.img.xz",children:"latest spr image"})," and flash it with a tool such as the ",(0,i.jsx)(s.a,{href:"https://github.com/raspberrypi/rpi-imager",children:"Raspberry Pi Imager"}),", or if you prefer using the command line:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"xzcat spr.img.xz | dd of=/dev/rdiskX bs=$[1024*1024]\n"})}),(0,i.jsx)(s.p,{children:"Be careful to make sure you identify your removable drive correctly."}),(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Confirm the name of your disk by running ",(0,i.jsx)(s.code,{children:"fdisk -l"}),", if its a sd-card it will propably be /dev/mmcblk0."]})})]}),"\n",(0,i.jsxs)(s.p,{children:["When this is done, boot up your pod & check out this video for how to install spr, or follow the ",(0,i.jsx)(s.a,{href:"#detailed-step-by-step-guide",children:"detailed guide"}),":"]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("video",{width:"100%",height:"100%",playsInline:!0,controls:!0,src:"/pages/video/guides/install.mp4",type:"video/mp4"})}),"\n",(0,i.jsx)(s.h2,{id:"detailed-step-by-step-guide",children:"Detailed step-by-step guide"}),"\n",(0,i.jsx)(s.h3,{id:"connect-to-spr-setup",children:"Connect to spr-setup"}),"\n",(0,i.jsxs)(s.p,{children:["Start by connecting to the spr-setup open network and navigate to ",(0,i.jsx)(s.a,{href:"https://192.168.2.1",children:"https://192.168.2.1"}),". Your browser will ask you to trust the self-signed certificate, click proceed. You can also try visiting the setup domain name ",(0,i.jsx)(s.a,{href:"https://spr.setup.lan",children:"https://spr.setup.lan"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"step-0",src:t(10410).Z+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(s.p,{children:"Some checks are made here to confirm everything is good to go. Press Start to configure your new WiFi."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"If you dont have a network cable connected for uplink this is fine.\nAfter the setup is done you can configure a wifi client for internet access."})}),"\n",(0,i.jsx)(s.h3,{id:"setup-wifi",children:"Setup WiFi"}),"\n",(0,i.jsx)(s.p,{children:"Select a name for your new WiFi network, your current country code and an admin password. The defaults for the other options is recommended."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"step-1",src:t(28086).Z+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Your uplink IP address will show at the top right, spr will also be reachable here or @ ",(0,i.jsx)(s.a,{href:"https://spr.local",children:"https://spr.local"})," if this is connected to your local network."]})}),"\n",(0,i.jsx)(s.admonition,{title:"WiFi uplink",type:"note",children:(0,i.jsxs)(s.p,{children:["If you plan to access internet over wifi, this can be configured under ",(0,i.jsx)(s.em,{children:"Network -> Link Settings"})," after the install is done."]})}),"\n",(0,i.jsx)(s.h3,{id:"add-your-first-device",children:"Add your first device"}),"\n",(0,i.jsx)(s.p,{children:"The WiFi network will start and should be available within 30 seconds. Pick a passphrase or generate one for you first device:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"step-2-2",src:t(26770).Z+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"WPA3 is recommended and should work for most devices. WPA2 can be used if you have an older device."})}),"\n",(0,i.jsx)(s.h3,{id:"connect-your-device",children:"Connect your device"}),"\n",(0,i.jsx)(s.p,{children:"Now connect your device to the network using the passphrase from the last step:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"step-3",src:t(54158).Z+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(s.p,{children:"The installer will verify that the device have connected successfully:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"step-3-2",src:t(68408).Z+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["If you picked another subnet than the default (192.168.2.0/24), make sure you are connected to spr-setup wifi to continue the install. If you fail to connect or have another subnet, press skip to configure the device over lan @ ",(0,i.jsx)(s.a,{href:"https://spr.local",children:"s://spr.local"})," or your uplink ip."]})}),"\n",(0,i.jsx)(s.admonition,{title:"WiFi password",type:"info",children:(0,i.jsxs)(s.p,{children:["When you have connected successfully to spr, the specified password can only be used from that device. Read more under ",(0,i.jsx)(s.a,{href:"/pages/docs/intro#device-isolation",children:"device isolation"})," or ",(0,i.jsx)(s.a,{href:"/pages/docs/guides/device",children:"Manage Devices"}),"."]})}),"\n",(0,i.jsx)(s.h3,{id:"setup-done",children:"Setup Done"}),"\n",(0,i.jsx)(s.p,{children:"Your spr is now configured! Press finish to login, spr-setup wifi will now shutdown."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"step-4",src:t(19146).Z+"",width:"2880",height:"1800"})})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},10410:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/step-0-b2c5881d208ce69808eb855667caf4e6.jpeg"},28086:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/step-1-6b5a782eff7912be36e8715411f2d205.jpeg"},26770:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/step-2-2-8e70d56f83a6ea583764b4351c7a9af2.jpeg"},68408:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/step-3-2-4ebd6a858fe3b98a8bde85cb6bf283d4.jpeg"},54158:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/step-3-0def09f813038fa8f7c94a99da99901c.jpeg"},19146:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/step-4-96916d7baa9195772d719577a34d0387.jpeg"},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>o});var i=t(67294);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);