(window.webpackJsonp=window.webpackJsonp||[]).push([[99,11,44],{402:function(t,e,n){var o=n(18),r="["+n(403)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(t,e,n){"use strict";var o=n(10),r=n(4),l=n(81),c=n(14),d=n(12),h=n(35),f=n(159),v=n(58),m=n(5),_=n(60),y=n(59).f,C=n(25).f,S=n(13).f,x=n(402).trim,w="Number",I=r.Number,T=I.prototype,N=h(_(T))==w,E=function(t){var e,n,o,r,l,c,d,code,h=v(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=x(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,o)}return+h};if(l(w,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var D,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(N?m((function(){T.valueOf.call(n)})):h(n)!=w)?f(new I(E(e)),n,k):E(e)},A=o?y(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;A.length>O;O++)d(I,D=A[O])&&!d(k,D)&&S(k,D,C(I,D));k.prototype=T,T.constructor=k,c(r,w,k)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var o=n(2),r=n(18),l=n(84),c=n(85),d=n(161),h=n(3),f=n(21),v=h("replace"),m=RegExp.prototype,_=Math.max,y=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,h,C,S,x,w,I,T=r(this),N=0,E=0,D="";if(null!=t){if((n=l(t))&&!~String(r("flags"in m?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[v]))return o.call(t,T,e);if(f&&n)return String(T).replace(t,e)}for(h=String(T),C=String(t),(S="function"==typeof e)||(e=String(e)),x=C.length,w=_(1,x),N=y(h,C,0);-1!==N;)I=S?String(e(C,N,h)):d(C,h,N,[],void 0,e),D+=h.slice(E,N)+I,E=N+x,N=y(h,C,N+w);return E<h.length&&(D+=h.slice(E)),D}})},409:function(t,e,n){"use strict";var o=n(2),r=n(402).trim;o({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return r(this)}})},410:function(t,e,n){var o=n(5),r=n(403);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,r=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+r),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+l),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},498:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{DAISYUI_VERSION:"1.10.0"}},head:function(){return{title:"daisyUI — What's included",meta:[{hid:"description",name:"description",content:"Tailwind CSS daisyUI plugin what's included"}]}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("h3",{staticClass:"flex items-center mb-4 text-4xl font-bold"},[t._v("\n      1. Components\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      Common UI components that you'll need for your interface.\n      "),n("ul",[n("li",[t._v("Components are CSS/HTML and they don't depend on any Javascript framework, so you can use them anywhere.")]),t._v(" "),n("li",[t._v("Components are made with Tailwind CSS but the output is a CSS file, so you can use the CSS file from CDN even if you're not using Tailwind CSS on your project.")]),t._v(" "),n("li",[t._v("You can see the list of all components here on this site.")])]),t._v("\n      Every component's CSS source code is separated in 2 files: "),n("a",{attrs:{href:"https://github.com/saadeghi/daisyui/tree/master/src/base/components",target:"_blank"}},[t._v("base")]),t._v(" and "),n("a",{attrs:{href:"https://github.com/saadeghi/daisyui/tree/master/src/styled/components",target:"_blank"}},[t._v("styled")]),t._v(".\n      This allows you to skip using pre-designed components and use your own design if you want.\n      See "),n("NuxtLink",{attrs:{to:"/docs/config"}},[t._v("config document")]),t._v(" for more info.\n      "),n("ul",[n("li",[t._v("`base` is the skeleton of components, no colors, no design decisions included.")]),t._v(" "),n("li",[t._v("`styled` includes all the colors, spacing and design decisions")])])],1),t._v(" "),n("h3",{staticClass:"flex items-center mb-4 text-4xl font-bold"},[t._v("\n      2. Utility Classes\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      DaisyUI adds a few extra utility classes to Tailwind CSS. They are being used inside components.\n      "),n("br"),t._v("\n      You can see the available utilities on "),n("a",{attrs:{href:"https://github.com/saadeghi/daisyui/tree/master/src/utilities",target:"_blank"}},[t._v("github")])]),t._v(" "),n("h3",{staticClass:"flex items-center mb-4 text-4xl font-bold"},[t._v("\n      3. Resets\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      DaisyUI adds a tiny style reset to Tailwind's @base reset style.\n      "),n("br"),t._v("\n      You can see it on "),n("a",{attrs:{href:"https://github.com/saadeghi/daisyui/tree/master/src/resets",target:"_blank"}},[t._v("github")])]),t._v(" "),n("h3",{staticClass:"flex items-center mb-4 text-4xl font-bold"},[t._v("\n      4. Themes "),n("span",{staticClass:"mx-2 badge badge-outline badge-sm"},[t._v("optional")])]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      You can see all available themes on this site.\n      "),n("ul",[n("li",[t._v("Default themes are available on "),n("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/daisyui@"+t.DAISYUI_VERSION+"/dist/themes.css",target:"_blank"}},[t._v("CDN")]),t._v(".")]),t._v(" "),n("li",[t._v("You can disable it from "),n("NuxtLink",{attrs:{to:"/docs/config"}},[t._v("config file")]),t._v(".")],1),t._v(" "),n("li",[t._v("You can see the source for each theme on "),n("a",{attrs:{href:"https://github.com/saadeghi/daisyui/tree/master/src/themes",target:"_blank"}},[t._v("github")]),t._v(".")]),t._v(" "),n("li",[t._v("You can "),n("NuxtLink",{attrs:{to:"/docs/add-themes"}},[t._v("add your own theme")]),t._v(" if you want.")],1)])]),t._v(" "),n("h3",{staticClass:"flex items-center mb-4 text-4xl font-bold"},[t._v("\n      5. full.css file "),n("span",{staticClass:"mx-2 badge badge-outline badge-sm"},[t._v("available on CDN")])]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n      This file includes a generated CSS including Tailwind CSS and DaisyUI.\n      "),n("ul",[n("li",[t._v("It's useful if you want to quickly use Tailwind CSS and DaisyUI without installing anything.")]),t._v(" "),n("li",[t._v("It's not recommended to use this file on production because it's a large CSS file and nothing is purged.")]),t._v(" "),n("li",[t._v("full.css is available on "),n("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/daisyui@"+t.DAISYUI_VERSION+"/dist/full.css",target:"_blank"}},[t._v("CDN")])])])])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/core/colors"}},[t._v("\n      Next: Colors\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("What's included?")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(411).default,Icon:n(162).default})}}]);