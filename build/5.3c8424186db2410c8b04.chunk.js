webpackJsonp([5],{"./app/containers/EditProvider/index.js":function(e,t,o){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments[1];switch(t.type){case w:return e;case C:return e.set("profileName",t.profileName);case N:return e.set("hours",t.hours);default:return e}}function r(){var e,t,o,n,r,i;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e=new D.a,s.next=3,Object(L.c)(O());case 3:return t=s.sent,s.next=6,Object(L.c)(S());case 6:return o=s.sent,console.log("profileName",t),console.log("hours",o),n="http://a2e504bfc45a611e8b2ac022831d4b9b-121362542.us-west-2.elb.amazonaws.com:45000/v1/providers",s.prev=10,r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","access-token":e.get("access-token")},body:JSON.stringify({data:{profileName:t,hours:o}})},s.next=14,Object(L.a)(M.a,n,r);case 14:i=s.sent,console.log("provider",i),s.next=23;break;case 18:return s.prev=18,s.t0=s.catch(10),console.log("err",s.t0),s.next=23,Object(L.b)(Object(A.push)("/signin"));case 23:case"end":return s.stop()}},R,this,[[10,18]])}function i(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.d)(E,r);case 2:case"end":return e.stop()}},I,this)}function s(){return{type:E}}function a(e){return console.log("CHANGE_PROFILE_NAME action"),{type:C,profileName:e}}function u(e){return{type:N,hours:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e){return{dispatch:e,onChangeProfileName:function(t){return e(a(t.target.value))},onChangeHours:function(t){return e(u(t.target.value))},onSubmitForm:function(t){console.log("EVT",t),void 0!==t&&t.preventDefault&&t.preventDefault(),e(s())}}}Object.defineProperty(t,"__esModule",{value:!0});var p=o("./node_modules/react/index.js"),m=o.n(p),h=(o("./node_modules/prop-types/index.js"),o("./node_modules/react-redux/es/index.js")),v=o("./node_modules/react-helmet/lib/Helmet.js"),b=o("./node_modules/react-intl/lib/index.es.js"),y=o("./node_modules/reselect/es/index.js"),g=o("./node_modules/redux/es/index.js"),_=o("./app/utils/injectSaga.js"),j=o("./app/utils/injectReducer.js"),k=function(e){return e.get("editProvider")},O=function(){return Object(y.a)(k,function(e){return e.get("profileName")})},S=function(){return Object(y.a)(k,function(e){return e.get("hours")})},x=o("./node_modules/immutable/dist/immutable.js"),w="app/EditProvider/DEFAULT_ACTION",E="app/Signup/LIST_SERVICE",C="app/Signup/CHANGE_PROFILE_NAME",N="app/Signup/CHANGE_HOURS",P=Object(x.fromJS)({}),T=n,A=o("./node_modules/react-router-redux/index.js"),L=o("./node_modules/redux-saga/es/effects.js"),M=o("./app/utils/request.js"),H=o("./node_modules/universal-cookie/lib/index.js"),D=o.n(H),R=regeneratorRuntime.mark(r),I=regeneratorRuntime.mark(i),U=(Object(b.e)({header:{id:"app.containers.EditProvider.header",defaultMessage:"This is EditProvider container !"}}),o("./node_modules/material-ui/TextField/index.js")),F=o.n(U),J=o("./node_modules/material-ui/Button/index.js"),K=o.n(J);o.d(t,"EditProvider",function(){return Q});var V=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),z=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),B=V(v.Helmet,{},void 0,V("title",{},void 0,"List a Service"),V("meta",{name:"description",content:"Description of EditProvider"})),G=V("br",{}),$=V("br",{}),q=V(K.a,{type:"submit",color:"primary"},void 0,"List Service"),Q=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),z(t,[{key:"render",value:function(){return V("div",{},void 0,B,"Just the basics:",V("div",{},void 0,V("form",{onSubmit:this.props.onSubmitForm},void 0,V("label",{htmlFor:"profileName"},void 0,V(F.a,{autoFocus:!0,id:"profileName",type:"text",label:"Profile Name",value:this.props.profileName,onChange:this.props.onChangeProfileName})),G,V("label",{htmlFor:"hours"},void 0,V(F.a,{id:"hours",type:"hours",label:"Hours",value:this.props.hours,onChange:this.props.onChangeHours})),$,q)))}}]),t}(m.a.PureComponent),W=Object(y.b)({editprovider:function(){return Object(y.a)(k,function(e){return e.toJS()})}()}),X=Object(h.b)(W,f),Y=Object(j.a)({key:"editProvider",reducer:T}),Z=Object(_.a)({key:"editProvider",saga:i});t.default=Object(g.c)(Y,Z,X)(Q)},"./node_modules/cookie/index.js":function(e,t,o){"use strict";function n(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var o={},n=t||{},r=e.split(u),a=n.decode||s,c=0;c<r.length;c++){var l=r[c],d=l.indexOf("=");if(!(d<0)){var f=l.substr(0,d).trim(),p=l.substr(++d,l.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==o[f]&&(o[f]=i(p,a))}}return o}function r(e,t,o){var n=o||{},r=n.encode||a;if("function"!=typeof r)throw new TypeError("option encode is invalid");if(!c.test(e))throw new TypeError("argument name is invalid");var i=r(t);if(i&&!c.test(i))throw new TypeError("argument val is invalid");var s=e+"="+i;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(u)}if(n.domain){if(!c.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!c.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return s}function i(e,t){try{return t(e)}catch(t){return e}}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
t.parse=n,t.serialize=r;var s=decodeURIComponent,a=encodeURIComponent,u=/; */,c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},"./node_modules/universal-cookie/lib/Cookies.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return"string"==typeof e?d.default.parse(e):"object"===(void 0===e?"undefined":u(e))&&null!==e?e:{}}function s(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}function a(e){if(s(e,(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).doNotParse))try{return JSON.parse(e)}catch(e){}return e}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/cookie/index.js"),d=n(l),f=o("./node_modules/object-assign/index.js"),p=n(f),m=o("./node_modules/universal-cookie/lib/utils.js"),h=function(){function e(t,o){r(this,e),this.changeListeners=[],this.cookies=i(t),this.hooks=o,this.HAS_DOCUMENT_COOKIE=(0,m.hasDocumentCookie)()}return c(e,[{key:"_updateBrowserValues",value:function(){this.HAS_DOCUMENT_COOKIE&&(this.cookies=d.default.parse(document.cookie))}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._updateBrowserValues(),a(this.cookies[e],t)}},{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._updateBrowserValues();var t={};for(var o in this.cookies)t[o]=a(this.cookies[o],e);return t}},{key:"set",value:function(e,t,o){"object"===(void 0===t?"undefined":u(t))&&(t=JSON.stringify(t)),this.hooks&&this.hooks.onSet&&this.hooks.onSet(e,t,o),this.cookies[e]=t,this.HAS_DOCUMENT_COOKIE&&(document.cookie=d.default.serialize(e,t,o)),this._emitChange({name:e,value:t,options:o})}},{key:"remove",value:function(e,t){var o=t=(0,p.default)({},t,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.hooks&&this.hooks.onRemove&&this.hooks.onRemove(e,o),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=d.default.serialize(e,"",o)),this._emitChange({name:e,value:void 0,options:t})}},{key:"_emitChange",value:function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)}},{key:"addChangeListener",value:function(e){this.changeListeners.push(e)}},{key:"removeChangeListener",value:function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)}}]),e}();t.default=h,e.exports=t.default},"./node_modules/universal-cookie/lib/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./node_modules/universal-cookie/lib/Cookies.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=r.default,e.exports=t.default},"./node_modules/universal-cookie/lib/utils.js":function(e,t,o){"use strict";function n(){return"object"===("undefined"==typeof document?"undefined":i(document))&&"string"==typeof document.cookie}function r(){document.cookie.split(";").forEach(function(e){document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString()+";path=/")})}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasDocumentCookie=n,t.cleanCookies=r;t.HAS_DOCUMENT_COOKIE=n()}});