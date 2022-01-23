"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[343],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_label:"Raspberry Pi 4 Model B Setup Guide"},l="Raspberry Pi 4 Model B Setup Guide",u={unversionedId:"pi4b",id:"pi4b",title:"Raspberry Pi 4 Model B Setup Guide",description:"Configuration",source:"@site/docs/pi4b.md",sourceDirName:".",slug:"/pi4b",permalink:"/pages/docs/pi4b",tags:[],version:"current",frontMatter:{sidebar_label:"Raspberry Pi 4 Model B Setup Guide"},sidebar:"tutorialSidebar",previous:{title:"Wireguard",permalink:"/pages/docs/services/wireguard"},next:{title:"Security",permalink:"/pages/docs/security"}},p=[{value:"Configuration",id:"configuration",children:[{value:"Base System Setup",id:"base-system-setup",children:[],level:3},{value:"Configuring the project",id:"configuring-the-project",children:[],level:3},{value:"Running the project using prebuilt containers",id:"running-the-project-using-prebuilt-containers",children:[],level:3},{value:"Building the project",id:"building-the-project",children:[],level:3},{value:"Additional Notes",id:"additional-notes",children:[],level:3},{value:"Using a different wireless dongle",id:"using-a-different-wireless-dongle",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raspberry-pi-4-model-b-setup-guide"},"Raspberry Pi 4 Model B Setup Guide"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The current setup assumes you'll be using a raspberry pi model 4b with an mt76 based wireless dongle (wlan1).\nOptionally an additional usb ethernet dongle (eth1) can be connected to a switch for additional wired devices.\nThe built-in ethernet port of the raspberry pi (eth0) is connected to upstream/WAN/internet"),(0,i.kt)("p",null,"Hardware requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At least a 16GB SD card is required, and a USB flash drive works best for development."),(0,i.kt)("li",{parentName:"ul"},"A WiFi Dongle for better performance and WPA3 support. Both (",(0,i.kt)("a",{parentName:"li",href:"https://www.alfa.com.tw/products/awus036acm"},"https://www.alfa.com.tw/products/awus036acm")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.netgear.com/home/wifi/adapters/a6210/"},"https://www.netgear.com/home/wifi/adapters/a6210/")," have been tested to be good and both use the mt76x2u driver)"),(0,i.kt)("li",{parentName:"ul"},"(Optional) A USB WiFi Dongle for additional LAN devices since the built-in ethernet card (eth0) will be used for the WAN. ",(0,i.kt)("a",{parentName:"li",href:"https://www.tp-link.com/us/home-networking/usb-converter/ue300/"},"https://www.tp-link.com/us/home-networking/usb-converter/ue300/")," has been tested to be near line speed.")),(0,i.kt)("h3",{id:"base-system-setup"},"Base System Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up the pi with ubuntu server 64-bit ",(0,i.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/raspberry-pi/thank-you?version=21.04&architecture=server-arm64+raspi"},"https://ubuntu.com/download/raspberry-pi/thank-you?version=21.04&architecture=server-arm64+raspi"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Example from mac\n$ xzcat ubuntu-21.04-preinstalled-server-arm64+raspi.img.xz | dd of=/dev/rdisk2 bs=$[1024*1024]\n")),(0,i.kt)("p",null,"1.a. Tune the ubuntu config (see base/setup.sh)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# On the booted pi (see and run base/setup.sh)\ngit clone https://github.com/spr-networks/super\ncd super\n#if using a flash drive\nsudo base/setup.sh\n#or if using an sdcard\n# base/setup-sdcard.sh #this setup will reduce writes from log files\nreboot\n")),(0,i.kt)("h3",{id:"configuring-the-project"},"Configuring the project"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Inside the super directory, copy base/template_configs to configs/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# cd super\n# cp -R base/template_configs configs\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/base/config.sh")," to set an SSID_NAME or change other options.\nEnsure that ",(0,i.kt)("inlineCode",{parentName:"p"},"WANIF")," matches the name of the outbound interface if not using the builtin ethernet port.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set an api username and password for the web UI. The UI will be reachable on port 80 from connected devices."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mkdir -p state/api/\necho {\\"admin\\" : \\"your password goes here\\"} > state/api/auth_users\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"(Optional)")),(0,i.kt)("p",null,"For testing, it is likely that the API/SSH should also be reached from the WAN interface. Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/base/nft_rules.sh"),"\nto remove port 80 and 22. The base container must be restarted (if already running) for the change to take effect."),(0,i.kt)("p",null,"The firewall rule to change looks like:\n",(0,i.kt)("inlineCode",{parentName:"p"},"iifname $WANIF tcp dport {22, 5201, 80} counter jump DROPLOGINP")),(0,i.kt)("p",null,"To remove 22/80 from being dropped:\n",(0,i.kt)("inlineCode",{parentName:"p"},"iifname $WANIF tcp dport {5201} counter jump DROPLOGINP")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"(Optional)")),(0,i.kt)("p",null,'It is possible to manually configure zones and stations ahead of time, without using the web interface.\nFor WPA3, use "sae" type and for WPA2 use "wpa2". See configs/wifi/psks.json'),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"(Optional)")),(0,i.kt)("p",null,"Lastly,  manually add those devices to zones in configs/zones/zones.json\nThe default zones are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# No access to anything\n- isolated\n# Allows DNS query access\n- dns\n# Allows internet/WAN forwarding\n- wan\n# Allows full LAN access\n- lan\n")),(0,i.kt)("h3",{id:"running-the-project-using-prebuilt-containers"},"Running the project using prebuilt containers"),(0,i.kt)("p",null,"Testing containers are built and published to Github's Container Registry,\nand can be run without building on the device. If you would instead like to build everything\nfrom source, proceed to the ",(0,i.kt)("a",{parentName:"p",href:"#building-the-project"},"next section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./run_prebuilt.sh\n")),(0,i.kt)("p",null,"To see logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose logs -f\n")),(0,i.kt)("h3",{id:"building-the-project"},"Building the project"),(0,i.kt)("p",null,"All source code can be built on the pi. Because the system uses ",(0,i.kt)("inlineCode",{parentName:"p"},"nftables")," exclusively,\nand docker is made to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables"),", you will need to set up minimal forwarding\nrules for docker to work on the first install."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#fix nftables\nroot@ubuntu:/home/ubuntu/super# ./base/docker_nftables_setup.sh  \n")),(0,i.kt)("p",null,"And build."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root@ubuntu:/home/ubuntu/super# ./build_docker_compose.sh\n")),(0,i.kt)("p",null,"If something went wrong with with a cached stage, it is possible to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-cache"),".\nA specific service can also be passed as an argument (",(0,i.kt)("inlineCode",{parentName:"p"},"./build_docker_compose.sh api"),")"),(0,i.kt)("p",null,"To run the local build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./run_docker_compose.sh\n")),(0,i.kt)("h3",{id:"additional-notes"},"Additional Notes"),(0,i.kt)("p",null,"Check dns-Corefile to tweak DNS server configuration as well as the hostapd settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/gen_hostapd.sh")),(0,i.kt)("p",null,"It is possible to use SPR's dns server for the host system's DNS requests too, by updating the resolv.conf file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'root@ubuntu:/home/ubuntu/super# echo -e "nameserver 127.0.0.1\\nnameserver 1.1.1.1" > /etc/resolv.conf\n')),(0,i.kt)("h3",{id:"using-a-different-wireless-dongle"},"Using a different wireless dongle"),(0,i.kt)("p",null,"For using the built-in wireless or a different dongle, the hostapd configuration may need to be modified in configs/gen_hostapd.sh. Note that if the built-in wireless is to be used, WPA3 is not currently available without additional broadcom firmware patches. The next raspberry pi os releases should include these by default."))}d.isMDXComponent=!0}}]);