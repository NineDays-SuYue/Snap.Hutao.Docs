import{_ as c,c as h,a as e,b as a,d as s,e as o,f as r,r as u,o as p}from"./app-C7Lk6GNe.js";const g={};function m(w,t){const l=u("RouteLink"),d=u("Tabs");return p(),h("div",null,[t[10]||(t[10]=e("h1",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq"},[e("span",null,"FAQ")])],-1)),e("p",null,[t[1]||(t[1]=a("If the following answers can not solve your issue, feel free to ")),s(l,{to:"/ru/statements/bug-report.html"},{default:o(()=>t[0]||(t[0]=[a("report bug to us")])),_:1}),t[2]||(t[2]=a("!"))]),t[11]||(t[11]=r('<h2 id="how-to-create-desktop-shortcut-with-no-admin-privilege" tabindex="-1"><a class="header-anchor" href="#how-to-create-desktop-shortcut-with-no-admin-privilege"><span>How to create desktop shortcut (with no admin privilege)</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Community Power</p><p>Thanks to <a href="https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12" target="_blank" rel="noopener noreferrer">solution provided by CzHUV</a>。</p></div><ul><li>Use <code>Win+R</code> to start run, in the window input <code>shell:AppsFolder</code> <img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png" alt="Run" loading="lazy"></li><li>In the new pop-up window, find Snap Hutao</li><li>Right lick on it, and click <code>Create shortcut</code></li><li>Confirm the operation and you will get the desktop shortcut</li></ul><h2 id="how-to-create-desktop-shortcut-with-administrator-privilege" tabindex="-1"><a class="header-anchor" href="#how-to-create-desktop-shortcut-with-administrator-privilege"><span>How to create desktop shortcut with Administrator privilege</span></a></h2><p>Starting from Snap Hutao 1.7.4, you can create a desktop shortcut with Administrator privilege by click <code>Create Desktop Shortcut</code> in the settings page.</p><p>You can move this shortcut to any place you need.</p><h2 id="how-to-run-snap-hutao-when-windows-starts" tabindex="-1"><a class="header-anchor" href="#how-to-run-snap-hutao-when-windows-starts"><span>How to run Snap Hutao when Windows starts</span></a></h2><p><strong>This is a workaround solution</strong></p><ul><li>Create a bat file, content refers to <a href="https://github.com/DGP-Studio/Snap.Hutao/issues/184" target="_blank" rel="noopener noreferrer">this Issue</a>, it allows bat to run Snap Hutao with Administrator privilege</li><li>Create a Scheduled Task, run the bat when Windows startup, or drag it to Windows start folder</li></ul><h2 id="use-snap-hutao-to-quick-start-the-game" tabindex="-1"><a class="header-anchor" href="#use-snap-hutao-to-quick-start-the-game"><span>Use Snap Hutao to quick start the game</span></a></h2><ul><li><p>Config the game launcher in the settings</p></li><li><p>Pin Snap Hutao on taskbar</p></li><li><p>Right click on Snap Hutao and you will see the quick launcher</p><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png" alt="quick-start" loading="lazy"></p></li><li><p>Select <code>Lauch Game</code>, you will be asked which account to start the game</p></li></ul><h2 id="use-snap-hutao-with-network-proxy" tabindex="-1"><a class="header-anchor" href="#use-snap-hutao-with-network-proxy"><span>Use Snap Hutao with Network Proxy</span></a></h2>',12)),e("p",null,[t[4]||(t[4]=a("Refer to ")),s(l,{to:"/ru/advanced/exceptions.html#_502-bad-gateway"},{default:o(()=>t[3]||(t[3]=[a("HttpRequestException Error (502)")])),_:1}),t[5]||(t[5]=a(" document"))]),t[12]||(t[12]=r('<h2 id="mojibake-in-snap-hutao" tabindex="-1"><a class="header-anchor" href="#mojibake-in-snap-hutao"><span>Mojibake in Snap Hutao</span></a></h2><ul><li>If you are using Windows 10 and see some button are not display properly <ul><li>You can download <code>Segoe Fluent Icons</code> font</li><li>You need to install it for all users</li></ul></li><li>You can find this font from <a href="https://aka.ms/SegoeFluentIcons" target="_blank" rel="noopener noreferrer">Microsoft</a></li></ul><h2 id="mihoyo-bbs-account-often-lose-login-status" tabindex="-1"><a class="header-anchor" href="#mihoyo-bbs-account-often-lose-login-status"><span>MiHoYo BBS Account often Lose Login Status</span></a></h2><p>Snap Hutao use saved MiHoYo BBS cookies to maintain login status. If you <strong>log out</strong> your account in your browser or other device, cookie will become invalid, and Snap Hutao will also be forced to log out, account will be automatically removed.</p><p>This problem may also be caused by network error, you should check this first; If it&#39;s not caused by network issue, you can use <code>Refresh Cookie</code> in the account panel; You can also remove your account manually and add it back again.</p><p>Since October 2022, MiYouShe (Chinese BBS) rapidly increased bot detection and may set users&#39; account as under-risk status, this may cause Snap Hutao failed to check validation of the cookie</p><h2 id="game-account-lose-login-status-in-the-launcher" tabindex="-1"><a class="header-anchor" href="#game-account-lose-login-status-in-the-launcher"><span>Game Account Lose Login Status in the Launcher</span></a></h2><ul><li>There are two factors associated with game account login status: network and device ID</li><li>This issue usually caused by: <ul><li>Change of public IP address</li><li>Change of network adapter or network adapter MAC address</li><li>Failed saving operation, no real login status been saved (Snap Hutao cannot detect if the status is real valid) <ul><li>Make sure to enter the game after sign in</li><li>Make sure the game process is gone after closing the game</li><li>Detect the account again to save your login status</li></ul></li></ul></li></ul><h2 id="snap-hutao-throws-failed-to-add-scheduled-task-error" tabindex="-1"><a class="header-anchor" href="#snap-hutao-throws-failed-to-add-scheduled-task-error"><span>Snap Hutao Throws Failed to add Scheduled Task Error</span></a></h2><p>If you are using Administrator privilege to start real-time notes feature, Snap Hutao&#39;s scheduled task will be created as Administrator role. When next time edit real-time notes settings without Administrator privilege, the program will have a lack of privilege to edit the settings and throw out this error.</p><p>Run Snap Hutao as Administrator to edit your settings to solve this issue.</p><h2 id="stuck-at-installing-required-framework-when-using-msix-package-to-install" tabindex="-1"><a class="header-anchor" href="#stuck-at-installing-required-framework-when-using-msix-package-to-install"><span>Stuck at <code>Installing Required Framework</code> when Using MSIX Package to Install</span></a></h2><ul><li>When user&#39;s OS missing required dependency framework, Windows will download and install it automatically. However, if the user disabled Windows Update or have a bad network, the system is unable to process this installation. <ul><li>Make sure Windows Update is enabled; Snap Hutao&#39;s update also relies on it</li><li>You can also download and install the <a href="ttps://d.hut.ao/releases/Dependency" target="_blank" rel="noopener noreferrer">dependency</a> manually</li></ul></li></ul><h2 id="unable-to-run-snap-hutao-as-administrator" tabindex="-1"><a class="header-anchor" href="#unable-to-run-snap-hutao-as-administrator"><span>Unable to Run Snap Hutao as Administrator</span></a></h2><blockquote><p>This issue only occurs in Windows 10 older than 22H2 version</p></blockquote><ul><li>When user&#39;s OS version older than <code>Windows Build 19045</code> (aka Windows 10 22H2), Snap Hutao is unable to start when running as Administrator <ul><li>This issue comes from Windows kernel, and it&#39;s hard to locate, so we suggest you to update your OS to the latest version</li></ul></li></ul><h2 id="how-to-recover-config-ini-configuration-file" tabindex="-1"><a class="header-anchor" href="#how-to-recover-config-ini-configuration-file"><span>How to Recover <code>config.ini</code> Configuration File</span></a></h2><p>In some particular conditions (such as wrong game folder permission), <code>config.ini</code> may lose after server conversion. This will cause user not able to get into advanced launcher page and launch the game.</p><p>After identify the server version on your device, you can manually create and fill the configuration file with the right content. The following are common configurations.</p>',19)),s(d,{id:"247",data:[{id:"CN Server Official"},{id:"Global Server Official"}],"tab-id":"game_config_samples"},{title0:o(({value:n,isActive:i})=>t[6]||(t[6]=[a("CN Server Official")])),title1:o(({value:n,isActive:i})=>t[7]||(t[7]=[a("Global Server Official")])),tab0:o(({value:n,isActive:i})=>t[8]||(t[8]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"[General]")]),a(`
`),e("span",{class:"line"},[e("span",null,"channel=1")]),a(`
`),e("span",{class:"line"},[e("span",null,"cps=mihoyo")]),a(`
`),e("span",{class:"line"},[e("span",null,"game_version=4.1.0")]),a(`
`),e("span",{class:"line"},[e("span",null,"sub_channel=1")]),a(`
`),e("span",{class:"line"},[e("span",null,"plugin_7_version=1.0.0")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:o(({value:n,isActive:i})=>t[9]||(t[9]=[e("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",null,"[General]")]),a(`
`),e("span",{class:"line"},[e("span",null,"channel=1")]),a(`
`),e("span",{class:"line"},[e("span",null,"cps=mihoyo")]),a(`
`),e("span",{class:"line"},[e("span",null,"game_version=4.1.0")]),a(`
`),e("span",{class:"line"},[e("span",null,"sub_channel=0")]),a(`
`),e("span",{class:"line"},[e("span",null,"plugin_7_version=1.0.0")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),t[13]||(t[13]=e("h2",{id:"how-to-fully-backup-recover-client-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-fully-backup-recover-client-data"},[e("span",null,"How to Fully Backup/Recover Client Data")])],-1)),t[14]||(t[14]=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Data Security Warning"),e("p",null,[e("code",null,"Userdata.db"),a(" contains all client data, including MiHoYO BBS Cookie, please save the data file properly and do NOT share it with anyone.")])],-1)),t[15]||(t[15]=e("p",null,[a("Copy "),e("code",null,"Userdata.db"),a(" from Snap Hutao data folder ("),e("code",null,"%userprofile%/Documents/Hutao"),a(" by default) to your backup location, this file contains entire data of the client.")],-1))])}const k=c(g,[["render",m],["__file","FAQ.html.vue"]]),b=JSON.parse('{"path":"/ru/advanced/FAQ.html","title":"FAQ","lang":"ru-RU","frontmatter":{"headerDepth":2,"icon":"iconfont icon-ask","category":["FAQ"],"order":1,"description":"FAQ If the following answers can not solve your issue, feel free to ! How to create desktop shortcut (with no admin privilege) Community Power Thanks to solution provided by CzH...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/FAQ.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/advanced/FAQ.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/FAQ.html"}],["meta",{"property":"og:url","content":"https://hut.ao/ru/advanced/FAQ.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"FAQ"}],["meta",{"property":"og:description","content":"FAQ If the following answers can not solve your issue, feel free to ! How to create desktop shortcut (with no admin privilege) Community Power Thanks to solution provided by CzH..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:updated_time","content":"2024-01-07T06:52:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T06:52:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FAQ\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png\\",\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png\\"],\\"dateModified\\":\\"2024-01-07T06:52:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/ru/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"How to create desktop shortcut (with no admin privilege)","slug":"how-to-create-desktop-shortcut-with-no-admin-privilege","link":"#how-to-create-desktop-shortcut-with-no-admin-privilege","children":[]},{"level":2,"title":"How to create desktop shortcut with Administrator privilege","slug":"how-to-create-desktop-shortcut-with-administrator-privilege","link":"#how-to-create-desktop-shortcut-with-administrator-privilege","children":[]},{"level":2,"title":"How to run Snap Hutao when Windows starts","slug":"how-to-run-snap-hutao-when-windows-starts","link":"#how-to-run-snap-hutao-when-windows-starts","children":[]},{"level":2,"title":"Use Snap Hutao to quick start the game","slug":"use-snap-hutao-to-quick-start-the-game","link":"#use-snap-hutao-to-quick-start-the-game","children":[]},{"level":2,"title":"Use Snap Hutao with Network Proxy","slug":"use-snap-hutao-with-network-proxy","link":"#use-snap-hutao-with-network-proxy","children":[]},{"level":2,"title":"Mojibake in Snap Hutao","slug":"mojibake-in-snap-hutao","link":"#mojibake-in-snap-hutao","children":[]},{"level":2,"title":"MiHoYo BBS Account often Lose Login Status","slug":"mihoyo-bbs-account-often-lose-login-status","link":"#mihoyo-bbs-account-often-lose-login-status","children":[]},{"level":2,"title":"Game Account Lose Login Status in the Launcher","slug":"game-account-lose-login-status-in-the-launcher","link":"#game-account-lose-login-status-in-the-launcher","children":[]},{"level":2,"title":"Snap Hutao Throws Failed to add Scheduled Task Error","slug":"snap-hutao-throws-failed-to-add-scheduled-task-error","link":"#snap-hutao-throws-failed-to-add-scheduled-task-error","children":[]},{"level":2,"title":"Stuck at Installing Required Framework when Using MSIX Package to Install","slug":"stuck-at-installing-required-framework-when-using-msix-package-to-install","link":"#stuck-at-installing-required-framework-when-using-msix-package-to-install","children":[]},{"level":2,"title":"Unable to Run Snap Hutao as Administrator","slug":"unable-to-run-snap-hutao-as-administrator","link":"#unable-to-run-snap-hutao-as-administrator","children":[]},{"level":2,"title":"How to Recover config.ini Configuration File","slug":"how-to-recover-config-ini-configuration-file","link":"#how-to-recover-config-ini-configuration-file","children":[]},{"level":2,"title":"How to Fully Backup/Recover Client Data","slug":"how-to-fully-backup-recover-client-data","link":"#how-to-fully-backup-recover-client-data","children":[]}],"git":{"createdTime":1673426652000,"updatedTime":1704610369000,"contributors":[{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":26,"url":"https://github.com/Masterain"},{"name":"QweRez","username":"QweRez","email":"xtoyougg@gmail.com","commits":1,"url":"https://github.com/QweRez"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mr.Hope"}]},"readingTime":{"minutes":2.89,"words":867},"filePathRelative":"ru/advanced/FAQ.md","localizedDate":"11 января 2023 г.","autoDesc":true}');export{k as comp,b as data};
