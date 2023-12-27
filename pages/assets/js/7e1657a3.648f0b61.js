"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[1400],{77815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(85893),s=t(11151);const r={slug:"wifi6",title:"Gigabit WiFi with SPR & The 4x4 MT7915",authors:"ltsrad",tags:["SPR","wifi6","80211ax"]},a=void 0,o={permalink:"/pages/blog/wifi6",source:"@site/blog/2022-04-13-gigabit-wifi-mt7915.md",title:"Gigabit WiFi with SPR & The 4x4 MT7915",description:"Intro",date:"2022-04-13T00:00:00.000Z",formattedDate:"April 13, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"wifi6",permalink:"/pages/blog/tags/wifi-6"},{label:"80211ax",permalink:"/pages/blog/tags/80211-ax"}],readingTime:2.29,hasTruncateMarker:!1,authors:[{name:"Alex Radocea",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"wifi6",title:"Gigabit WiFi with SPR & The 4x4 MT7915",authors:"ltsrad",tags:["SPR","wifi6","80211ax"]},unlisted:!1,prevItem:{title:"SPR Supports WPA3 with Multiple Passwords",permalink:"/pages/blog/multipsk and wpa3"},nextItem:{title:"Running SPR on a Mini PC with WiFi 6",permalink:"/pages/blog/spr_mini_pc"}},l={authorsImageUrls:[void 0]},c=[{value:"Intro",id:"intro",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Hostapd configuration",id:"hostapd-configuration",level:2},{value:"Perf Test",id:"perf-test",level:2},{value:"On SPR:",id:"on-spr",level:4},{value:"On the station:",id:"on-the-station",level:4},{value:"Performance results",id:"performance-results",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,i.jsx)(n.p,{children:"In this post we'll cover how to configure hostapd with the mt7915 to run 160 MHz channels over 5ghz.\nThis allows stations to break gigabit speeds for WiFi with only 2 spatial streams."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A 160Mhz capable card on the SPR device, for example ",(0,i.jsx)(n.a,{href:"https://www.asiarf.com/shop/wifi-wlan/wifi_mini_pcie/wifi6-4t4r-dual-bands-selectable-mpcie-card-ieee802-11ax-ac-a-b-g-n-2-4g-5ghz-aw7915-np1/",children:"AsiaRF's AW7915-NP1"})]}),"\n",(0,i.jsxs)(n.li,{children:["160MHz capable client wifi card, such as ",(0,i.jsx)(n.a,{href:"https://www.intel.com/content/www/us/en/products/sku/204836/intel-wifi-6e-ax210-gig/specifications.html",children:"Intel's AX210"}),". ",(0,i.jsx)(n.a,{href:"https://ark.intel.com/content/www/us/en/ark/products/130293/intel-wifi-6-ax201-gig.html",children:"Intel's AX201 and AX200"})," also have 160Mhz support for 5ghz."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set up your AP device according to the ",(0,i.jsx)(n.a,{href:"/docs/setup_guides/setup_run_spr",children:"SPR Setup Guide"})]}),"\n",(0,i.jsxs)(n.li,{children:["For mt7915, run a mainline kernel or a kernel with fixes from ",(0,i.jsx)(n.code,{children:"https://github.com/openwrt/mt76"})," and the latest firmware. I'll publish some updates to building SPR with these in the near future. Fixes are needed for DFS support."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hostapd-configuration",children:"Hostapd configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Modify ",(0,i.jsx)(n.code,{children:"config/wifi/hostpad.conf"})]}),"\n",(0,i.jsx)(n.li,{children:"Make sure vht_capab includes [VHT160] and [SHORT-GI-160]"}),"\n",(0,i.jsx)(n.li,{children:"Make sure to set vht_oper_chwidth/he_oper_chwidth set to 2."}),"\n",(0,i.jsx)(n.li,{children:"For the channel configuration, the following are valid 160mhz centers on 5ghz: [50, 114, 163]. Set the vht/he_oper_centr_freq_seg0_idx to these values and the channel to the center value - 14."}),"\n",(0,i.jsx)(n.li,{children:"Set ieee80211ax to 1"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ctrl_interface=/state/wifi/control\ncountry_code=US\ninterface=wlan0\nssid=TestLab\nhw_mode=a\nieee80211d=1\nieee80211h=1\nieee80211n=1\nieee80211ac=1\nieee80211ax=1\nhe_su_beamformer=1\nhe_su_beamformee=1\nhe_mu_beamformer=1\nwmm_enabled=1\npreamble=1\nht_capab=[LDPC][HT40+][HT40-][GF][SHORT-GI-20][SHORT-GI-40]\nvht_capab=[MAX-MPDU-7991][SU-BEAMFORMEE][SU-BEAMFORMER][VHT160][RXLDPC][SHORT-GI-160][SHORT-GI-80][MAX-A-MPDU-LEN-EXP3][RX-ANTENNA-PATTERN][TX-ANTENNA-PATTERN][TX-STBC-2BY1][RX-STBC-1][MU-BEAMFORMER[[MU-BEAMFORMEE]\nvht_oper_chwidth=2\nhe_oper_chwidth=2\nchannel=36\nvht_oper_centr_freq_seg0_idx=50\nhe_oper_centr_freq_seg0_idx=50\nauth_algs=1\nwpa=2\nwpa_key_mgmt=WPA-PSK WPA-PSK-SHA256 SAE\nrsn_pairwise=CCMP\n\n# Security parameters\n\n# Isolate stations and per-station group keys\nap_isolate=1\nmulticast_to_unicast=1\n\n# Mitigate krack attack\nwpa_disable_eapol_key_retries=1\n\n# VLAN\nper_sta_vif=1\n\n# Passwords\n\nsae_psk_file=/configs/wifi/sae_passwords\nwpa_psk_file=/configs/wifi/wpa2pskfile\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Restart hostapd"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"root@pirouter:~/super# docker compose restart wifid\n"})}),"\n",(0,i.jsx)(n.p,{children:"If anything has gone wrong, check the docker compose logs for the wifid service."}),"\n",(0,i.jsx)(n.h2,{id:"perf-test",children:"Perf Test"}),"\n",(0,i.jsx)(n.p,{children:"Running iperf3 on the SPR device, and iperf3 on a client with AX210 chip, we see the following:"}),"\n",(0,i.jsx)(n.h4,{id:"on-spr",children:"On SPR:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"iw wls6 info"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Interface wls6\n        ifindex 5\n        wdev 0x1\n        addr 00:0a:52:07:32:c9\n        ssid testlab\n        type AP\n        wiphy 0\n        channel 100 (5500 MHz), width: 160 MHz, center1: 5570 MHz\n        txpower 23.00 dBm\n        multicast TXQ:\n                qsz-byt qsz-pkt flows   drops   marks   overlmt hashcol tx-bytes        tx-packets\n                0       0       246     0       0       0       0       27114           272\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"iperf3 -s"})}),"\n",(0,i.jsx)(n.h4,{id:"on-the-station",children:"On the station:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"iperf3 -c 192.168.2.1"})}),"\n",(0,i.jsx)(n.h4,{id:"performance-results",children:"Performance results"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Accepted connection from 192.168.2.26, port 56156\n[  5] local 192.168.2.1 port 5201 connected to 192.168.2.26 port 56158\n[ ID] Interval           Transfer     Bitrate                                                         \n[  5]   0.00-1.00   sec   139 MBytes  1.17 Gbits/sec                   \n[  5]   1.00-2.00   sec   126 MBytes  1.06 Gbits/sec                  \n[  5]   2.00-3.00   sec   141 MBytes  1.18 Gbits/sec                  \n[  5]   3.00-4.00   sec   137 MBytes  1.15 Gbits/sec                  \n[  5]   4.00-5.00   sec   152 MBytes  1.27 Gbits/sec                  \n[  5]   5.00-6.00   sec   153 MBytes  1.28 Gbits/sec                  \n[  5]   6.00-7.00   sec   155 MBytes  1.30 Gbits/sec                  \n[  5]   7.00-8.00   sec   148 MBytes  1.24 Gbits/sec                  \n[  5]   8.00-9.00   sec   145 MBytes  1.21 Gbits/sec                  \n[  5]   9.00-10.00  sec   119 MBytes   995 Mbits/sec                                                  \n[  5]  10.00-10.00  sec   482 KBytes  1.22 Gbits/sec                                                  \n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);