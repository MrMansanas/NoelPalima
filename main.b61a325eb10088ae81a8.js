!function(e){function t(t){for(var r,c,s=t[0],l=t[1],a=t[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+""+({1:"modal"}[e]||e)+"."+{1:"d99b57c6d1b8531efb18"}[e]+".js"}(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(a);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var a=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var u=l;i.push([210,2]),n()}({210:function(e,t,n){"use strict";n.r(t);n(39);var r=n(36),o=n.n(r),i=n(37),c=n(38),s=n.n(c),l=n(19),a=n.n(l);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.browserHeightAdjuster=.5,this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",s()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>this.browserHeight-this.browserHeightAdjuster?this.siteHeader.classList.add("site-header--is-visible"):this.siteHeader.classList.remove("site-header--is-visible"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop-this.browserHeightAdjuster&&window.scrollY<e.offsetTop+e.offsetHeight-this.browserHeightAdjuster){var t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-menu a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&u(t.prototype,n),r&&u(t,r),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h,p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.primaryMenu=document.querySelector(".primary-menu"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleMenu()}))}},{key:"toggleMenu",value:function(){this.menuIcon.classList.toggle("menu-active"),this.primaryMenu.classList.toggle("menu-active")}}])&&f(t.prototype,n),r&&f(t,r),e}();new o.a(".hero-section__animated-text",{strings:["Developer","Debuger","Optimizer"],typeSpeed:150,loop:!0,loopCount:1/0,backSpeed:50,smartBackspace:!1,cursorChar:"&#187"});window.innerWidth>767?i.tsParticles.loadJSON("Home","/assets/scripts/presets/particles.json").then((function(e){console.log("callback - tsparticles config loaded")})).catch((function(e){console.error(e)})):document.getElementById("Home").classList.add("loaded-on-mobile"),new d,new p,document.querySelectorAll(".open-contact-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===h?n.e(1).then(n.bind(null,211)).then((function(e){h=new e.default,setTimeout((function(){return h.openModal()}),20)})).catch((function(){return console.log("There was a problem.")})):h.openModal()}))}))},39:function(e,t,n){}});