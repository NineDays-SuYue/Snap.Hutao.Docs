if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>a(e,d),f={module:{uri:d},exports:r,require:t};s[d]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cc9d59eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-3152ea96.js",revision:"2ef936b8fff8488349e06cd17ab6af7b"},{url:"assets/404.html-392add74.js",revision:"9bb763c4c841ee09970e5cdeb67eb6ce"},{url:"assets/achievements.html-8117d04c.js",revision:"0c85dbd2e3df4ba8e4f1b51356afdc93"},{url:"assets/achievements.html-97e8a4be.js",revision:"c3c528dfad0ca74f59eca13f3defbe7f"},{url:"assets/achievements.html-a40cf8e0.js",revision:"627087c2b461a4f30d91ffb134e7bfee"},{url:"assets/achievements.html-b4f0b9f3.js",revision:"64eefaf767975c613de17e8d509310a7"},{url:"assets/app-180e7e84.js",revision:"dedbbfb3e30ec556dca2cf85c950d3cc"},{url:"assets/bug-report.html-2a9a2da4.js",revision:"35bc0929d47ded28fc9cbbc664718277"},{url:"assets/bug-report.html-49b70aa7.js",revision:"9ae259b716c01d8aa5b8c4f3dddf9037"},{url:"assets/bug-report.html-6058d767.js",revision:"9355cd6f01b3e46092d5f468122e5603"},{url:"assets/bug-report.html-a6e8c299.js",revision:"0f043b66525940b6156bc2116770e981"},{url:"assets/character-data.html-1fe02eed.js",revision:"c8fbc084f8b91b10fb8c418aacf2fe8b"},{url:"assets/character-data.html-719b9d94.js",revision:"0dcfc285f9564e1221b95ea0a7d2b968"},{url:"assets/character-data.html-d45ac7b7.js",revision:"7c17185a2f4ee26d21180a18a41f0fb5"},{url:"assets/character-data.html-f59fac7c.js",revision:"ecd8f5fc10d0655ecebc3025e9868e24"},{url:"assets/character-wiki.html-72f2fb28.js",revision:"bc5bf8b3e878c0526d9ad05d8193a023"},{url:"assets/character-wiki.html-8632c834.js",revision:"effe7f628084b5e525574f4706d303f5"},{url:"assets/character-wiki.html-8767f568.js",revision:"e6f6615a64918ef4fd1344d120b39040"},{url:"assets/character-wiki.html-f5c241cf.js",revision:"193c9e6f7e25caafa3b69b160ae73ac8"},{url:"assets/community.html-157b5bb6.js",revision:"40393cb5464d30625ea057cc2de98b2f"},{url:"assets/community.html-1851f335.js",revision:"182248c9a4d638b68e56679822b3d24a"},{url:"assets/community.html-ee762065.js",revision:"24e625b1d7e08f76a4991968ceac4e21"},{url:"assets/community.html-fb5b81f3.js",revision:"e9427e905a4d8a04f6d2162bf124bf3d"},{url:"assets/component-65ab85f1.js",revision:"27b4ad3f0c7bd93d68809315c083a691"},{url:"assets/develop-plan.html-4ea5a0c0.js",revision:"495f692c44ee2a4b2afea77beda4bcda"},{url:"assets/develop-plan.html-a2b0e4e5.js",revision:"eedc58ce752304db36913698c00691e9"},{url:"assets/develop-plan.html-ab49d30e.js",revision:"a04b05e3ad8ad5f388f8541447505589"},{url:"assets/develop-plan.html-b75d7412.js",revision:"2255e549d2056a3d2f61d5147f372ec4"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-2169a150.js",revision:"f08737e7f95b15dc46ce67ad688f1f33"},{url:"assets/exceptions.html-2e7fef39.js",revision:"e4833dd17583b602f2747000bbe9fa45"},{url:"assets/exceptions.html-ac06d062.js",revision:"cefeb4e6c23377adf16d0fa767f0817d"},{url:"assets/exceptions.html-b4d64cdd.js",revision:"cd5c760a125238c95216a6d6ca2d8e8b"},{url:"assets/FAQ.html-35cf3b82.js",revision:"d15bfe088ae0062265bb942bb6a1dbac"},{url:"assets/FAQ.html-6d2f86fc.js",revision:"4d8a9c331650abf137585d0bf916f06e"},{url:"assets/FAQ.html-9b6ca765.js",revision:"d00249886ce9ee11eba91a800d0857fa"},{url:"assets/FAQ.html-fe66504b.js",revision:"b6c13bfdc71c84b997a7a88533e4b411"},{url:"assets/framework-8be3ab77.js",revision:"f6ed5f20c831959a0e3646a27021139b"},{url:"assets/Gacha-system-and-export-principal.html-4770640b.js",revision:"2e792429308b20e535424aaad3b5c363"},{url:"assets/Gacha-system-and-export-principal.html-7eaacb59.js",revision:"ccd6078b76229f2d36341cddda813110"},{url:"assets/Gacha-system-and-export-principal.html-853037f5.js",revision:"46fde554e90d5194293cc4010dcdb1c9"},{url:"assets/Gacha-system-and-export-principal.html-adee93ff.js",revision:"ccd6078b76229f2d36341cddda813110"},{url:"assets/game-launcher.html-1016c709.js",revision:"15ac75c2873cd31554c7d579450c5d10"},{url:"assets/game-launcher.html-3a595d86.js",revision:"9d9b5bad1b85447f152267db74dd7d65"},{url:"assets/game-launcher.html-9485cb36.js",revision:"b130590b359189cdf7c9270a1ddb1921"},{url:"assets/game-launcher.html-d3a1a744.js",revision:"8cdb93be852f538ada605229fb4cfbb3"},{url:"assets/get-stoken-cookie-from-the-third-party.html-1058bb32.js",revision:"94e1d867a23eea7e90c4e478f27fc737"},{url:"assets/get-stoken-cookie-from-the-third-party.html-32d0a398.js",revision:"85522beb1dc1d36e4c7996b259864de4"},{url:"assets/get-stoken-cookie-from-the-third-party.html-520f4ee1.js",revision:"3cd3986f789dd8157a905c67cad86a75"},{url:"assets/get-stoken-cookie-from-the-third-party.html-865dbdf0.js",revision:"fbd88a09535232b3ed45e585ac290d79"},{url:"assets/hutao-API.html-00a1642e.js",revision:"caff9ffa3272a10e36720a8fa0a406f6"},{url:"assets/hutao-API.html-649782e1.js",revision:"b0a62a93551169bc79269e1f7c14d0bf"},{url:"assets/hutao-API.html-767e6bb1.js",revision:"723414acd6bd20fcd7e7f03bbc6f8649"},{url:"assets/hutao-API.html-84c4f476.js",revision:"5650df942240a84c4bbc7cad2ed2d00e"},{url:"assets/hutao-settings.html-0516ff4b.js",revision:"3fb7d2926eee0bb717f3ed007eb34043"},{url:"assets/hutao-settings.html-1e504fa0.js",revision:"3c85fad9c084354910a57b790708b6b6"},{url:"assets/hutao-settings.html-55d052a6.js",revision:"1b9b242781649c57e1444c951e562987"},{url:"assets/hutao-settings.html-94601c84.js",revision:"c23288c5fd1757e4d0b10938fee52ce9"},{url:"assets/i18n.html-74c5c7e2.js",revision:"772f73d86498419c7d493ef7831ac3c4"},{url:"assets/i18n.html-ab40d114.js",revision:"6a7a0c9b9177fa269431014800ad941d"},{url:"assets/i18n.html-ae78c768.js",revision:"8805d1902fac4ce3171e0b180a2ce36d"},{url:"assets/i18n.html-ef362d15.js",revision:"fcd1dd90d417c24ae51e8fc646e10087"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-ade63bb5.js",revision:"55ae4af078c343139023fb1f7cc0cf26"},{url:"assets/index.html-0c1ef835.js",revision:"d870bebd8b027f808e06b2653b432499"},{url:"assets/index.html-14e304a7.js",revision:"68eafbefaa8a795889753a88e57e7075"},{url:"assets/index.html-1ea01100.js",revision:"dad98045005be31796b8fdd25ebfb215"},{url:"assets/index.html-26bb78d0.js",revision:"48c991ea05d565857ff188dbff3d153a"},{url:"assets/index.html-2b1921cb.js",revision:"c220da76c5b4eac88b368045208fc071"},{url:"assets/index.html-316c8240.js",revision:"4cda2504d12fcaa99537ef62ba64b3b5"},{url:"assets/index.html-5f3a3c84.js",revision:"6e602fe6ac8051db1f292950db4ebc78"},{url:"assets/index.html-88564790.js",revision:"7cc8634265ee6e9e04cba6cca3df4ffb"},{url:"assets/index.html-8b0bd72f.js",revision:"35bfc1d22940be043ca7e5476ec7c21c"},{url:"assets/index.html-952217e3.js",revision:"32ac7b302499da95e9cf93bd55012b5f"},{url:"assets/index.html-c0f9c75d.js",revision:"8075bddcca4be6f8503ca3bff5b26835"},{url:"assets/index.html-c16a5239.js",revision:"a687540769a0110482a209172d4b6ec3"},{url:"assets/index.html-c41eac72.js",revision:"f789cdf71e0f1b400b54850505a5b424"},{url:"assets/index.html-cd68ea6e.js",revision:"577dff886a0ba9caef58bc5a88a16c1f"},{url:"assets/index.html-d4b53319.js",revision:"c2dcbcfe3271e6a29ad9b3acda6d6390"},{url:"assets/index.html-db394eaf.js",revision:"8b584939fe4f84af12598c0217ce2faa"},{url:"assets/index.html-ead0711a.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-ec66f958.js",revision:"534e97062543ce6a9f2601735154b362"},{url:"assets/index.html-f6e81126.js",revision:"e6dde44c9c88920b201056e352f16726"},{url:"assets/index.html-fac48cef.js",revision:"0670b0fa15461a81263aeabd1a297a97"},{url:"assets/known-issue.html-38311247.js",revision:"d6695c4a748f2d7a9a5020b5c1b97990"},{url:"assets/known-issue.html-456ce03d.js",revision:"962a64f5f93ccd3d2f440309277c508d"},{url:"assets/known-issue.html-7521a7b3.js",revision:"219fda8320a5633cebbf7e5f28a06614"},{url:"assets/known-issue.html-d69c4bff.js",revision:"c8c236ca6b97144e4ecc6dc63acf7d9d"},{url:"assets/mhy-account-switch.html-52192b96.js",revision:"23ca30fda52474bb073b447e62042ddd"},{url:"assets/mhy-account-switch.html-55ba98c3.js",revision:"7bab10e48c9d188bd6920a62c2da4c59"},{url:"assets/mhy-account-switch.html-dcbe0027.js",revision:"124831a15a8ce7614b2f60a87d29d8d0"},{url:"assets/mhy-account-switch.html-fa72bc8b.js",revision:"4588bf1dbe5666ed171cb5c138c3c164"},{url:"assets/mihoyo-risk-tip.html-1ba22612.js",revision:"680c93cc2d48a6b297295f99338e793a"},{url:"assets/mihoyo-risk-tip.html-3b9124dc.js",revision:"3e315df4590dce5f1e4f452ee185dc96"},{url:"assets/mihoyo-risk-tip.html-953fd5f3.js",revision:"903eff60249e34d1c28c94b9f7372c02"},{url:"assets/mihoyo-risk-tip.html-9f88b447.js",revision:"d3f80f02d40950532e5984d12d5f24f9"},{url:"assets/photoswipe.esm-36cd6c3c.js",revision:"7f077f2378073a467463061ba916d854"},{url:"assets/privacy-notice.html-2dde0de5.js",revision:"239528d7fbaa8a22e8c085ff8117f565"},{url:"assets/privacy-notice.html-4d9aedad.js",revision:"fe0e933074dcee4d7802ae21408ffa9f"},{url:"assets/privacy-notice.html-789465cc.js",revision:"3d77a50e80dc43b11c0a0d8c598d641f"},{url:"assets/privacy-notice.html-b602f4cd.js",revision:"3ea9c36d7ea2b06c731ebcbf1b727503"},{url:"assets/project.html-0650083e.js",revision:"0c810822ea2990c30622355091002a7e"},{url:"assets/project.html-11af8d5b.js",revision:"b33420feefb1e005143e6fc2b9f35190"},{url:"assets/project.html-19f093f4.js",revision:"a36839e2df7353599265f3e3e5256805"},{url:"assets/project.html-473b3158.js",revision:"2f90b17ecd1fd02aae549b6461073314"},{url:"assets/quick-start.html-4d65a6d8.js",revision:"ede5dddd4d7ff3a52ea7bd603540b2b1"},{url:"assets/quick-start.html-745e38a5.js",revision:"b4a5f3d41d2db4ff5dead143d97c1471"},{url:"assets/quick-start.html-9079e83d.js",revision:"8a092c2dd0195c74bf180c2024f1cc57"},{url:"assets/quick-start.html-c13d246e.js",revision:"6c60dec7d4aafe0a47a69f1bcab07f07"},{url:"assets/real-time-notes.html-4494f151.js",revision:"d50cecbcba2a901eaf960529c838cc3b"},{url:"assets/real-time-notes.html-5ccc7b11.js",revision:"880d983aec9697f309df454434ef95d5"},{url:"assets/real-time-notes.html-99f16c8c.js",revision:"f21d81b6f5c756bb52b729803614a6c6"},{url:"assets/real-time-notes.html-c37f178d.js",revision:"e54db82f1c33d425851bcd4e953513ad"},{url:"assets/side-load.html-21c2c1b2.js",revision:"dd03c9c47c1ce7fb50ff2fc5d2e66b0b"},{url:"assets/side-load.html-6d4118f1.js",revision:"e67b9c6b7360448ad7202687b458f86a"},{url:"assets/side-load.html-7b979a4b.js",revision:"7e7533c28a1f7d62ad0430dc121c470a"},{url:"assets/side-load.html-f656173e.js",revision:"e67b9c6b7360448ad7202687b458f86a"},{url:"assets/star-request.html-3ff0f768.js",revision:"44785511c0abf4704187036a06f475e6"},{url:"assets/star-request.html-8a203856.js",revision:"06ed4ad0735b8e14be7e697be5ef0bb4"},{url:"assets/star-request.html-bcc46613.js",revision:"50a6fdef68fb2ce5f39f85d369bbedcd"},{url:"assets/star-request.html-f04fbb42.js",revision:"1e10856e824bd0c2cb838c49b6837265"},{url:"assets/style-6554d579.css",revision:"9c9099e299277cf6c6a2218608d27eb8"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-6b58761a.js",revision:"f18d38343e652710955d7b89914f459f"},{url:"assets/symposium1.html-c6b390a7.js",revision:"58b28695a847d9d6c99980bc4ad60770"},{url:"assets/symposium2.html-d8a74b5c.js",revision:"a9b95309e0f13f7dc9b488f3f624f012"},{url:"assets/symposium2.html-facbe563.js",revision:"eed80e2efd3151724d49bc55d9105a1d"},{url:"assets/tos.html-187ddbdd.js",revision:"b510637411a28176f8c9f0a09249e4ff"},{url:"assets/tos.html-26935a8d.js",revision:"069ad5cba2cd4d833ed4b4a0474c4fd1"},{url:"assets/tos.html-4ccd710b.js",revision:"468d0ed49514ac64c6da4061742f4aba"},{url:"assets/tos.html-5f23cb94.js",revision:"3ac14d54e23ad5259f4c79ee08691f6a"},{url:"assets/uninstall.html-1cacc183.js",revision:"14f90e7821acd8a28edf3b5cef2749d7"},{url:"assets/uninstall.html-6206b061.js",revision:"8893322f57aa5426d97f9b81df551c34"},{url:"assets/uninstall.html-65de1499.js",revision:"359d3ddd68d76c484156fcfd447074de"},{url:"assets/uninstall.html-d9dcec87.js",revision:"7922216f309f88a7b6a3fd42ce686440"},{url:"assets/update-log.html-060fdc3c.js",revision:"e1b5011faa4e95262b02bf23ed129a4f"},{url:"assets/update-log.html-3a65a8b7.js",revision:"e2e1018fe6d883624b8f341cc5fe5220"},{url:"assets/update-log.html-c2575952.js",revision:"08f8709878d72fb23c3b888914c12fa0"},{url:"assets/update-log.html-d813d090.js",revision:"82bb000a87c22f6112a818018172edeb"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-1b6ec5a4.js",revision:"d4e80038ad5c974c80a9cda373b11524"},{url:"assets/weapon-wiki.html-3a22c97c.js",revision:"b888048a6c2630f2bb45fe813245b6ac"},{url:"assets/weapon-wiki.html-ed30b8d4.js",revision:"cfae20440396ae7ed8fd33ebd7477d7f"},{url:"assets/weapon-wiki.html-f20c0622.js",revision:"110a713b156e7d13fcde7e0729ef38de"},{url:"assets/wish-export.html-2dd03804.js",revision:"eaf37ee22bc5329bcae3810e9e34a61d"},{url:"assets/wish-export.html-84313596.js",revision:"6cf1c0bbc2f18d5cd74a4b28ba207ec0"},{url:"assets/wish-export.html-93eff3a4.js",revision:"1389230bee085d4494f67d745afe63d8"},{url:"assets/wish-export.html-c9ac1fc1.js",revision:"8b3e9a0367284caf327cc576ed331b62"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"829103340be96ca6625171596d81b0e3"},{url:"404.html",revision:"f14e4a0d22bb9924714ce5010425a154"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
