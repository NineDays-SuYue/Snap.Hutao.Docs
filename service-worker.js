if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>a(e,d),f={module:{uri:d},exports:r,require:t};s[d]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cc9d59eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-392add74.js",revision:"9bb763c4c841ee09970e5cdeb67eb6ce"},{url:"assets/404.html-50e44b52.js",revision:"81574ccb592b78059753f372667a32f8"},{url:"assets/achievements.html-124df629.js",revision:"ee187192a9388c84968a924142942a9d"},{url:"assets/achievements.html-7e466c8a.js",revision:"38d58fb41bb5c2f37650175b1f136f2a"},{url:"assets/achievements.html-c513ff85.js",revision:"13257bfad14af1e5690c6d22726e7986"},{url:"assets/achievements.html-f0384ec7.js",revision:"e35ba90b3b36f8d314c3f5a4a1f5a38f"},{url:"assets/app-3add055f.js",revision:"67560960cc8a98588881357cc7180a7c"},{url:"assets/bug-report.html-1d79aed3.js",revision:"294d7a0da25e38b0011263105931b086"},{url:"assets/bug-report.html-4e9d3984.js",revision:"b5a7581c7b405c25b12161a867bb8a2d"},{url:"assets/bug-report.html-be008402.js",revision:"abf7a78f0ac7aa1be94d5c6cbe93a779"},{url:"assets/bug-report.html-f16f4add.js",revision:"ad8506864ec5b84f7abd50912860f5d5"},{url:"assets/character-data.html-335260d7.js",revision:"a0b738828e4d7fb08e5bc08f40ce1310"},{url:"assets/character-data.html-a8002393.js",revision:"2254e17d350c40120ae8d189e7df1cb4"},{url:"assets/character-data.html-d19c231c.js",revision:"242f391edb9a6cd8acf12141cef45385"},{url:"assets/character-data.html-efb5c10f.js",revision:"77be19a052ba782efc96b2fd2d55a8a6"},{url:"assets/character-wiki.html-47702f57.js",revision:"b4760002d1579c1b0a7ffada4283143f"},{url:"assets/character-wiki.html-6eb1a0ba.js",revision:"74ca76c8bb1de6eef640a245ff2ac63a"},{url:"assets/character-wiki.html-6f6ce2c3.js",revision:"7a2ea3fd8c7dd73fb1b1be46970c3a42"},{url:"assets/character-wiki.html-dda92f65.js",revision:"bb2c2c1b75115b3995ceb7839274ad31"},{url:"assets/community.html-50b00148.js",revision:"b54df1dd46514d070138d4a7e03098f1"},{url:"assets/community.html-77c874f1.js",revision:"80385e26f23e97b5719d3404dfbb7434"},{url:"assets/community.html-8264ee0b.js",revision:"e9ee1ce788ea63a9685db2bf0f1bb561"},{url:"assets/community.html-ca3a9fd7.js",revision:"da3d50f1e41863e32988d773d67ee7ad"},{url:"assets/component-15c5c06c.js",revision:"75cf0711bebe13b1aabe205e7d02b623"},{url:"assets/dashboard.html-065168c7.js",revision:"0633167ff0814abf2c2d9a45802a7d00"},{url:"assets/dashboard.html-22f8c199.js",revision:"fad5e19f66a4a3d3f59e9f7d08403d59"},{url:"assets/dashboard.html-2499d39c.js",revision:"3c27a70183e9922586ca23705be64128"},{url:"assets/dashboard.html-7761f84e.js",revision:"3acac688a8ced6b8671915162e00e847"},{url:"assets/develop-plan.html-6e34fa5d.js",revision:"3b32de3c97f7b1dff3b874951310dafa"},{url:"assets/develop-plan.html-a870290b.js",revision:"1e830251f967557f0da931f9c8217b2c"},{url:"assets/develop-plan.html-b039279a.js",revision:"cf23ebdd4e6ac390d7c997b91c62d831"},{url:"assets/develop-plan.html-bc44ef5d.js",revision:"632e53686546097570fb1c04069c658f"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-031ab9a3.js",revision:"25503f0133f09130150e5d67003c192f"},{url:"assets/exceptions.html-03923588.js",revision:"2abacb595e5e73cf81ab2b83ad00b78b"},{url:"assets/exceptions.html-44fb45f0.js",revision:"a1e9a6acb15a92d57d899f192fc00ad8"},{url:"assets/exceptions.html-8157d8c2.js",revision:"7754ffd0bf01f4d3058f9b5ef33abae4"},{url:"assets/FAQ.html-1446d3bf.js",revision:"b2fbbe502d01957dd1d78c0842ad1fee"},{url:"assets/FAQ.html-77b73d8a.js",revision:"5f8536f9094b1fc106a9a9b9c53b0116"},{url:"assets/FAQ.html-a18e4762.js",revision:"05eb346ff9c2c47f6e84073caafc1366"},{url:"assets/FAQ.html-d6fcc8da.js",revision:"868527bf6635cd1bc2e6d7dc63a5e661"},{url:"assets/Gacha-system-and-export-principal.html-07d8000b.js",revision:"8b3e9af1975cb63666d395a763321c73"},{url:"assets/Gacha-system-and-export-principal.html-35e3a9ed.js",revision:"3c3638cd085125cce959f5e7ebeef47c"},{url:"assets/Gacha-system-and-export-principal.html-b849f781.js",revision:"8b3e9af1975cb63666d395a763321c73"},{url:"assets/Gacha-system-and-export-principal.html-cf17a2c3.js",revision:"eecbaf6026c57f9c740c930e5d69c6ea"},{url:"assets/game-launcher.html-2f704534.js",revision:"2acd0549caa8fcd668a351e09a0bb9d9"},{url:"assets/game-launcher.html-35d9ee21.js",revision:"e072a1202c04a9067661571516e1951c"},{url:"assets/game-launcher.html-36fa2d21.js",revision:"1e92adf5a4496dfc7edab2688b21ef73"},{url:"assets/game-launcher.html-d7fe4a18.js",revision:"dd23b3227981340087b22714ecc8b427"},{url:"assets/get-stoken-cookie-from-the-third-party.html-62473c9a.js",revision:"199f3735671fe219602be348d4a26263"},{url:"assets/get-stoken-cookie-from-the-third-party.html-79747ca5.js",revision:"d96a87e875f0e6b8d110e1f0a18bf14e"},{url:"assets/get-stoken-cookie-from-the-third-party.html-7c0dd482.js",revision:"49984ee127d6f7b192a8ecd02a6cf5b0"},{url:"assets/get-stoken-cookie-from-the-third-party.html-a4274fa1.js",revision:"06b896c9ca11d40d6529e58f6be784f6"},{url:"assets/hutao-API.html-238785b2.js",revision:"5d598650629fc3a791aa56f22d89949f"},{url:"assets/hutao-API.html-cb4a61a9.js",revision:"7d187a2b5df682fde3a94f76e65b22cc"},{url:"assets/hutao-API.html-f065ae61.js",revision:"26891d71af2cf2d94f0ecbb36d0beb88"},{url:"assets/hutao-API.html-f49eaf10.js",revision:"c6d787c20eac6fd22e1b5e5769264b17"},{url:"assets/hutao-settings.html-0bb096e7.js",revision:"345fb1fa7ae346a9dced9ecb4705fb37"},{url:"assets/hutao-settings.html-4c5f1089.js",revision:"8318ec71a83b0301776bf57c68789768"},{url:"assets/hutao-settings.html-651ced9b.js",revision:"42234b41e5346a0ab7675435fa564997"},{url:"assets/hutao-settings.html-912ef253.js",revision:"9ea4dac748e8cf9e42eedd24dd13d469"},{url:"assets/i18n.html-5f0c763c.js",revision:"245eea16971cbe4a9d4a7cafbc1491ae"},{url:"assets/i18n.html-5fe8fe46.js",revision:"264355f7d45903e4eda0d77e4b7f6379"},{url:"assets/i18n.html-8932fa70.js",revision:"c95b206d4d3094ee7994e8d759ecca7e"},{url:"assets/i18n.html-ce4441c1.js",revision:"768561dba6699f54184996383b1d90c4"},{url:"assets/index-d20b7d60.js",revision:"b9928e9aef81ab1d6d1efd40dcabbde1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-00dbcbea.js",revision:"d210a3ce6137937431084074f6f939ce"},{url:"assets/index.html-03d426ee.js",revision:"99132696ba88dcb13f650faf425d2ae2"},{url:"assets/index.html-17ca9ac7.js",revision:"7dd590f8c047698ff83b514283bc13b1"},{url:"assets/index.html-20c8279c.js",revision:"b18e11fcfbde80295ae23690f908b046"},{url:"assets/index.html-5d90698d.js",revision:"aec1a4941ec99908f5213fd1e0501d38"},{url:"assets/index.html-62b6158d.js",revision:"356ee0c4228da555cf4f4ba153b11ded"},{url:"assets/index.html-75933301.js",revision:"8cab336214a624b17cc2e48e05290a0a"},{url:"assets/index.html-a11e92ca.js",revision:"125949acd095e8b558bd17eb0c8e7930"},{url:"assets/index.html-ac0b7bc3.js",revision:"f7b7a2292f2132a1aa2a9a3826f4f8b4"},{url:"assets/index.html-b2cf2c28.js",revision:"6abb654b8301097b7281bddab396b8c3"},{url:"assets/index.html-b3d5e0cc.js",revision:"eaa4ceb7c6e5a479244d458ecdcb7732"},{url:"assets/index.html-c5f77571.js",revision:"5d5826d63cd37b20f95294e85dc30119"},{url:"assets/index.html-c943e40a.js",revision:"1513c4e9f05d366715dfce2a3f109b6e"},{url:"assets/index.html-d6e83c3d.js",revision:"13968c17652c04898d776da5ad28dfd2"},{url:"assets/index.html-e4c52998.js",revision:"98ff829604cf215c70ee9f682efa6c25"},{url:"assets/index.html-ead0711a.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-ed3454ff.js",revision:"f1f739313ac09738deb3bf1e3163ac9b"},{url:"assets/index.html-f78206be.js",revision:"74e992174bca22a9d3ad730428e9006b"},{url:"assets/index.html-fb80080b.js",revision:"d852dada56f8eb7015e309a0f8fcc2ac"},{url:"assets/index.html-fd34ffbc.js",revision:"ce6e0e8723756f8b151a6c0d549d8557"},{url:"assets/known-issue.html-8b7fdb99.js",revision:"d4783c66e3164da6d0de40d9d7842a9e"},{url:"assets/known-issue.html-8e8b9acd.js",revision:"ad030c6ffcc8f5eef6a8051e4f65409a"},{url:"assets/known-issue.html-c05149bf.js",revision:"19949c43c6c5e3ed8323c530a0028a36"},{url:"assets/known-issue.html-e63fdea9.js",revision:"b48fe8cfea9baf4eeab838e9e305caea"},{url:"assets/menu.html-26e19633.js",revision:"34fffcbaabd99270b419ef17543cc3c3"},{url:"assets/menu.html-68335df6.js",revision:"d79f120d3345a72ee8d61ed02b90378f"},{url:"assets/menu.html-964ee84e.js",revision:"ef5540da39ed99c050fbeceef58ecf1c"},{url:"assets/menu.html-b91d883f.js",revision:"ba969cf195473f82b837c3a750d60270"},{url:"assets/mhy-account-switch.html-5cab048c.js",revision:"6b6282c34d33c26f70b34f7299883993"},{url:"assets/mhy-account-switch.html-60e9ae96.js",revision:"d4727212b5000bbf00db788abbf91ad9"},{url:"assets/mhy-account-switch.html-61981d27.js",revision:"27e0642744b3b07a42e13e43b2934790"},{url:"assets/mhy-account-switch.html-e7ebd02a.js",revision:"2e8614fc463066cb249d484ba57be7a4"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-09b28c46.js",revision:"8d86defeb2ffb2bbd2ab027fec4f9d49"},{url:"assets/privacy-notice.html-308a4cfa.js",revision:"98221171f97ac4275ed83d428d4aa22f"},{url:"assets/privacy-notice.html-43cfb1bb.js",revision:"9be956a558889716e99868524e59c7ec"},{url:"assets/privacy-notice.html-d6dcea86.js",revision:"dd9587ba6415469acbc58104f0a7c854"},{url:"assets/project.html-3e2dbab4.js",revision:"f056ab5f864a0cf9d19680278daf711d"},{url:"assets/project.html-41f89b8c.js",revision:"b246e924371a91d70a305078ce6b9156"},{url:"assets/project.html-5fc70136.js",revision:"6a86b715cbd982a7ec72f22849c5218f"},{url:"assets/project.html-e96a464c.js",revision:"330d9b45e33693425ad0d5e719efd571"},{url:"assets/quick-start.html-4f47c4ad.js",revision:"d7c0d33ac6928256a271765e73bc5bc8"},{url:"assets/quick-start.html-6fea300a.js",revision:"47591c3a02f9db6f4a37f550bcf803a6"},{url:"assets/quick-start.html-a1f49e05.js",revision:"64c665a21edaa64cb268ad0d2e83b27b"},{url:"assets/quick-start.html-d3a382c2.js",revision:"a5577bd26915799dbc434c9bfc543da2"},{url:"assets/real-time-notes.html-007137ef.js",revision:"880fd34450f89543ee25db38507bc3e5"},{url:"assets/real-time-notes.html-17c2202a.js",revision:"8edc8269810d20ce87f330ab5d85de85"},{url:"assets/real-time-notes.html-4ffa95f3.js",revision:"8c07d8cf042ce5f82e4413f1fe850581"},{url:"assets/real-time-notes.html-643bd877.js",revision:"d3e5933c09be867c219dc12d98febeae"},{url:"assets/side-load.html-0a93129d.js",revision:"94eccbca943cf21c74ad3a2523fa86f8"},{url:"assets/side-load.html-6103dfa9.js",revision:"94eccbca943cf21c74ad3a2523fa86f8"},{url:"assets/side-load.html-9cc44de3.js",revision:"b9588a8824b262e5f4c9f9a04f2b5f22"},{url:"assets/side-load.html-e04e7234.js",revision:"010f1b65a4e1468a0ee25d71827ce299"},{url:"assets/star-request.html-2ad37f25.js",revision:"19ad6f641682199034539ee6494e764e"},{url:"assets/star-request.html-4cb88d32.js",revision:"9a2c74d42fd22a93ed691e07eeefde02"},{url:"assets/star-request.html-a16e492e.js",revision:"0be114cc86ed6cc8053da2ee145e9409"},{url:"assets/star-request.html-c3e81b9d.js",revision:"a22b5441e97fd2817ba69c118b4c9a0d"},{url:"assets/style-0ffdefae.css",revision:"f0ecc447db4dc229cc2422625590c6e8"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-57f837bd.js",revision:"3a3cf155efb0288f3478fe066f80733d"},{url:"assets/symposium1.html-fcc754a5.js",revision:"ee5fa52dc6077cac042b0b51cafa5e7c"},{url:"assets/symposium2.html-28578958.js",revision:"b6e132ba438131db04c350b60f5884f6"},{url:"assets/symposium2.html-f0280800.js",revision:"50b99173532a5452dd7f6cbbd98e349b"},{url:"assets/tos.html-09235935.js",revision:"a4db382bafa2e5c697ab410898692754"},{url:"assets/tos.html-0ca00c1b.js",revision:"97454faa70702e0b6795be530e4d2185"},{url:"assets/tos.html-2697c794.js",revision:"33bebab8b98ef06466117d15c4bb90fa"},{url:"assets/tos.html-54e28697.js",revision:"502611d9d5e92663c830d0d377dd11e8"},{url:"assets/uninstall.html-30dc6a2d.js",revision:"d97a6b2cc73606163f0ea74c492791f8"},{url:"assets/uninstall.html-61b2cff8.js",revision:"967e6df52bb01ae81822689a8de2b49c"},{url:"assets/uninstall.html-e98d2832.js",revision:"3f53fc617a33113c342de94e2c4b875c"},{url:"assets/uninstall.html-f3e75a7a.js",revision:"571bc3e5d2eb1134737ba9132bbef16d"},{url:"assets/update-log.html-2a70e7c3.js",revision:"0723f31ca0bfeb8a0f148759181ce779"},{url:"assets/update-log.html-37a9b0a1.js",revision:"5cc8a0e2a7eec8c2bb614b1d3d87a638"},{url:"assets/update-log.html-60a35ed5.js",revision:"e5cb5c0114b8838f58e97ab13e99d065"},{url:"assets/update-log.html-aa5b8a86.js",revision:"4208991e8a66cb0d8cbd4abe3c268bab"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-2c1d6196.js",revision:"3c8e536b982122e68a767bbc49a2e80d"},{url:"assets/weapon-wiki.html-38a68cbb.js",revision:"dd8f6ad83d6297598e821737dc045545"},{url:"assets/weapon-wiki.html-410dd9e2.js",revision:"d7d775c199070969d8dbbbb722986fd8"},{url:"assets/weapon-wiki.html-5722a870.js",revision:"cc2cc392a122b9ebc57366c0fe755464"},{url:"assets/wish-export.html-19ecb384.js",revision:"3c751da73ddf3885470fee7edf5e32c8"},{url:"assets/wish-export.html-ade64173.js",revision:"52176f9fa42fd5154d294b4824c2d3df"},{url:"assets/wish-export.html-bf2129bc.js",revision:"5d89e532d80abcf4600d1651ea2e54f3"},{url:"assets/wish-export.html-e367596f.js",revision:"0538df7a95bd1e92ce85ccedbc8c0119"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"c0368c03e6045e346105234706be1339"},{url:"404.html",revision:"d803092ca5c6c2f9b7b3a060e6b0f663"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
