(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[28861],{349745:function(t,e,r){"use strict";r.d(e,{Ay:function(){return R},Cj:function(){return y},EA:function(){return a},Fx:function(){return b},Gn:function(){return K},Ht:function(){return z},IY:function(){return p},LR:function(){return x},_F:function(){return h},cC:function(){return S},dq:function(){return g},fE:function(){return d},iF:function(){return j},rm:function(){return f},sN:function(){return D},sf:function(){return P},t6:function(){return C},yg:function(){return w}});var n=r(833314);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=Object.freeze({aggregatedComment:"aggregatedComments",article:"articles",board:"boards",boardsection:"boardsections",contactrequest:"contactrequests",conversation:"conversations",conversationMessage:"conversationMessages",creatorRecommendationItem:"creatorRecommendationItems",inbox:"inbox",liveSession:"liveSession",notification:"notifications",partnerPermissions:"partnerPermissions",pin:"pins",reaction:"reactions",reportReasons:"reportReasons",story:"stories",storyPin:"storyPins",todayArticle:"todayArticles",topic:"topics",triedit:"triedits",user:"users",invite:"collaboratorinvite",offer:"offers"}),a=new n.fK.Entity(c.user),s=new n.fK.Entity(c.storyPin),f=new n.fK.Entity(c.aggregatedComment,{user:a,tagged_users:[a]}),l=new n.fK.Entity(c.article,{curator:a}),p=new n.fK.Entity(c.board,{collaborating_users:[a],owner:a}),y=new n.fK.Entity(c.pin,{board:p,comments:{data:[{commenter:a}]},story_pin_data:s}),m=new n.fK.Entity(c.reaction,{user:a}),d=new n.fK.Array(m),h=new n.fK.Entity(c.boardsection,{board:p,preview_pins:[y]}),b=new n.fK.Entity(c.conversation,{sender:a,users:[a]}),v=new n.fK.Entity(c.conversationMessage,{sender:a,users:[a],board:p,pin:y,user:a}),g=new n.fK.Array(v),O=new n.fK.Entity(c.contactrequest),w=new n.fK.Entity(c.story,{cover_pin:y,user:a}),_=new n.fK.Entity(c.triedit,{pin:y,user:a}),j=new n.fK.Entity(c.todayArticle,{article_creator_user:a,content_pin:y,content_pin_official_user:a,video_pin:y}),S=new n.fK.Entity(c.topic,{},{processStrategy:function(t,e,r){return i(i({},t),{},{slug:t.slug?t.slug:t.url_name?t.url_name.includes(":")?t.url_name.split(":")[1]:t.url_name:""})}}),E=new n.fK.Entity(c.creatorRecommendationItem,{user:a,interest:S}),P=new n.fK.Entity(c.invite,{invited_by_user:a,invited_user:a,board:p},{idAttribute:function(t){return"".concat(t.board.id,":").concat(t.invited_user.id)}}),k=function(t){switch(t.type){case"aggregatedcomment":return"aggregatedComment";case"conversationMessage":return"conversationMessage";case"creatorrecommendationitem":return"creatorRecommendationItem";case"explorearticle":return"article";case"news":return"notification";case"interest":return"topic";case"userdiditdata":return"triedit";case"board_section":return"boardsection";case"klp_featured_data":return"topic";case"todayarticle":return"todayArticle";default:return t.type}},A=new n.fK.Union({user:a,board:p,invite:P,pin:y,topic:S,triedit:_},k),C=new n.fK.Entity(c.notification,{content_items:[{content_object:A}],header_icon_objects:[A]}),z=new n.fK.Array(P),K=new n.fK.Array(a),D=new n.fK.Array(p),x=new n.fK.Array({aggregatedComment:f,article:l,board:p,boardsection:h,contactrequest:O,conversation:b,conversationMessage:v,creatorRecommendationItem:E,notification:C,pin:y,story:w,todayArticle:j,topic:S,triedit:_,user:a},k,(function(t){switch(t.type){case"collaboratorinvite":return t.board.id;case"category":return"key";default:return"id"}}));w.define({objects:x});var R=new n.fK.Entity(c.partnerPermissions)},425288:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(76911),o=r(515198);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=t.slice(1);return r=r.endsWith("Context")?r:"".concat(r,"Context"),e?{hocDisplayName:"with".concat(t[0].toUpperCase()).concat(r,"(").concat(e,")")}:{propsDisplayName:"".concat(t[0].toLowerCase()).concat(r),messageDisplayName:"".concat(t[0].toUpperCase()).concat(r)}}function s(t,e){var r=(0,n.createContext)(e),i=a(t),s=i.propsDisplayName,f=i.messageDisplayName;r.displayName=f;var l=r.Provider,p=function(t){var e=t.children,o=(0,n.useContext)(r);if(void 0===o)throw new Error("".concat(f,"Consumer must be used within a ").concat(f,"Provider."));return e(o)},y=function(){return(0,n.useContext)(r)};function m(e){var i=a(t,String(e.displayName||e.name)).hocDisplayName,l=function(t){var a=(0,n.useContext)(r);if(void 0===a)throw new Error("".concat(i," must be used within a ").concat(f,"Provider."));if(t[s])throw new Error("Parent Component and Context are passing to the component the same variables.");var l=c({},s,a);return(0,o.jsx)(e,u(u({},t),l))};return l.displayName=i,l}return l.displayName="".concat(f,"Provider"),p.displayName="".concat(f,"Consumer"),m.displayName="".concat(f,"HOC"),{Provider:l,Consumer:p,MaybeConsumer:function(t){return(0,t.children)((0,n.useContext)(r))},useMaybeHook:y,useHook:function(){var t=y();if(void 0===t)throw new Error("use".concat(f," must be used within a ").concat(f,"Provider."));return t},deprecatedHOC:m}}},898781:function(t,e,r){"use strict";r.d(e,{oz:function(){return i},q6:function(){return o}});var n=(0,r(425288).Z)("i18n"),o=n.Provider,i=n.Consumer,u=n.useHook;e.ZP=u},886858:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.d(e,{k:function(){return a}});var u=new Set(["bookmarks","client_tracking_params","get_page_metadata","in_nux","invite_code","no_fetch_context_on_resource","original_referrer","source","top_level_source","top_level_source_depth"]),c=function(t){return!u.has(t)&&!t.startsWith("__track__")};function a(t){return t.split(/([^=]+=[^=]+),/).filter(Boolean).reduce((function(t,e){var r=n(e.split("="),2),o=r[0],i=r[1];return t[o]=JSON.parse(i),t}),{})}e.Z=function(t){return t?Object.keys("object"===i(t)&&t||{}).filter((function(t){return"string"==typeof t})).filter(c).sort().map((function(e){return"".concat(e,"=").concat(JSON.stringify(null==t[e]?null:t[e]))})).join(","):""}},379725:function(t,e,r){"use strict";r.d(e,{U2:function(){return y},bi:function(){return m},v_:function(){return d}});var n=r(886858),o=r(6637),i=r(414327),u=r(718368);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=t.fetchOptions,r=t.resource,a=t.retry;return function(t,s){var l,y,m,d=e.bookmark,h=e.headers,b=e.options,v=e.refresh,g=e.schema,O=(0,n.Z)(b);if(null!==(l=s().resources)&&void 0!==l&&null!==(y=l[r])&&void 0!==y&&null!==(m=y[O])&&void 0!==m&&m.fetching&&!a)return Promise.resolve();var w=a?a.bookmark:d,_=w?f(f({},b),{},{bookmarks:[w]}):b;return t((0,i.LQ)(r,b,!0)),o.ZP.create(r,_).callGet(void 0,h).then((function(n){var s,f,l,y=null===(s=n.resource_response)||void 0===s?void 0:s.data,m=c(n.bookmarks||[],1)[0];if(Array.isArray(y)&&0===y.length&&m&&m!==u.q){var h=a?a.count:0;if(!(h>=u.s))return t(p({resource:r,fetchOptions:e,retry:{count:h+1,bookmark:m}}))}null===(f=o.ZP.customDataManipulations)||void 0===f||f.call(o.ZP,r,y,b);var O=(null===(l=o.ZP.normalizeResponse)||void 0===l?void 0:l.call(o.ZP,{data:y,opts:{bookmark:d,options:b,schema:g},resource:r}))||{normalizedResponse:null,resourceSchema:void 0},w=O.normalizedResponse,_=O.resourceSchema;return d?t((0,i.Dm)(r,b,n,w,_)):(t((0,i.Sr)(r,b,n,w,v,_)),o.ZP.fetchCompleteCallback&&o.ZP.fetchCompleteCallback({resource:r,options:b,response:n,normalizedResponse:w,refresh:v,resourceSchema:_})),Promise.resolve()}),(function(e){t((0,i.Tl)(r,b,e))}))}}var y=function(t,e){return p({resource:t,fetchOptions:{bookmark:e.bookmark,headers:e.headers,options:e.options,refresh:!1,schema:e.schema}})},m=function(t,e){return p({resource:t,fetchOptions:{headers:e.headers,options:e.options,refresh:!0,schema:e.schema}})};function d(t,e,r){return function(n){var u=e.options;return o.ZP.create(t,u).callCreate().then((function(e){var o;if(null!==(o=e.resource_response)&&void 0!==o&&o.data){var c=e.resource_response.data,a=(null==r?void 0:r(c))||null;n((0,i.XM)(t,u,e,a))}return e}),(function(e){return n((0,i.Tl)(t,u,e)),e}))}}},718368:function(t,e,r){"use strict";r.d(e,{q:function(){return n},s:function(){return o}});var n="-end-",o=10},338739:function(t,e,r){"use strict";r.d(e,{AF:function(){return n},KK:function(){return o},aW:function(){return c},cR:function(){return i},se:function(){return a},zP:function(){return u}});var n="CREATE_COMPLETE",o="FETCHING",i="FETCH_ERROR",u="FETCH_COMPLETE",c="FETCH_MORE_COMPLETE",a="RESOURCE_INVALIDATE"},414327:function(t,e,r){"use strict";r.d(e,{Dm:function(){return a},LQ:function(){return i},Sr:function(){return c},Tl:function(){return u},XM:function(){return o},jB:function(){return s}});var n=r(338739);function o(t,e,r,o){return{type:n.AF,payload:{resource:t,options:e,response:r,normalizedResponse:o}}}function i(t,e,r){return{type:n.KK,payload:{resource:t,options:e,isFetching:r}}}var u=function(t,e,r){return{type:n.cR,payload:{resource:t,options:e,error:r}}};function c(t,e,r,o,i,u){return{type:n.zP,payload:{isRefresh:i,normalizedResponse:o,options:e,resource:t,response:r,schema:u}}}function a(t,e,r,o,i){return{type:n.aW,payload:{resource:t,options:e,response:r,normalizedResponse:o,schema:i}}}function s(t,e){return{type:n.se,payload:{resource:t,optionsOrOptionsKey:e}}}},206134:function(t,e,r){var n;function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){"use strict";var i={}.hasOwnProperty;function u(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var n=o(r);if("string"===n||"number"===n)t.push(r);else if(Array.isArray(r)&&r.length){var c=u.apply(null,r);c&&t.push(c)}else if("object"===n)for(var a in r)i.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(u.default=u,t.exports=u):"object"===o(r.amdO)&&r.amdO?void 0===(n=function(){return u}.apply(e,[]))||(t.exports=n):window.classNames=u}()},833314:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function c(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function a(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function s(t,e,r){return Object.keys(t).reduce((function(e,n){var o=""+n;return e.has(o)?e.set(o,r(e.get(o),t[o])):e}),e)}r.d(e,{Fv:function(){return j},cY:function(){return P},fK:function(){return _}});var f=function(){function t(t,e,r){if(void 0===e&&(e={}),void 0===r&&(r={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var n=r,o=n.idAttribute,i=void 0===o?"id":o,c=n.mergeStrategy,s=void 0===c?function(t,e){return u({},t,e)}:c,f=n.processStrategy,l=void 0===f?function(t){return u({},t)}:f,p=n.fallbackStrategy,y=void 0===p?function(t,e){}:p;this._key=t,this._getId="function"==typeof i?i:function(t){return function(e){return a(e)?e.get(t):e[t]}}(i),this._idAttribute=i,this._mergeStrategy=s,this._processStrategy=l,this._fallbackStrategy=y,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce((function(e,r){var n,o=t[r];return u({},e,((n={})[r]=o,n))}),this.schema||{})},e.getId=function(t,e,r){return this._getId(t,e,r)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,r,o,i,u){var c=this,a=this.getId(t,e,r),s=this.key;if(s in u||(u[s]={}),a in u[s]||(u[s][a]=[]),u[s][a].some((function(e){return e===t})))return a;u[s][a].push(t);var f=this._processStrategy(t,e,r);return Object.keys(this.schema).forEach((function(e){if(f.hasOwnProperty(e)&&"object"===n(f[e])){var r=c.schema[e],a="function"==typeof r?r(t):r;f[e]=o(f[e],f,e,a,i,u)}})),i(this,f,t,e,r),a},e.denormalize=function(t,e){var r=this;return a(t)?s(this.schema,t,e):(Object.keys(this.schema).forEach((function(n){if(t.hasOwnProperty(n)){var o=r.schema[n];t[n]=e(t[n],o)}})),t)},i(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),l=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,r){return!this.isSingleSchema&&this._schemaAttribute(t,e,r)},e.inferSchema=function(t,e,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,r);return this.schema[n]},e.normalizeValue=function(t,e,r,n,o,i){var u=this.inferSchema(t,e,r);if(!u)return t;var c=n(t,e,r,u,o,i);return this.isSingleSchema||null==c?c:{id:c,schema:this.getSchemaAttribute(t,e,r)}},e.denormalizeValue=function(t,e){var r=a(t)?t.get("schema"):t.schema;return this.isSingleSchema||r?e((this.isSingleSchema?void 0:a(t)?t.get("id"):t.id)||t,this.isSingleSchema?this.schema:this.schema[r]):t},i(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),p=function(t){function e(e,r){if(!r)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,r)||this}c(e,t);var r=e.prototype;return r.normalize=function(t,e,r,n,o,i){return this.normalizeValue(t,e,r,n,o,i)},r.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(l),y=function(t){function e(){return t.apply(this,arguments)||this}c(e,t);var r=e.prototype;return r.normalize=function(t,e,r,n,o,i){var c=this;return Object.keys(t).reduce((function(e,r,a){var s,f=t[r];return null!=f?u({},e,((s={})[r]=c.normalizeValue(f,t,r,n,o,i),s)):e}),{})},r.denormalize=function(t,e){var r=this;return Object.keys(t).reduce((function(n,o){var i,c=t[o];return u({},n,((i={})[o]=r.denormalizeValue(c,e),i))}),{})},e}(l),m=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},d=function(t){return Array.isArray(t)?t:Object.keys(t).map((function(e){return t[e]}))},h=function(t,e,r,n,o,i,u){return t=m(t),d(e).map((function(e,c){return o(e,r,n,t,i,u)}))},b=function(t,e,r){return t=m(t),e&&e.map?e.map((function(e){return r(e,t)})):e},v=function(t){function e(){return t.apply(this,arguments)||this}c(e,t);var r=e.prototype;return r.normalize=function(t,e,r,n,o,i){var u=this;return d(t).map((function(t,c){return u.normalizeValue(t,e,r,n,o,i)})).filter((function(t){return null!=t}))},r.denormalize=function(t,e){var r=this;return t&&t.map?t.map((function(t){return r.denormalizeValue(t,e)})):t},e}(l),g=function(t,e,r,n,o,i,c){var a=u({},e);return Object.keys(t).forEach((function(r){var n=t[r],u="function"==typeof n?n(e):n,s=o(e[r],e,r,u,i,c);null==s?delete a[r]:a[r]=s})),a},O=function(t,e,r){if(a(e))return s(t,e,r);var n=u({},e);return Object.keys(t).forEach((function(e){null!=n[e]&&(n[e]=r(n[e],t[e]))})),n},w=function t(e,r,o,i,u,c){return"object"===n(e)&&e?"object"!==n(i)||i.normalize&&"function"==typeof i.normalize?i.normalize(e,r,o,t,u,c):(Array.isArray(i)?h:g)(i,e,r,o,t,u,c):e},_={Array:v,Entity:f,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce((function(e,r){var n,o=t[r];return u({},e,((n={})[r]=o,n))}),this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return g.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return O.apply(void 0,[this.schema].concat(e))},t}(),Union:p,Values:y},j=function(t,e){if(!t||"object"!==n(t))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":n(t))+'".');var r={},o=function(t){return function(e,r,n,o,i){var u=e.key,c=e.getId(n,o,i);u in t||(t[u]={});var a=t[u][c];t[u][c]=a?e.merge(a,r):r}}(r);return{entities:r,result:w(t,t,null,e,o,{})}},S=function(t){var e={},r=E(t);return function t(o,i){return"object"!==n(i)||i.denormalize&&"function"==typeof i.denormalize?null==o?o:i instanceof f?function(t,e,r,o,i){var c=o(t,e);if(void 0===c&&e instanceof f&&(c=e.fallback(t,e)),"object"!==n(c)||null===c)return c;if(i[e.key]||(i[e.key]={}),!i[e.key][t]){var s=a(c)?c:u({},c);i[e.key][t]=s,i[e.key][t]=e.denormalize(s,r)}return i[e.key][t]}(o,i,t,r,e):i.denormalize(o,t):(Array.isArray(i)?b:O)(i,o,t)}},E=function(t){var e=a(t);return function(r,o){var i=o.key;return"object"===n(r)?r:e?t.getIn([i,r.toString()]):t[i]&&t[i][r]}},P=function(t,e,r){if(void 0!==t)return S(r)(t,e)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/28861-dba1890cbf429bea.js.map