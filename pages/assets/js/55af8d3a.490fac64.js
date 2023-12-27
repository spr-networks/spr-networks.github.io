"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6194],{31681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(85893),o=n(11151);const i={sidebar_position:2},r="SPR on DigitalOcean 1-click",c={id:"guides/virtual/setup_one_click",title:"SPR on DigitalOcean 1-click",description:"This guide allows you to setup your own cloud VPN using SPR on the DigitalOcean Marketplace.",source:"@site/docs/guides/virtual/setup_one_click.md",sourceDirName:"guides/virtual",slug:"/guides/virtual/setup_one_click",permalink:"/pages/docs/guides/virtual/setup_one_click",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pages/docs/guides/virtual/setup"},next:{title:"SPR on Amazon AWS",permalink:"/pages/docs/guides/virtual/setup_amazon_aws"}},a={},l=[{value:"Step 1 - Create a SPR Droplet",id:"step-1---create-a-spr-droplet",level:2},{value:"Step 2 - Configure your droplet",id:"step-2---configure-your-droplet",level:2},{value:"Step 3 - Access your droplet",id:"step-3---access-your-droplet",level:2},{value:"Step 4 - Generate a VPN Key and Connect",id:"step-4---generate-a-vpn-key-and-connect",level:2},{value:"Step 5 - Connecting to SPR",id:"step-5---connecting-to-spr",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"spr-on-digitalocean-1-click",children:"SPR on DigitalOcean 1-click"}),"\n",(0,s.jsx)(t.p,{children:"This guide allows you to setup your own cloud VPN using SPR on the DigitalOcean Marketplace."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to dive in directly: ",(0,s.jsx)(t.a,{href:"https://cloud.digitalocean.com/droplets/new?app=spr&onboarding_origin=marketplace&appId=145188909&refcode=24603f3ca4bd&region=nyc1&size=s-1vcpu-512mb-10gb&type=applications&image=supernetworks-spr",children:"Click here"})," to create a droplet using the SPR image. Else, follow along in the steps below."]}),"\n",(0,s.jsx)(t.h2,{id:"step-1---create-a-spr-droplet",children:"Step 1 - Create a SPR Droplet"}),"\n",(0,s.jsxs)(t.p,{children:["To create a SPR Droplet from the ",(0,s.jsx)(t.a,{href:"https://marketplace.digitalocean.com/apps/spr",children:"Digital Ocean marketplace"}),", press the ",(0,s.jsx)(t.strong,{children:"Create SPR Droplet"})," button:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(36799).Z+"",width:"2880",height:"1800"})}),"\n",(0,s.jsxs)(t.p,{children:["Pressing the button will take you to the DigitalOcean control panel.\nIf you are not logged into your DigitalOcean account, you need to login. If you don't have an account, you can ",(0,s.jsx)(t.a,{href:"https://cloud.digitalocean.com/registrations/new",children:"sign up for one"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"step-2---configure-your-droplet",children:"Step 2 - Configure your droplet"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(32145).Z+"",width:"2880",height:"1618"})}),"\n",(0,s.jsx)(t.p,{children:"Select a region & be sure to create a SSH key if you don't have one configured already."}),"\n",(0,s.jsxs)(t.p,{children:["For Droplet Size, the smallest ",(0,s.jsx)(t.em,{children:"$4/month"})," with 512 MB RAM is enough but feel free to choose another one."]}),"\n",(0,s.jsxs)(t.p,{children:["After you've made all your choices, press ",(0,s.jsx)(t.strong,{children:"Create droplet"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"step-3---access-your-droplet",children:"Step 3 - Access your droplet"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(47738).Z+"",width:"2880",height:"1092"})}),"\n",(0,s.jsxs)(t.p,{children:["In the droplet listing you can see the IP address, click ",(0,s.jsx)(t.strong,{children:"Get started"})," to see the tutorial and how to access you server."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(47023).Z+"",width:"2880",height:"1800"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ssh root@165.232.129.119\n"})}),"\n",(0,s.jsx)(t.h2,{id:"step-4---generate-a-vpn-key-and-connect",children:"Step 4 - Generate a VPN Key and Connect"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd /home/spr/super && ./virtual_install.sh\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can scan the QR Code generated from the terminal"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(66662).Z+"",width:"4068",height:"3022"})}),"\n",(0,s.jsx)(t.h2,{id:"step-5---connecting-to-spr",children:"Step 5 - Connecting to SPR"}),"\n",(0,s.jsx)(t.p,{children:"To connect to the SPR UI/API, it's possible to connect via the VPN, or to connect with an SSH tunnel."}),"\n",(0,s.jsxs)(t.p,{children:["For more information on setting up the VPN client see ",(0,s.jsx)(t.a,{href:"/pages/docs/setup_guides/virtual_spr#configure-the-vpn-client-on-your-device",children:"the Virtual SPR Guide"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"For the ssh tunnel approach, reconnect to the droplet, with forwarding options:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ssh root@165.22.182.180  -N -L 8000:127.0.0.1:8000\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then navigate to ",(0,s.jsx)(t.a,{href:"http://localhost:8000",children:"http://localhost:8000"}),". The password is auto generated by the droplet and presented on the first login."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"[+] login information:\n==========================================================\n http tunnel: ssh 165.22.182.180 -N -L 8000:127.0.0.1:8000\n         url: http://localhost:8000/\n    username: admin\n    password: SmczeGzcEPbBmQEi\n       token: 6Yd2MtMSkm0TiDG2ZIWqoFqxgiHN9HzRJ24m/U8HKw4=\n==========================================================\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can update the admin password by modifying ",(0,s.jsx)(t.code,{children:"/home/spr/super/configs/auth/auth_users.json"})," directly."]}),"\n",(0,s.jsxs)(t.p,{children:["Alternately, when connected to the VPN, the default address for the SPR frontend will be at ",(0,s.jsx)(t.em,{children:"192.168.2.1"}),". This can be updated under the ",(0,s.jsx)(t.em,{children:'"Supernetworks"'})," panel."]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["With this guide we've described how to setup virtual SPR to get a secure, self-hosted VPN for $4/month. The setup allows ",(0,s.jsx)(t.em,{children:"you"})," to route and redirect traffic, block ads, and automate networks tasks."]}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/spr-networks/spr-virtual-image-build",children:"spr-virtual-image-build"})," repository on GitHub for how the image is built."]}),"\n",(0,s.jsxs)(t.p,{children:["Read more about running SPR in the cloud in ",(0,s.jsx)(t.a,{href:"/pages/docs/setup_guides/virtual_spr",children:"the Virtual SPR Guide"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},36799:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cloud-digital-ocean-1click-1-49a5e2b818eaf57523761496d9b739c2.png"},47738:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cloud-digital-ocean-1click-2-25c041efb916052c1c9aa4c51a77e7c9.png"},47023:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cloud-digital-ocean-1click-3-5995a05f684eba0d12dc3e7f07c6d52c.png"},32145:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cloud-digital-ocean-2-ca9699589bf6a28aa093388e8024b00b.png"},66662:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cloud-digital-ocean-qrcode-a1db6df0e5b64359d51b43908792c3bf.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);