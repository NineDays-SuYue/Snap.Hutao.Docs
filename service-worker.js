if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>a(e,d),f={module:{uri:d},exports:r,require:t};s[d]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-778589b5.js",revision:"90ca4725726e2dd18c77b00009594a22"},{url:"assets/404.html-cc4520a7.js",revision:"603894850918e0d0424fa87be67b1b21"},{url:"assets/achievements.html-0dce40d2.js",revision:"2d73cfe87ecf8a6d060fdcdbcb754602"},{url:"assets/achievements.html-48ffc151.js",revision:"13a76d7e8cfcf1bd939c185ee15085f9"},{url:"assets/achievements.html-a6a0de9a.js",revision:"75eab6790f6d5e7f011445af2520df05"},{url:"assets/achievements.html-bfbafe68.js",revision:"79c7808ee16a2852afa014b3c13f7629"},{url:"assets/app-03fb341e.js",revision:"34ca1b815d13e3e27b83ee4643240f51"},{url:"assets/bug-report.html-310cbc3b.js",revision:"0b90cc93185ccd747c1d04a2ccf8210e"},{url:"assets/bug-report.html-471815e3.js",revision:"f5452fff8df7424a563c98386e1ad5b8"},{url:"assets/bug-report.html-7d23238d.js",revision:"632ca31336a4a24940daf1eb62ad4be1"},{url:"assets/bug-report.html-84fe1704.js",revision:"cdc39d1ae597168004ffecbec46ca1aa"},{url:"assets/character-data.html-00912133.js",revision:"a78ef46d2dd153f7188dcc12630caa32"},{url:"assets/character-data.html-42720767.js",revision:"26bb97d023b8bf081334042267a35385"},{url:"assets/character-data.html-8a78117e.js",revision:"f3941634724fcc4938079fa9c55a2b01"},{url:"assets/character-data.html-e28f5732.js",revision:"7445dbbd2ec30d48b64deb8a7a09fa50"},{url:"assets/character-wiki.html-1b9db7c1.js",revision:"c254c0d48e5fcdac79185e870835dbf0"},{url:"assets/character-wiki.html-342622d4.js",revision:"a15f9371dab6d9dfea39e58afa85d6ad"},{url:"assets/character-wiki.html-90b9eedb.js",revision:"8dfc2f275cfe6ccfc8159cc3ffbdb9bd"},{url:"assets/character-wiki.html-ca72c48d.js",revision:"1a5a6406bcb838b82e34e40399386846"},{url:"assets/community.html-70e39fec.js",revision:"1a8ff2a7d9adf965770146fb3666b357"},{url:"assets/community.html-84f8e709.js",revision:"044388d4b7b8152ac5df304c080d0cc7"},{url:"assets/community.html-b0616882.js",revision:"3fd1507442e3eee64d386d395e7b64f8"},{url:"assets/community.html-f8bc6215.js",revision:"1cc0d886bc7215b0fb5bccbe0128639d"},{url:"assets/component-d23910c7.js",revision:"3a3ce8c864f37672d7df24e4283b785e"},{url:"assets/contribute.html-37fde5a6.js",revision:"3caa75bc8c3af22de49b5240167d110b"},{url:"assets/contribute.html-64ac2d95.js",revision:"204b515728553ce1d712a01e2c249605"},{url:"assets/contribute.html-7f946320.js",revision:"18599b25749263485f64f72421a43ddf"},{url:"assets/contribute.html-8cdd1509.js",revision:"3f04a3cb1db9971c4b1c0f8e2e1fdea5"},{url:"assets/dashboard.html-27cfaecf.js",revision:"7d888cf7e92b9997d7c75698bc43341d"},{url:"assets/dashboard.html-50b728ce.js",revision:"4f61da7b47cc877825b939ca85ef9c21"},{url:"assets/dashboard.html-794141b5.js",revision:"cca7f8a0fe157923b6c4b06090f7f7f5"},{url:"assets/dashboard.html-de43d08c.js",revision:"196a6ca2646b2292ace1ae77cee8b4d0"},{url:"assets/dependency.html-5e95be8b.js",revision:"3e00a912340634736b3007fe462c14fb"},{url:"assets/dependency.html-6aa2a973.js",revision:"e669ebecaa985c9836b7cbbe1a3b7efa"},{url:"assets/dependency.html-cb812315.js",revision:"e8577918470c24e6896599ffc443359e"},{url:"assets/dependency.html-f7484531.js",revision:"cadeeeaca85a3d500991382cda0375a5"},{url:"assets/develop-plan.html-4cd8de09.js",revision:"0ea5475c971b1fa3c7eac3c95d82c901"},{url:"assets/develop-plan.html-70e98635.js",revision:"0acf7f2a57687d02c547979ad8bb5ada"},{url:"assets/develop-plan.html-72b138aa.js",revision:"9070fb1ed188e5fa1c8efa2619e90818"},{url:"assets/develop-plan.html-c3ba5ae5.js",revision:"255d87d4672852569046e7e656c3a464"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-410bc05f.js",revision:"f222afd12834073e91f099e46e50569a"},{url:"assets/exceptions.html-6a6cc3e8.js",revision:"fee254a023cc687f4e7cf0c74e10c5df"},{url:"assets/exceptions.html-7d9e8827.js",revision:"c2b53dc7e98d450679a8bf0f569ef7a1"},{url:"assets/exceptions.html-a05a1b2d.js",revision:"968828e74ee284108dd0e46d80800d01"},{url:"assets/FAQ.html-42cbaba4.js",revision:"85d981c1081e1f75f102f9bbb86676f2"},{url:"assets/FAQ.html-58ca3047.js",revision:"dee0c9854d3a79e051cc52f64d85107c"},{url:"assets/FAQ.html-992aa005.js",revision:"39acb31679a10aa8b17b16e5752f3a05"},{url:"assets/FAQ.html-d9fa0031.js",revision:"6069774cb1ae2e19c87d7634da02c79e"},{url:"assets/Gacha-system-and-export-principal.html-015af494.js",revision:"ce641ab3fb44cf7d3c118e52e2e9e4b7"},{url:"assets/Gacha-system-and-export-principal.html-1d3bc3d9.js",revision:"bb26d82bb3ca7e14a34dfc0e2bf1699e"},{url:"assets/Gacha-system-and-export-principal.html-4158fa50.js",revision:"bb26d82bb3ca7e14a34dfc0e2bf1699e"},{url:"assets/Gacha-system-and-export-principal.html-81906cdb.js",revision:"c294c2c93b1030af939992f5cac028c5"},{url:"assets/game-launcher.html-2112f499.js",revision:"80ad9e0be609ac03ab899efff36def74"},{url:"assets/game-launcher.html-48fbcd0a.js",revision:"faa3250409d30ba684322ed2a33905f5"},{url:"assets/game-launcher.html-bbaa8a3b.js",revision:"c7706ba704e184828516d14b397f693a"},{url:"assets/game-launcher.html-c6b5e4a5.js",revision:"ff96d0e3d7b34546237623493c1bd276"},{url:"assets/get-stoken-cookie-from-the-third-party.html-698c6b8e.js",revision:"48059663f453f004ae4149f5c79744bb"},{url:"assets/get-stoken-cookie-from-the-third-party.html-75f986b3.js",revision:"dc026647681da97901bf0668ea77dd31"},{url:"assets/get-stoken-cookie-from-the-third-party.html-9c54185d.js",revision:"115d3cd7b0bc88bd1b7fa27881534816"},{url:"assets/get-stoken-cookie-from-the-third-party.html-bb87cc52.js",revision:"50312c164b00cb33c1ea045140cb57ca"},{url:"assets/hutao-API.html-4088b7a3.js",revision:"6205c4f437dc582fe620a9bbed791e31"},{url:"assets/hutao-API.html-707db4ed.js",revision:"8fdce9485c11204e0e7c40388d5393b9"},{url:"assets/hutao-API.html-b821ec9d.js",revision:"6a52eef56d8ec973ebdb2faa06bdf5d0"},{url:"assets/hutao-API.html-c450cbe0.js",revision:"ab57dba63ac53e3e1a265e0df685f731"},{url:"assets/hutao-settings.html-0ee747bb.js",revision:"52a2b2a3a2292d3d583775f86a8299e4"},{url:"assets/hutao-settings.html-280e1afc.js",revision:"cb5fe502c022604c20df1164c9cb854c"},{url:"assets/hutao-settings.html-72e1a0f6.js",revision:"5a49038d6e41a095c6a58534b035b254"},{url:"assets/hutao-settings.html-b4e8a1fd.js",revision:"1c124a068d62ad1b20453649b0be9b82"},{url:"assets/i18n.html-10933388.js",revision:"c4b1d2626298dff9d345783c66c1b9a8"},{url:"assets/i18n.html-69f86c14.js",revision:"ef398318efc3cc5c92cb1c838e498c5d"},{url:"assets/i18n.html-c6fc30e5.js",revision:"0c76834809fcc7a3ae09d4ea7220faca"},{url:"assets/i18n.html-f972be08.js",revision:"baa9fa66b31c0976d12bc702842da205"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0436e020.js",revision:"8f2a22b42cc9905f0b22daf70d7e20a6"},{url:"assets/index.html-061d6dc0.js",revision:"b28f922d563cf64d86259330b9927a11"},{url:"assets/index.html-1849fe7f.js",revision:"e98609df48ab57b6d292cc9b10e62bad"},{url:"assets/index.html-279f7857.js",revision:"30e9584503c92ac28b592451f4482133"},{url:"assets/index.html-2816f16a.js",revision:"7b0e777444dcf8b0c30823ce55dc85f7"},{url:"assets/index.html-3216a9e5.js",revision:"eaf3b1d621d6705eb2c3476f8159906c"},{url:"assets/index.html-3ff33232.js",revision:"c3f2cad9b06688e0caf00cbf613e5764"},{url:"assets/index.html-4bcde51e.js",revision:"340d5e69161f608a96b8b2e04f2e992a"},{url:"assets/index.html-6913b6c2.js",revision:"3472044dc3e4d1ec7359aabd1c35ad31"},{url:"assets/index.html-6a43042e.js",revision:"77cf96b2c3c39b7a622a3d95997b13a0"},{url:"assets/index.html-81dd031d.js",revision:"fd8b9ba49115551d897d53bc6841ee7e"},{url:"assets/index.html-8616774c.js",revision:"edbefcde92c4e01f99fae9abdcfd403f"},{url:"assets/index.html-8ffc5d98.js",revision:"a2003d2ea4b3f889141b6ebc75a370bf"},{url:"assets/index.html-947e2238.js",revision:"d896dd240ff16005bd475786b8c4b389"},{url:"assets/index.html-9c966170.js",revision:"db70821f65453d325b9f2d5dc7110a8e"},{url:"assets/index.html-9d48c26e.js",revision:"1bb1615f739d8acf3b147b35645dfcd0"},{url:"assets/index.html-9f651bf0.js",revision:"06a4e3c0dc50941721f586f0802126d4"},{url:"assets/index.html-a228d087.js",revision:"f597a202ff25b04eb08d9f40b4ecb9c6"},{url:"assets/index.html-c3dad246.js",revision:"94902bf622452f728c85a11279069c41"},{url:"assets/index.html-ce254148.js",revision:"f4f322313fa70ab549b3d165ac5b1273"},{url:"assets/index.html-ead0711a.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-f4818cc9.js",revision:"1437586f537975cbd4fc3cffb2e0c182"},{url:"assets/known-issue.html-21c1500a.js",revision:"674cf8560379db7ea163d3d4005bfb3c"},{url:"assets/known-issue.html-353310f4.js",revision:"67ee4533cb4264ff960dead3eae34430"},{url:"assets/known-issue.html-d3fa60b3.js",revision:"f4dbd5d90e1a017843c10388217ae147"},{url:"assets/known-issue.html-dcf2dda3.js",revision:"2477a2e8cec3fe145c1f586abdab2efe"},{url:"assets/menu.html-28228fca.js",revision:"c7369a77e766fd25df4cfd9186e2324b"},{url:"assets/menu.html-37a47978.js",revision:"91b7cf707098fb8026edcbe62c9f6322"},{url:"assets/menu.html-5e29ea11.js",revision:"43c77387eb0d9c82cc4f34720cac295e"},{url:"assets/menu.html-a376e5ff.js",revision:"e6f5ddda553213a2c7fd3472dd8c6a85"},{url:"assets/mhy-account-switch.html-2de47d85.js",revision:"642b2f1616c666fdf2852fc8fe60a6f1"},{url:"assets/mhy-account-switch.html-3471761d.js",revision:"1cc7217dc0b123c308a0f6ac070e83ec"},{url:"assets/mhy-account-switch.html-ca9beaf1.js",revision:"a7b9508fbf561048c43b568df3ecd41c"},{url:"assets/mhy-account-switch.html-db811865.js",revision:"cd64d7c7287848c2efae0443ba2db1f5"},{url:"assets/monster-wiki.html-1ac0d724.js",revision:"6a082cb1ab6289bd9a7477f813969397"},{url:"assets/monster-wiki.html-a4668d7a.js",revision:"7970433e2b9746f25307b2fa55a36772"},{url:"assets/monster-wiki.html-c55fd163.js",revision:"b2fe3b59388e959538c5594efa2e3577"},{url:"assets/monster-wiki.html-ed4ef353.js",revision:"16f8fda35bffa7a5ba4ba2c2f7c22cb7"},{url:"assets/photoswipe.esm-1464cdb9.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/platform.html-0261b0d0.js",revision:"78e8d6966249599792fef9d244c1a6ff"},{url:"assets/platform.html-92804d5c.js",revision:"621d61599358d137908f2b8f63de55f1"},{url:"assets/platform.html-a018603e.js",revision:"89a4ccb7922e5cb9670e02ecdd58b44f"},{url:"assets/platform.html-ec227b31.js",revision:"f4a3b4723af281c3c3146be834b362de"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-0c3535e8.js",revision:"c89cb75e1a54770e895bb1ebeac66699"},{url:"assets/privacy-notice.html-69586390.js",revision:"ccbb4203331610ce1af193c2dd780239"},{url:"assets/privacy-notice.html-b50cc12c.js",revision:"3f68ed43cff6fed6eab53c8b2b3569a4"},{url:"assets/privacy-notice.html-e40ff099.js",revision:"a2760af798972147096754cf017bfad9"},{url:"assets/project.html-54a10a7f.js",revision:"7c5c9dcc8a861e3028a8b6edc7664494"},{url:"assets/project.html-747e49a9.js",revision:"05883fbc9b9430ba7fda560533b16457"},{url:"assets/project.html-76566484.js",revision:"d43f9cac71ca0ac92f7286b9aa795331"},{url:"assets/project.html-9b08d186.js",revision:"8b7bd376d882e29ce9bd60798ba8b388"},{url:"assets/quick-start.html-25418c6c.js",revision:"ef5a1b3a57a0b0b03e3cb1d2eace83a4"},{url:"assets/quick-start.html-9cfd1aba.js",revision:"eb155b74b7d92999e56aed4722bc0f1b"},{url:"assets/quick-start.html-9dc55864.js",revision:"4f5cadcdf40e0873ad6dd21c5e2efb72"},{url:"assets/quick-start.html-dab9eba3.js",revision:"d57e2e2fbfbbe1bc1b00db57d852ac70"},{url:"assets/real-time-notes.html-42fa37e7.js",revision:"8b78216f937b1bcab42706be284aef40"},{url:"assets/real-time-notes.html-4307b6fe.js",revision:"90c6ba54c9eb13e8a6f826d66e5ba640"},{url:"assets/real-time-notes.html-453b1582.js",revision:"e2a4b89e93d7548a8d71820fa4976714"},{url:"assets/real-time-notes.html-6da9b42a.js",revision:"e65f142d514ee140637c5b27fef42581"},{url:"assets/setup.html-68337e4f.js",revision:"39a62c963df81bc4235d881ab7fde98c"},{url:"assets/setup.html-829b4bbd.js",revision:"29faf34d3d34b295983b32617e7e13d7"},{url:"assets/setup.html-af40dc11.js",revision:"6f53b9f1930e2cac3d641fc5ec228489"},{url:"assets/setup.html-f5cddd68.js",revision:"52dfbc97d968e0c6896f286d1fa58b85"},{url:"assets/side-load.html-0a898ed6.js",revision:"0415aa8e51f3730757e450a47b30d441"},{url:"assets/side-load.html-2e273e7b.js",revision:"342c98421d828fabdf2e85c0c3c76bc0"},{url:"assets/side-load.html-93a3f61b.js",revision:"d3123e3e80faa5a4ba2f51acb5b018b3"},{url:"assets/side-load.html-ea2fc822.js",revision:"342c98421d828fabdf2e85c0c3c76bc0"},{url:"assets/star-request.html-47981144.js",revision:"bfa9fdace82fe10e1d741936dabfe2e4"},{url:"assets/star-request.html-7f0089f1.js",revision:"27dfdc170327f7658b49d86d88cff1c4"},{url:"assets/star-request.html-e1cf2c5e.js",revision:"98bacd3fb42072b846a7f58d59b3f6ed"},{url:"assets/star-request.html-eb357667.js",revision:"79801dfbfe99d5202323c4f6f246c0a1"},{url:"assets/style-a6da9cda.css",revision:"707a73c999e23d0d084e6d4f04805655"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-4ca69a8e.js",revision:"9e38d23bebd819ee8112e2306c0f6999"},{url:"assets/symposium1.html-4fac85dc.js",revision:"32aad5b296189dfec9bd085d4dfd2e8e"},{url:"assets/symposium2.html-b9b55802.js",revision:"4737a434d776df0d0bee1391970bb013"},{url:"assets/symposium2.html-d27e3046.js",revision:"16a5238c672c8afdfb7399da6326d4b7"},{url:"assets/tos.html-110c737f.js",revision:"4448e3d5c346e3cef30b13265b408a98"},{url:"assets/tos.html-3a563f3d.js",revision:"668d37e9508582d680a270647bc68159"},{url:"assets/tos.html-c606bf58.js",revision:"5f3a27a7a06feda298542e5cd0326db6"},{url:"assets/tos.html-e7fb0dd0.js",revision:"a5509330b39e17b8587d6bf82fbca7a9"},{url:"assets/uninstall.html-04e44e84.js",revision:"f50ff160aa5406d2089ebd99daf1339b"},{url:"assets/uninstall.html-3103004e.js",revision:"a4d27d8eb36ac36ae4c92b4f25674223"},{url:"assets/uninstall.html-90d5e7a1.js",revision:"79bdca9323776fd73ad0d21f21437fa9"},{url:"assets/uninstall.html-a5d42aa7.js",revision:"6cf44c07f51d435550f98b9d5cc183ac"},{url:"assets/update-log.html-2bf0c06e.js",revision:"d85148d6dc56a885c33538a6079b18bf"},{url:"assets/update-log.html-314629d9.js",revision:"52a75aac1a070735751290c55c4f1200"},{url:"assets/update-log.html-72e9d34e.js",revision:"ec333af5669dd8efc3a0da04bd5bf478"},{url:"assets/update-log.html-dc389c66.js",revision:"63cfcc6ae8f437dec6d0772c8bb0805e"},{url:"assets/waline-meta-56fbc549.js",revision:"fe8fce833452b0c8ea188f0342a2ce65"},{url:"assets/weapon-wiki.html-12997220.js",revision:"9fcc3412dd2c6e3c6585e894b6fae4d8"},{url:"assets/weapon-wiki.html-27757a78.js",revision:"7a7942a69ffacbef0deee15b82ead615"},{url:"assets/weapon-wiki.html-5c2ca54e.js",revision:"49f602a411138efd8ce35cfa6c50886c"},{url:"assets/weapon-wiki.html-6cd83830.js",revision:"32bc9184b6e98ae6528da0ef56a579f8"},{url:"assets/wish-export.html-30e5101d.js",revision:"2d0cac968845f5bc436e697f71a0739c"},{url:"assets/wish-export.html-3c2b41c8.js",revision:"4a9d445c8ed0643c624b41edb40436d6"},{url:"assets/wish-export.html-42813f20.js",revision:"a15251522d633842c2f56fa813bf7dfb"},{url:"assets/wish-export.html-b1d5faab.js",revision:"e94740d52a7512ddfd9df61af8db93dd"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"31a08d89f51042fdc12161dca899cabb"},{url:"404.html",revision:"107895b60c37cbd4d44f9525fe40d95a"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
