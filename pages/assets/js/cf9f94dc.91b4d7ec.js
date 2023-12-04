"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6638],{78909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(85893),a=t(11151);const i={slug:"spr-nexmon",title:"Loading up nexmon on a RPI4 with SPR",authors:"ltsrad",tags:["Raspberry Pi","Python","Scapy","WiFi","Linux","Nexmon","Seemoo Labs"]},r="About",o={permalink:"/pages/blog/spr-nexmon",source:"@site/blog/2023-11-1-nexmon-spr.md",title:"Loading up nexmon on a RPI4 with SPR",description:"The built-in wifi radio on a Raspberry Pi 4 is kind of sad, as it does not support monitor mode.",date:"2023-11-01T00:00:00.000Z",formattedDate:"November 1, 2023",tags:[{label:"Raspberry Pi",permalink:"/pages/blog/tags/raspberry-pi"},{label:"Python",permalink:"/pages/blog/tags/python"},{label:"Scapy",permalink:"/pages/blog/tags/scapy"},{label:"WiFi",permalink:"/pages/blog/tags/wi-fi"},{label:"Linux",permalink:"/pages/blog/tags/linux"},{label:"Nexmon",permalink:"/pages/blog/tags/nexmon"},{label:"Seemoo Labs",permalink:"/pages/blog/tags/seemoo-labs"}],readingTime:4.675,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"spr-nexmon",title:"Loading up nexmon on a RPI4 with SPR",authors:"ltsrad",tags:["Raspberry Pi","Python","Scapy","WiFi","Linux","Nexmon","Seemoo Labs"]},unlisted:!1,prevItem:{title:"Transparent Socket Forwarding with SPR and MITMProxy",permalink:"/pages/blog/spr-mitmproxy"},nextItem:{title:"Attack Surface Reduction Research (Part 1)",permalink:"/pages/blog/barely-ap-surfaces"}},l={authorsImageUrls:[void 0]},c=[{value:"First, we will copy the template plugin",id:"first-we-will-copy-the-template-plugin",level:2},{value:"Development",id:"development",level:2},{value:"Prebuilt binaries",id:"prebuilt-binaries",level:3},{value:"Docker preparations",id:"docker-preparations",level:3},{value:"Extending the SPR API",id:"extending-the-spr-api",level:3},{value:"Updating the startup script",id:"updating-the-startup-script",level:3},{value:"Loading",id:"loading",level:2},{value:"Testing",id:"testing",level:2},{value:"Running barely-ap",id:"running-barely-ap",level:2},{value:"Want to try it yourself on SPR?",id:"want-to-try-it-yourself-on-spr",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The built-in wifi radio on a Raspberry Pi 4 is kind of sad, as it does not support monitor mode.\nLuckily the hackers at Seemo Labs have fixed this."}),"\n",(0,s.jsxs)(n.p,{children:["In this post we'll describe how to load Seemoo's Nexmon onto a pi4 running a modern kernel, and package it into a SPR Plugin\nnamed  ",(0,s.jsx)(n.a,{href:"https://github.com/spr-networks/spr-nexmon/tree/main",children:"spr-nexmon"}),". We'll demonstrate that packet capture and injection works."]}),"\n",(0,s.jsx)(n.h2,{id:"first-we-will-copy-the-template-plugin",children:"First, we will copy the template plugin"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ cp -R super/api_sample_plugin/ spr-nexmon\n"})}),"\n",(0,s.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,s.jsx)(n.h3,{id:"prebuilt-binaries",children:"Prebuilt binaries"}),"\n",(0,s.jsx)(n.p,{children:"We'll use some prebuilt binaries that include"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the nexmon firmware build for the broadcom wifi radio"}),"\n",(0,s.jsx)(n.li,{children:"the 6.2 kernel build"}),"\n",(0,s.jsx)(n.li,{children:"the nexutil binary"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These were built from the ",(0,s.jsx)(n.a,{href:"https://github.com/seemoo-lab/nexmon/compare/master...DrSchottky:nexmon:rpi-6.1.y",children:"6.1/6.2 support pull-request"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ cp -R ../nexmon/binaries spr-nexmon/binaries\n"})}),"\n",(0,s.jsx)(n.h3,{id:"docker-preparations",children:"Docker preparations"}),"\n",(0,s.jsx)(n.p,{children:"We'll update the Dockerfile to include some useful tools and build the project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker",children:'FROM ubuntu:23.04 as builder\nENV DEBIAN_FRONTEND=noninteractive\nRUN apt-get update\nRUN apt-get install -y --no-install-recommends nano ca-certificates git curl\nRUN mkdir /code\nWORKDIR /code\nARG TARGETARCH\nRUN curl -O https://dl.google.com/go/go1.20.linux-${TARGETARCH}.tar.gz\nRUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.linux-${TARGETARCH}.tar.gz\nENV PATH="/usr/local/go/bin:$PATH"\nCOPY code/ /code/\n\nARG USE_TMPFS=true\nRUN --mount=type=tmpfs,target=/tmpfs \\\n    [ "$USE_TMPFS" = "true" ] && ln -s /tmpfs /root/go; \\\n    go build -ldflags "-s -w" -o /nexmon_plugin /code/nexmon_plugin.go\n\n\nFROM ghcr.io/spr-networks/container_template:latest\nENV DEBIAN_FRONTEND=noninteractive\nRUN apt-get update && apt-get install -y --no-install-recommends tcpdump kmod iw wireless-regdb && rm -rf /var/lib/apt/lists/*\nCOPY scripts /scripts/\nCOPY --from=builder /nexmon_plugin /\nCOPY binaries/ nexmon/\nENTRYPOINT ["/scripts/startup.sh"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"We also want this container to use the host network and be privileged so it\ncan load kernel modules. And we'll also set it to restart automatically"}),"\n",(0,s.jsx)(n.p,{children:"And heres the docker-compose.yml:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: \'3.4\'\n\nx-logging:\n  &default-logging\n  driver: journald\n\nx-labels:\n  &default-labels\n  org.supernetworks.ci: ${CI:-false}\n  org.supernetworks.version: ${RELEASE_VERSION:-latest}${RELEASE_CHANNEL:-}\n\nservices:\n  nexmon:\n    container_name: supernexmon\n    build:\n      context: .\n      labels: *default-labels\n    logging: *default-logging\n    restart: always\n    network_mode: host\n    privileged: true\n    volumes:\n      - /etc/timezone:/etc/timezone:ro\n      - /etc/localtime:/etc/localtime:ro\n      - /lib/firmware/cypress/:/lib/firmware/cypress/\n      - "${SUPERDIR}./state/plugins/nexmon:/state/plugins/nexmon"\n      - "${SUPERDIR}./state/public/:/state/public/:ro"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"extending-the-spr-api",children:"Extending the SPR API"}),"\n",(0,s.jsx)(n.p,{children:"The Nexmon patch breaks the ability to change channels normally. Instead, we can do it\nwith the 'nexutil' binary that nexmon provides."}),"\n",(0,s.jsxs)(n.p,{children:["We'll rename ",(0,s.jsx)(n.code,{children:"sample_plugin.go"})," to ",(0,s.jsx)(n.code,{children:"nexmon_plugin.go"})," and define a new function"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func changeChannel(w http.ResponseWriter, r *http.Request) {\n\tchannel := r.URL.Query().Get("channel")\n\n\t// Use regexp.MatchString to check if the input matches the pattern\n\tmatches, err := regexp.MatchString("^[0-9/]*$", channel)\n\tif err != nil || !matches {\n\t\thttp.Error(w, "Invalid channel string", 400)\n\t\treturn\n\t}\n\n\terr = exec.Command("/nexmon/nexutil", "-k"+channel).Run()\n\tif err != nil {\n\t\thttp.Error(w, err.Error(), 400)\n\t\treturn\n\t}\n}\n//...\nfunc main() {\n//...\n\tunix_plugin_router.HandleFunc("/change_channel", changeChannel).Methods("PUT")\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"updating-the-startup-script",children:"Updating the startup script"}),"\n",(0,s.jsx)(n.p,{children:"When the container runs, we'll have it make sure the seemo firmware and kernel module\nare loaded fresh."}),"\n",(0,s.jsx)(n.p,{children:"startup.sh:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\ncd /nexmon\ncp brcmfmac43455-sdio.bin /lib/firmware/cypress/cyfmac43455-sdio-standard.bin\n\nrmmod brcmfmac_wcc\nrmmod brcmfmac\n\ninsmod brcmfmac.ko\n\nsleep 1\n\niw phy `iw dev wlan0 info | awk '/wiphy/ {printf \"phy\" $2}'` interface add mon0 type monitor\n\necho [+] Loaded\n\ncd /\n/nexmon_plugin\n"})}),"\n",(0,s.jsx)(n.h2,{id:"loading",children:"Loading"}),"\n",(0,s.jsxs)(n.p,{children:["After building, with ",(0,s.jsx)(n.code,{children:"docker compose build"}),", we'll configure the API to load the plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["In the UI or by modifying ",(0,s.jsx)(n.code,{children:"configs/base/api.json"}),", add the nexmon plugin*"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n "Name": "nexmon",\n "URI": "nexmon",\n "UnixPath": "/state/plugins/nexmon/socket",\n "Enabled": true,\n "Plus": false,\n "GitURL": "",\n "ComposeFilePath": ""\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start the plugin with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SUPERDIR=/home/spr/super/ docker compose up -d\n"})}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.p,{children:"Running tcpdump should show captured 802.11 packets from the environment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"# tcpdump -i wlan0 ...\n\ntcpdump: verbose output suppressed, use -v[v]... for full protocol decode\nlistening on wlan0, link-type IEEE802_11_RADIO (802.11 plus radiotap header), snapshot length 262144 bytes\n22:50:27.005540 1876482302us tsft 1.0 Mb/s 2412 MHz 11b -68dBm signal 0dBm noise Beacon (wifi-2.4) [1.0* 2.0* 5.5* 11.0* 6.0 9.0 12.0 18.0 Mbit] ESS CH: 1, PRIVACY\n22:50:27.046106 1876522917us tsft 1.0 Mb/s 2412 MHz 11b -46dBm signal 0dBm noise Beacon (wifi-2.4) [1.0* 2.0* 5.5* 11.0* 6.0 9.0 12.0 18.0 Mbit] ESS CH: 1, PRIVACY\n22:50:27.107930 1876584711us tsft 1.0 Mb/s 2412 MHz 11b -70dBm signal 0dBm noise Beacon (wifi-2.4) [1.0* 2.0* 5.5* 11.0* 6.0 9.0 12.0 18.0 Mbit] ESS CH: 1, PRIVACY\n22:50:27.148500 1876625317us tsft 1.0 Mb/s 2412 MHz 11b -46dBm signal 0dBm noise Beacon (wifi-2.4) [1.0* 2.0* 5.5* 11.0* 6.0 9.0 12.0 18.0 Mbit] ESS CH: 1, PRIVACY\n22:50:27.210323 1876687100us tsft 1.0 Mb/s 2412 MHz 11b -67dBm signal 0dBm noise Beacon (wifi-2.4) [1.0* 2.0* 5.5* 11.0* 6.0 9.0 12.0 18.0 Mbit] ESS CH: 1, PRIVACY\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can also verify that our channel switch api extension works"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"# curl -u admin:admin localhost/plugins/nexmon/change_channel?channel=4/20 -X PUT\n# iw dev\n\nphy#10\n        Interface wlan0\n                ifindex 44\n                wdev 0xa00000002\n                addr 00:00:00:00:00:00\n                type monitor\n                channel 4 (2427 MHz), width: 20 MHz, center1: 2427 MHz\n        Interface mon0\n                ifindex 43\n                wdev 0xa00000001\n                addr e4:5f:01:fd:a1:76\n                type managed\n                channel 4 (2427 MHz), width: 20 MHz, center1: 2427 MHz\n                txpower 31.00 dBm\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["* Note that the SPR UI does not allow specifying a docker compose path directly from the UI.\nInstead, a user can modify or create a list in ",(0,s.jsx)(n.code,{children:"configs/base/custom_compose_paths.json"})," to do so."]})}),"\n",(0,s.jsx)(n.h2,{id:"running-barely-ap",children:"Running barely-ap"}),"\n",(0,s.jsx)(n.p,{children:"Besides sniffing traffic, we can also do wild things with packet injection, like running a WPA2\nAccess Point written in scapy"}),"\n",(0,s.jsx)(n.p,{children:"Since the nexmon patch is a bit hacky, we set the wlan0 mac address ourselves and make sure the channel matches"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'ap = AP("turtlenet", "password1234", mode="iface", iface="wlan0", mac="e4:5f:01:cd:a1:76", channel=4)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u201cET VOIL\xc0!\u201d:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"root@wifilab0:~/barely-ap/src# python3 ap.py                                                                                                                  \ncommand failed: Device or resource busy (-16)\nCreated TUN interface scapyap at 10.10.10.1. Bind it to your services if needed.\nSending Authentication to 56:66:a3:9c:71:8b from e4:5f:01:cd:a1:76 (0x0B)...\nSending Association Response (0x01)...\nsent eapol m1 56:66:a3:9c:71:8b\n[+] New associated station 56:66:a3:9c:71:8b for bssid e4:5f:01:cd:a1:76\n"})}),"\n",(0,s.jsx)(n.h2,{id:"want-to-try-it-yourself-on-spr",children:"Want to try it yourself on SPR?"}),"\n",(0,s.jsxs)(n.p,{children:["You can grab ",(0,s.jsx)(n.a,{href:"https://github.com/spr-networks/spr-nexmon/tree/main",children:"spr-nexmon here "}),"\nand barely-ap at ",(0,s.jsx)(n.a,{href:"https://github.com/spr-networks/barely-ap",children:"https://github.com/spr-networks/barely-ap"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);