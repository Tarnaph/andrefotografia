(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76532,32971,36126],{176532:function(e,i,s){"use strict";function r(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==s)return;var r,t,o=[],n=!0,a=!1;try{for(s=s.call(e);!(n=(r=s.next()).done)&&(o.push(r.value),!i||o.length!==i);n=!0);}catch(l){a=!0,t=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw t}}return o}(e,i)||t(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,i){if(e){if("string"==typeof e)return o(e,i);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?o(e,i):void 0}}function o(e,i){(null==i||i>e.length)&&(i=e.length);for(var s=0,r=new Array(i);s<i;s++)r[s]=e[s];return r}function n(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,r)}return s}function a(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}function l(e){var i=e.async,s=e.data,o=e.headers,l=e.timeout,u=e.type,c=(e.updateProgress,e.url),d=!1;return{promise:new Promise((function(e,w){var b=l?setTimeout((function(){d="timeout",w({type:"timeout"})}),l):void 0;fetch(c,function(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?n(Object(s),!0).forEach((function(i){a(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}({method:u,credentials:"include",mode:"same-origin",keepalive:!i,headers:o},s?{body:s}:{})).then((function(i){b&&clearTimeout(b),d?"timeout"!==d&&w({type:"abort"}):e({status:i.status,statusText:i.statusText,ok:i.status>=200&&i.status<300||304===i.status,headers:{get:function(e){return i.headers.get(e)},_logString:function(){var e,s=[],o=function(e,i){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=t(e))||i&&e&&"number"==typeof e.length){s&&(e=s);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,l=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return a=e.done,e},e:function(e){l=!0,n=e},f:function(){try{a||null==s.return||s.return()}finally{if(l)throw n}}}}(i.headers.entries());try{for(o.s();!(e=o.n()).done;){var n=r(e.value,2),a=n[0],l=n[1];s.push("".concat(a,": ").concat(l,"\r\n"))}}catch(u){o.e(u)}finally{o.f()}return s.join("")}},json:function(){return i.json().then((function(e){return e instanceof Object?e:Promise.reject(new Error("JSON.parse did not return an object"))}))}})})).catch((function(){return Promise.reject({type:"timeout"})}))})),abort:function(){d="manual"}}}s.d(i,{Z:function(){return x}});var u=s(635240),c=function(){};function d(e){var i=e.async,s=e.data,r=e.headers,t=e.timeout,o=e.type,n=e.updateProgress,a=e.url,l=new XMLHttpRequest;return{promise:new Promise((function(e,u){var d=t?setTimeout((function(){l.onreadystatechange=c,l.abort(),u({type:"timeout"})}),t):void 0;l.onreadystatechange=function(){if(4===l.readyState){l.onreadystatechange=c,clearTimeout(d);var i=l.status,s=l.statusText,r=l.responseText;if(!i)return void u({type:"abort"});e({status:i,statusText:s,ok:i>=200&&i<300||304===i,headers:{get:function(e){return l.getResponseHeader(e)},_logString:function(){return l.getAllResponseHeaders()}},json:function(){return new Promise((function(e,i){try{var s=JSON.parse(r);s instanceof Object?e(s):i(new Error("JSON.parse did not return an object"))}catch(t){i(t)}}))},responseText:r})}},n&&l.upload.addEventListener("progress",(function(e){var i=null;e.lengthComputable&&(i=e.loaded/e.total*100),n(i)})),l.open(o,a,i),Object.keys(r).forEach((function(e){l.setRequestHeader(e,r[e])})),l.send(s||null)})),abort:function(){l&&l.abort()}}}var w=s(536126),b=s.n(w),f=function(e){if(function(e){var i=e.match(/\s+chrome\/(\d+)\./i);return!!i&&parseInt(i[1],10)>=79}(e))return!0;var i=b()(e).browser,s=i.name,r=void 0===s?"":s,t=i.version,o=parseInt((void 0===t?"":t).replace(/\..*/,""),10)||0;return"chrome"===r.toLowerCase()&&o>=79},p=s(826067),m=s(628551);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,r)}return s}function v(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?g(Object(s),!0).forEach((function(i){y(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}function y(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}function x(e){var i=v({async:!0,cache:!1,data:void 0,headers:{},query:{},timeout:0,type:"GET"},e),s=i.url,r=i.data,t=i.type;r&&"object"===h(r)&&("GET"===t?(s=(0,p.ru)(s,r),r=void 0):r instanceof FormData||(r=(0,p.XP)(r))),!1===i.cache&&"GET"===t&&(s=(0,p.ru)(s,{_:Date.now()}));var o=(0,m.needsCsrfToken)(t,s);return o&&!(0,m.getCsrfToken)()?{promise:Promise.reject({type:"csrferror",message:"No csrf token found"}),abort:function(){}}:(!i.async&&"keepalive"in new Request("")&&f(window.navigator.userAgent||"")?l:d)(v(v({},i),{},{url:s,data:r,headers:v(v(v({"X-Requested-With":"XMLHttpRequest",Accept:"application/json, text/javascript, */*, q=0.01","X-APP-VERSION":(0,u.Z)()},"GET"===t||!r||r instanceof FormData?{}:{"Content-Type":"application/x-www-form-urlencoded"}),o?{"X-CSRFToken":(0,m.getCsrfToken)()||""}:{}),i.headers)}))}},536126:function(e,i,s){var r;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=s.nmd(e),function(o,n){"use strict";var a="function",l="undefined",u="object",c="string",d="model",w="name",b="type",f="vendor",p="version",m="architecture",h="console",g="mobile",v="tablet",y="smarttv",x="wearable",k="embedded",O={extend:function(e,i){var s={};for(var r in e)i[r]&&i[r].length%2==0?s[r]=i[r].concat(e[r]):s[r]=e[r];return s},has:function(e,i){return t(e)===c&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return t(e)===c?e.replace(/[^\d\.]/g,"").split(".")[0]:n},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),t(i)===l?e:e.substring(0,255)}},S={rgx:function(e,i){for(var s,r,o,l,c,d,w=0;w<i.length&&!c;){var b=i[w],f=i[w+1];for(s=r=0;s<b.length&&!c;)if(c=b[s++].exec(e))for(o=0;o<f.length;o++)d=c[++r],t(l=f[o])===u&&l.length>0?2==l.length?t(l[1])==a?this[l[0]]=l[1].call(this,d):this[l[0]]=l[1]:3==l.length?t(l[1])!==a||l[1].exec&&l[1].test?this[l[0]]=d?d.replace(l[1],l[2]):n:this[l[0]]=d?l[1].call(this,d,l[2]):n:4==l.length&&(this[l[0]]=d?l[3].call(this,d.replace(l[1],l[2])):n):this[l]=d||n;w+=2}},str:function(e,i){for(var s in i)if(t(i[s])===u&&i[s].length>0){for(var r=0;r<i[s].length;r++)if(O.has(i[s][r],e))return"?"===s?n:s}else if(O.has(i[s],e))return"?"===s?n:s;return e}},j={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},E={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[w,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[w,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[w,p],[/opios[\/\s]+([\w\.]+)/i],[p,[w,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[p,[w,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[w,p],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[p,[w,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[p,[w,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[w,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[w,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[p,[w,"IE"]],[/yabrowser\/([\w\.]+)/i],[p,[w,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[w,/(.+)/,"$1 Secure Browser"],p],[/focus\/([\w\.]+)/i],[p,[w,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[p,[w,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[p,[w,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[w,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[w,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[p,[w,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[p,[w,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[w,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[w,/(.+)/,"$1 Browser"],p],[/(comodo_dragon)\/([\w\.]+)/i],[[w,/_/g," "],p],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[w,p],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[w],[/;fbav\/([\w\.]+);/i],[p,[w,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[w,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[w,p],[/\bgsa\/([\w\.]+)\s.*safari\//i],[p,[w,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[p,[w,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[w,"Chrome WebView"],p],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[p,[w,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[w,p],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[p,[w,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[p,w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[w,[p,S.str,j.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[w,p],[/(navigator|netscape)\/([\w\.-]+)/i],[[w,"Netscape"],p],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[p,[w,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[w,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,O.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[m,/ower/,"",O.lowerize]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,O.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[d,[f,"Samsung"],[b,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[d,[f,"Samsung"],[b,g]],[/\((ip(?:hone|od)[\s\w]*);/i],[d,[f,"Apple"],[b,g]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[f,"Apple"],[b,v]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[d,[f,"Huawei"],[b,v]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[d,[f,"Huawei"],[b,g]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[d,/_/g," "],[f,"Xiaomi"],[b,g]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[d,/_/g," "],[f,"Xiaomi"],[b,v]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[d,[f,"OPPO"],[b,g]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[d,[f,"Vivo"],[b,g]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[d,[f,"Realme"],[b,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[d,[f,"Motorola"],[b,g]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[f,"Motorola"],[b,v]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[d,[f,"LG"],[b,v]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[d,[f,"LG"],[b,g]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[d,[f,"Lenovo"],[b,v]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[d,/_/g," "],[f,"Nokia"],[b,g]],[/droid.+;\s(pixel\sc)[\s)]/i],[d,[f,"Google"],[b,v]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[d,[f,"Google"],[b,g]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[f,"Sony"],[b,g]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[d,"Xperia Tablet"],[f,"Sony"],[b,v]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[d,[f,"OnePlus"],[b,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[d,[f,"Amazon"],[b,v]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[d,"Fire Phone"],[f,"Amazon"],[b,g]],[/\((playbook);[\w\s\),;-]+(rim)/i],[d,f,[b,v]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[d,[f,"BlackBerry"],[b,g]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[d,[f,"ASUS"],[b,v]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[d,[f,"ASUS"],[b,g]],[/(nexus\s9)/i],[d,[f,"HTC"],[b,v]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[f,[d,/_/g," "],[b,g]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[d,[f,"Acer"],[b,v]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[d,[f,"Meizu"],[b,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[f,d,[b,g]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[f,d,[b,v]],[/\s(surface\sduo)\s/i],[d,[f,"Microsoft"],[b,v]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[d,[f,"Fairphone"],[b,g]],[/\s(u304aa)\sbuild/i],[d,[f,"AT&T"],[b,g]],[/sie-(\w*)/i],[d,[f,"Siemens"],[b,g]],[/[;\/]\s?(rct\w+)\sbuild/i],[d,[f,"RCA"],[b,v]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[d,[f,"Dell"],[b,v]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[d,[f,"Verizon"],[b,v]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[d,[f,"Barnes & Noble"],[b,v]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[d,[f,"NuVision"],[b,v]],[/;\s(k88)\sbuild/i],[d,[f,"ZTE"],[b,v]],[/;\s(nx\d{3}j)\sbuild/i],[d,[f,"ZTE"],[b,g]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[d,[f,"Swiss"],[b,g]],[/[;\/]\s?(zur\d{3})\sbuild/i],[d,[f,"Swiss"],[b,v]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[d,[f,"Zeki"],[b,v]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[f,"Dragon Touch"],d,[b,v]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[d,[f,"Insignia"],[b,v]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[d,[f,"NextBook"],[b,v]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[f,"Voice"],d,[b,g]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[f,"LvTel"],d,[b,g]],[/;\s(ph-1)\s/i],[d,[f,"Essential"],[b,g]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[d,[f,"Envizen"],[b,v]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[d,[f,"MachSpeed"],[b,v]],[/[;\/]\s?tu_(1491)\sbuild/i],[d,[f,"Rotor"],[b,v]],[/(shield[\w\s]+)\sbuild/i],[d,[f,"Nvidia"],[b,v]],[/(sprint)\s(\w+)/i],[f,d,[b,g]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[f,"Microsoft"],[b,g]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[f,"Zebra"],[b,v]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[f,"Zebra"],[b,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[f,d,[b,h]],[/droid.+;\s(shield)\sbuild/i],[d,[f,"Nvidia"],[b,h]],[/(playstation\s[345portablevi]+)/i],[d,[f,"Sony"],[b,h]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[d,[f,"Microsoft"],[b,h]],[/smart-tv.+(samsung)/i],[f,[b,y]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[f,"Samsung"],[b,y]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[f,"LG"],[b,y]],[/(apple)\s?tv/i],[f,[d,"Apple TV"],[b,y]],[/crkey/i],[[d,"Chromecast"],[f,"Google"],[b,y]],[/droid.+aft([\w])(\sbuild\/|\))/i],[d,[f,"Amazon"],[b,y]],[/\(dtv[\);].+(aquos)/i],[d,[f,"Sharp"],[b,y]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[f,O.trim],[d,O.trim],[b,y]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[b,y]],[/((pebble))app\/[\d\.]+\s/i],[f,d,[b,x]],[/droid.+;\s(glass)\s\d/i],[d,[f,"Google"],[b,x]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[d,[f,"Zebra"],[b,x]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[f,[b,k]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[d,[b,g]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[d,[b,v]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[b,O.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[d,[f,"Generic"]],[/(phone)/i],[[b,g]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[p,[w,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[w,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[w,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,w]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[w,p],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[w,[p,S.str,j.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[w,"Windows"],[p,S.str,j.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[w,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[w,"Mac OS"],[p,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[w,p],[/\(bb(10);/i],[p,[w,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[p,[w,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[w,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[w,"webOS"]],[/crkey\/([\d\.]+)/i],[p,[w,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[w,"Chromium OS"],p],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[w,p],[/(sunos)\s?([\w\.\d]*)/i],[[w,"Solaris"],p],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[w,p]]},A=function e(i,s){if("object"===t(i)&&(s=i,i=n),!(this instanceof e))return new e(i,s).getResult();var r=i||(void 0!==o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),a=s?O.extend(E,s):E;return this.getBrowser=function(){var e={name:n,version:n};return S.rgx.call(e,r,a.browser),e.major=O.major(e.version),e},this.getCPU=function(){var e={architecture:n};return S.rgx.call(e,r,a.cpu),e},this.getDevice=function(){var e={vendor:n,model:n,type:n};return S.rgx.call(e,r,a.device),e},this.getEngine=function(){var e={name:n,version:n};return S.rgx.call(e,r,a.engine),e},this.getOS=function(){var e={name:n,version:n};return S.rgx.call(e,r,a.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=t(e)===c&&e.length>255?O.trim(e,255):e,this},this.setUA(r),this};A.VERSION="0.7.28",A.BROWSER={NAME:w,MAJOR:"major",VERSION:p},A.CPU={ARCHITECTURE:m},A.DEVICE={MODEL:d,VENDOR:f,TYPE:b,CONSOLE:h,MOBILE:g,SMARTTV:y,TABLET:v,WEARABLE:x,EMBEDDED:k},A.ENGINE={NAME:w,VERSION:p},A.OS={NAME:w,VERSION:p},t(i)!==l?(t(e)!==l&&e.exports&&(i=e.exports=A),i.UAParser=A):(r=function(){return A}.call(i,s,i,e))===n||(e.exports=r);var T=void 0!==o&&(o.jQuery||o.Zepto);if(T&&!T.ua){var _=new A;T.ua=_.getResult(),T.ua.get=function(){return _.getUA()},T.ua.set=function(e){_.setUA(e);var i=_.getResult();for(var s in i)T.ua[s]=i[s]}}}("object"===("undefined"==typeof window?"undefined":t(window))?window:this)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/76532-b2f9510af07589d4.js.map