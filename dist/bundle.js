(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),d=t.n(c),s=new URL(t(969),t.b),l=new URL(t(72),t.b),u=new URL(t(919),t.b),f=new URL(t(665),t.b),v=a()(o()),p=d()(s),m=d()(l),h=d()(u),g=d()(f);v.push([e.id,`@font-face {\n  font-family: 'AlegreyaSansSC';\n  src: url(${p}) format('ttf'),\n      url(${m}) format('ttf'),\n      url(${h}) format('ttf');\n}\n\nbody {\n  color: beige;\n  background-color: burlywood;\n  background: url(${g});\n  font-family: 'AlegreyaSansSC';\n}\n\n.header {\n  border: 1px solid yellow;\n}\n\n.title {\n  color:whitesmoke;\n  font-size: 1.8rem;\n  font-weight: bold;\n  border: 1px solid rgb(166, 255, 0);\n\n}`,""]);const b=v},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var f=t(u),v={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)n[f].references++,n[f].updater(v);else{var p=o(v,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},969:(e,n,t)=>{e.exports=t.p+"9a12c57dcb1b3f25ec92.ttf"},72:(e,n,t)=>{e.exports=t.p+"94ffe8f4feeae6d59950.ttf"},919:(e,n,t)=>{e.exports=t.p+"22571419389ad77fd0b0.ttf"},665:(e,n,t)=>{e.exports=t.p+"cf0bc5fb379ff9668212.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"7ef14a5d04c52e816132.png";function n(){console.log("showMenu module");let e=document.createElement("div");return e.innerHTML='\n    <div id="middleContent">MIDDLE container\n      <div>Menu</div>\n      <div>Cold Brew</div>\n      <div>Milk Tea</div>\n    </div>\n  ',e}function r(){console.log("showContact module");let e=document.createElement("div");return e.innerHTML='\n    <div id="middleContent">MIDDLE container\n      <div>Contact us</div>\n      <div>We\'d love to hear from you! At SisBrew, your satisfaction is our top priority. If you have any questions, suggestions, or feedback, please reach out to us through the following channels:</div>\n      <div>Email: sisbrewcoffeeandtea@gmail.com</div>\n      <div>Phone: 083 552 5503</div>\n      <div>Address: Bulaong Terminal, General Santos City, Philippines,</div>\n      <div> \n        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.133250709257!2d125.16011341476842!3d6.112756795573847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79f789cc98701%3A0x20f47e1eaba3a4c3!2sSisBrew%20Coffee%20and%20Tea!5e0!3m2!1sen!2sph!4v1688807253107!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n      </div>\n    </div>\n  ',e}function o(){console.log("showHome module");let e=document.createElement("div");return e.innerHTML="\n    <div id=\"middleContent\">MIDDLE container\n      <div>Welcome to SisBrew Coffee & Tea</div>\n      <div>Step into our cozy café and let the aroma of brewed coffee and tea embrace you. Our friendly sisters is here to serve you exceptional coffee and tea, crafted with care and passion. Take a moment to unwind, savor the flavors, and create cherished memories in our welcoming space.</div>\n      <div>\n        <button id='btnMenu'>Our Menu</button>\n        <button id='btnContact'>Contact Us</button>\n      </div>\n    </div>\n  ",e.querySelector("#btnMenu").addEventListener("click",(()=>{renderMiddleContent(n())})),e.querySelector("#btnContact").addEventListener("click",(()=>{renderMiddleContent(r())})),e}var i=t(379),a=t.n(i),c=t(795),d=t.n(c),s=t(569),l=t.n(s),u=t(565),f=t.n(u),v=t(216),p=t.n(v),m=t(589),h=t.n(m),g=t(426),b={};function y(e){const n=document.querySelector("#middleContent");n.innerHTML="",n.appendChild(e)}b.styleTagTransform=h(),b.setAttributes=f(),b.insert=l().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=p(),a()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".content");t.appendChild(function(){console.log("showHeader module");let n=document.createElement("div");n.innerHTML="\n    <div class='header'>Header container\n      <div class='title'>SISBREW Coffee & Tea</div>\n      <div class='logo'>center logo placeholder</div>\n      <div class='navigation'>\n        <div id='navHome'>Home</div>\n        <div id='navMenu'>Menu</div>\n        <div id='navContact'>Contact</div>\n      </div>\n    </div>\n  ";const t=new Image;return t.src=e,n.appendChild(t),n}()),t.appendChild(o()),t.appendChild(function(){console.log("showFooter module");let e=document.createElement("div");return e.innerHTML="\n    <div>BOTTOM container\n      <div>Credits</div>\n      <div>Source Code</div>\n    </div>\n  ",e}()),document.querySelector("#navHome").addEventListener("click",(()=>{y(o())})),document.querySelector("#navMenu").addEventListener("click",(()=>{y(n())})),document.querySelector("#navContact").addEventListener("click",(()=>{y(r())})),window.renderMiddleContent=y}))})()})();