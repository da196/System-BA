(window.webpackJsonp=window.webpackJsonp||[]).push([[70,9,11,44],{402:function(t,e,n){var o=n(18),r="["+n(403)+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(t,e,n){"use strict";var o=n(10),r=n(4),c=n(81),l=n(14),d=n(12),f=n(35),h=n(159),v=n(58),m=n(5),_=n(60),C=n(59).f,y=n(25).f,w=n(13).f,x=n(402).trim,S="Number",T=r.Number,E=T.prototype,N=f(_(E))==S,k=function(t){var e,n,o,r,c,l,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=x(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(c(S,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var O,A=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof A&&(N?m((function(){E.valueOf.call(n)})):f(n)!=S)?h(new T(k(e)),n,A):k(e)},I=o?C(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;I.length>D;D++)d(T,O=I[D])&&!d(A,O)&&w(A,O,y(T,O));A.prototype=E,E.constructor=A,l(r,S,A)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var o=n(2),r=n(18),c=n(84),l=n(85),d=n(161),f=n(3),h=n(21),v=f("replace"),m=RegExp.prototype,_=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,f,y,w,x,S,T,E=r(this),N=0,k=0,O="";if(null!=t){if((n=c(t))&&!~String(r("flags"in m?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[v]))return o.call(t,E,e);if(h&&n)return String(E).replace(t,e)}for(f=String(E),y=String(t),(w="function"==typeof e)||(e=String(e)),x=y.length,S=_(1,x),N=C(f,y,0);-1!==N;)T=w?String(e(y,N,f)):d(y,f,N,[],void 0,e),O+=f.slice(k,N)+T,k=N+x,N=C(f,y,N+S);return k<f.length&&(O+=f.slice(k)),O}})},409:function(t,e,n){"use strict";var o=n(2),r=n(402).trim;o({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return r(this)}})},410:function(t,e,n){var o=n(5),r=n(403);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,r=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+r),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+c),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(t,e,n){"use strict";n.r(e);var o={props:["data"]},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},505:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"daisyUI — Tailwind CSS code section component",meta:[{hid:"description",name:"description",content:"Tailwind CSS code section component - Tailwind CSS code section examples"}]}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"mockup-code",desc:"Container element"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"code mockup",classes:"max-w-md"}},[n("div",{staticClass:"mockup-code"},[n("pre",{attrs:{"data-prefix":"$"}},[n("code",[t._v("npm i daisyui")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"code mockup multiline",classes:"max-w-md"}},[n("div",{staticClass:"mockup-code"},[n("pre",{attrs:{"data-prefix":"$"}},[n("code",[t._v("npm i daisyui")])]),t._v(" "),n("pre",{staticClass:"text-warning",attrs:{"data-prefix":">"}},[n("code",[t._v("installing...")])]),t._v(" "),n("pre",{staticClass:"text-success",attrs:{"data-prefix":">"}},[n("code",[t._v("Done!")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"with numbers and line highlight",classes:"max-w-md"}},[n("div",{staticClass:"mockup-code"},[n("pre",{attrs:{"data-prefix":"1"}},[n("code",[t._v("npm i daisyui")])]),t._v(" "),n("pre",{attrs:{"data-prefix":"2"}},[n("code",[t._v("installing...")])]),t._v(" "),n("pre",{staticClass:"bg-warning text-neutral",attrs:{"data-prefix":"3"}},[n("code",[t._v("Error!")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"code mockup long text scroll",classes:"max-w-md"}},[n("div",{staticClass:"mockup-code"},[n("pre",{attrs:{"data-prefix":"~"}},[n("code",[t._v("Magnam dolore beatae necessitatibus nemo ipsum itaque sit. Et porro quae qui et et dolore ratione.")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"code mockup without prefix",classes:"max-w-md"}},[n("div",{staticClass:"mockup-code"},[n("pre",[n("code",[t._v("without prefix")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"code with colors",classes:"max-w-md"}},[n("div",{staticClass:"mockup-code bg-primary text-primary-content"},[n("pre",[n("code",[t._v("can be any color!")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(412).default,Wrapper:n(411).default})}}]);