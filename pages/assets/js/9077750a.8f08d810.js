"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[4416],{68972:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=a(85893),n=a(11151);const o={slug:"bssid-randomization",title:"BSS Randomization",authors:["ltsrad"],tags:["wifi positioning","privacy","tracking","apple","google"]},s=void 0,r={permalink:"/pages/blog/bssid-randomization",source:"@site/blog/2024-05-31-bssid-randomization.md",title:"BSS Randomization",description:"How Does WiFi Location Positioning & Tracking Work?",date:"2024-05-31T00:00:00.000Z",formattedDate:"May 31, 2024",tags:[{label:"wifi positioning",permalink:"/pages/blog/tags/wifi-positioning"},{label:"privacy",permalink:"/pages/blog/tags/privacy"},{label:"tracking",permalink:"/pages/blog/tags/tracking"},{label:"apple",permalink:"/pages/blog/tags/apple"},{label:"google",permalink:"/pages/blog/tags/google"}],readingTime:2.22,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"bssid-randomization",title:"BSS Randomization",authors:["ltsrad"],tags:["wifi positioning","privacy","tracking","apple","google"]},unlisted:!1,nextItem:{title:"PI5 Hats and More, Unleashing the Power of Modular Router Hardware",permalink:"/pages/blog/pi5-hardware-2024"}},l={authorsImageUrls:[void 0]},d=[{value:"How Does WiFi Location Positioning &amp; Tracking Work?",id:"how-does-wifi-location-positioning--tracking-work",level:2},{value:"What Is the Impact On Privacy?",id:"what-is-the-impact-on-privacy",level:2},{value:"What does this data look like?",id:"what-does-this-data-look-like",level:2},{value:"What is BSSID Randomization?",id:"what-is-bssid-randomization",level:2},{value:"Why Enable BSSID Randomization?",id:"why-enable-bssid-randomization",level:2},{value:"Why _nomap Isn&#39;t Enough ?",id:"why-_nomap-isnt-enough-",level:2},{value:"How to Enable BSSID Randomization with SPR ?",id:"how-to-enable-bssid-randomization-with-spr-",level:2}];function h(e){const i={a:"a",h2:"h2",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"how-does-wifi-location-positioning--tracking-work",children:"How Does WiFi Location Positioning & Tracking Work?"}),"\n",(0,t.jsx)(i.p,{children:"All Apple Smartphones and Laptops as well as Google Devices passively collect Access Point Names (the SSID) and their hardware address (the BSSID), and they then tag it with the GPS location. With billions of customers, tech giants have been able to build databases taht contain the physical position of almost every access point in the world."}),"\n",(0,t.jsxs)(i.p,{children:["Researchers from the University of Maryland published that the privacy features in the public APIs were insufficient to protect the privacy of individuals.\n",(0,t.jsx)(i.a,{href:"https://www.cs.umd.edu/~dml/papers/wifi-surveillance-sp24.pdf",children:'See the paper from Erik Rye, Dave Levin for the details: "Surveilling the Masses with Wi-Fi-Based Positioning Systems" '})]}),"\n",(0,t.jsxs)(i.p,{children:["Krebs On Security has throughough co",(0,t.jsx)(i.a,{href:"https://krebsonsecurity.com/2024/05/why-your-wi-fi-router-doubles-as-an-apple-airtag/",children:'"Why Your Wi-Fi Router Doubles as an Apple AirTag"'})]}),"\n",(0,t.jsx)(i.h2,{id:"what-is-the-impact-on-privacy",children:"What Is the Impact On Privacy?"}),"\n",(0,t.jsx)(i.p,{children:"When traveling, access points will reveal their updated location to the general public, who can query the APIs and trick them to reveal location information. It also means that this feature could be used to stalk someone if knowing the SSID and BSSID of their router, to find their new location after they move homes for example. Apple and Google have since added some hardening to help mitigate the attack but the risks still largely remain."}),"\n",(0,t.jsx)(i.h2,{id:"what-does-this-data-look-like",children:"What does this data look like?"}),"\n",(0,t.jsx)(i.p,{children:"The BSSID and SSID data is not private and available in Beacons and Probe Responses, which end up in the data used by Apple and Google to collect positioning information."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image",src:a(51218).Z+"",width:"1572",height:"850"})}),"\n",(0,t.jsx)(i.h2,{id:"what-is-bssid-randomization",children:"What is BSSID Randomization?"}),"\n",(0,t.jsx)(i.p,{children:"BSSID Randomization is assigning a random MAC address to the Access Point."}),"\n",(0,t.jsx)(i.h2,{id:"why-enable-bssid-randomization",children:"Why Enable BSSID Randomization?"}),"\n",(0,t.jsx)(i.p,{children:"When this happens, the position databases no longer link an access point between locations. The databases can not be queried with only the SSID Name, so the position of the AP will be protected."}),"\n",(0,t.jsx)(i.h2,{id:"why-_nomap-isnt-enough-",children:"Why _nomap Isn't Enough ?"}),"\n",(0,t.jsx)(i.p,{children:'Apple and Google have added a feature, where if the SSID name has "_nomap" appended in the name, they will not include it in their database. This does not prevent companies that want to collect this information from collecting it anyway. It\'s also unrealistic for users to change their SSID name because they have to reconfigure all of their devices, which is a non-starter for most people with busy lives.'}),"\n",(0,t.jsx)(i.h2,{id:"how-to-enable-bssid-randomization-with-spr-",children:"How to Enable BSSID Randomization with SPR ?"}),"\n",(0,t.jsx)(i.p,{children:"In the 3.13 release we have added a UI option to randomize the MAC address on startup. This supports both APs and interfaces working as wireless clients for internet uplink. It will assign a random address using the specified locally administered OUI bit. A user can also pick a common OUI from common-place routers to cloak with instead."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image",src:a(91829).Z+"",width:"1312",height:"966"})}),"\n",(0,t.jsx)(i.h2,{id:""})]})}function c(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},91829:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/bssid-rand-dd3563dde347f9b544b3363ba1877a7a.png"},51218:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/wireshark-bssid-rand-e93c539fd22ae27bfd8b92e82b27b008.png"},11151:(e,i,a)=>{a.d(i,{Z:()=>r,a:()=>s});var t=a(67294);const n={},o=t.createContext(n);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);