(window.webpackJsonp=window.webpackJsonp||[]).push([[59,8,9,11,17,44],{402:function(e,t,n){var c=n(18),o="["+n(403)+"]",l=RegExp("^"+o+o+"*"),r=RegExp(o+o+"*$"),d=function(e){return function(t){var n=String(c(t));return 1&e&&(n=n.replace(l,"")),2&e&&(n=n.replace(r,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},403:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(e,t,n){"use strict";var c=n(10),o=n(4),l=n(81),r=n(14),d=n(12),h=n(35),f=n(159),v=n(58),m=n(5),x=n(60),C=n(59).f,_=n(25).f,y=n(13).f,k=n(402).trim,w="Number",S=o.Number,T=S.prototype,E=h(x(T))==w,A=function(e){var t,n,c,o,l,r,d,code,h=v(e,!1);if("string"==typeof h&&h.length>2)if(43===(t=(h=k(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:c=2,o=49;break;case 79:case 111:c=8,o=55;break;default:return+h}for(r=(l=h.slice(2)).length,d=0;d<r;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,c)}return+h};if(l(w,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(E?m((function(){T.valueOf.call(n)})):h(n)!=w)?f(new S(A(t)),n,O):A(t)},I=c?C(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;I.length>D;D++)d(S,N=I[D])&&!d(O,N)&&y(O,N,_(S,N));O.prototype=T,T.constructor=O,r(o,w,O)}},406:function(e,t,n){"use strict";n.r(t);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var c={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(e){return["height","width"].includes(e)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var e=this,t=[];return Object.keys(this.cachedStyles).forEach((function(n){t.push("".concat(e.convertToCssProperty(n)," ").concat(e.duration,"ms ").concat(e.easing))})),t.join(", ")}},methods:{enter:function(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),setTimeout(t,this.duration)},afterEnter:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},leave:function(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),setTimeout(t,this.duration)},afterLeave:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},detectAndCacheDimensions:function(e){if(!this.cachedStyles){var t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(e){return"height"===this.dimension?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:"width"===this.dimension?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition:function(e){e.style.transition=this.transition},unsetTransition:function(e){e.style.transition=""},hideOverflow:function(e){e.style.overflow="hidden"},unsetOverflow:function(e){e.style.overflow=""},setClosedDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]="0"}))},setOpenedDimensions:function(e){var t=this;Object.keys(this.cachedStyles).forEach((function(n){e.style[n]=t.cachedStyles[n]}))},unsetDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]=""}))},forceRepaint:function(e){getComputedStyle(e)[this.dimension]},getCssValue:function(e,style){return getComputedStyle(e,null).getPropertyValue(style)},convertToCssProperty:function(style){var e=style.match(/([A-Z])/g);if(!e)return style;for(var i=0,t=e.length;i<t;i++)style=style.replace(new RegExp(e[i]),"-"+e[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},o=n(8),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:e.name},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,n){n(408)},408:function(e,t,n){"use strict";var c=n(2),o=n(18),l=n(84),r=n(85),d=n(161),h=n(3),f=n(21),v=h("replace"),m=RegExp.prototype,x=Math.max,C=function(e,t,n){return n>e.length?-1:""===t?n:e.indexOf(t,n)};c({target:"String",proto:!0},{replaceAll:function(e,t){var n,c,h,_,y,k,w,S,T=o(this),E=0,A=0,N="";if(null!=e){if((n=l(e))&&!~String(o("flags"in m?e.flags:r.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(c=e[v]))return c.call(e,T,t);if(f&&n)return String(T).replace(e,t)}for(h=String(T),_=String(e),(y="function"==typeof t)||(t=String(t)),k=_.length,w=x(1,k),E=C(h,_,0);-1!==E;)S=y?String(t(_,E,h)):d(_,h,E,[],void 0,t),N+=h.slice(A,E)+S,A=E+k,E=C(h,_,E+w);return A<h.length&&(N+=h.slice(A)),N}})},409:function(e,t,n){"use strict";var c=n(2),o=n(402).trim;c({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return o(this)}})},410:function(e,t,n){var c=n(5),o=n(403);e.exports=function(e){return c((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}},411:function(e,t,n){"use strict";n.r(t);n(407),n(409),n(112);var c={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function e(t,n){for(var c,o=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<t.children.length;i++)c=document.createTextNode("\n"+o),t.insertBefore(c,t.children[i]),e(t.children[i],n),t.lastElementChild==t.children[i]&&(c=document.createTextNode("\n"+l),t.appendChild(c));return t}var t,div;void 0!==this.$refs.component&&(this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",e(div,0).innerHTML))}},mounted:function(){this.setSrc()}},o=n(8),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),e.nocode?e._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!e.showcode},on:{click:function(t){e.showcode=!1}}},[e._v("Preview")]),e._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":e.showcode},on:{click:function(t){e.showcode=!0}}},[e._v("HTML")]),e._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),e._v(" "),n("div",[n("collapse-transition",[!e.nocode&&e.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):e._e()]),e._v(" "),n("collapse-transition",[e.showcode?e._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:e.classes},[e._t("default")],2)])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(e,t,n){"use strict";n.r(t);var c={props:["data"]},o=n(8),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[e._v("Class name")]),e._v(" "),!1!==e.data.showType?n("th",[e._v("Type")]):e._e(),e._v(" "),!0===e.data.showColors?n("th"):e._e(),e._v(" "),n("th")])]),e._v(" "),n("tbody",[e._l(e.data.components,(function(t,c){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[e._v(e._s(t.class))])]),e._v(" "),!1!==e.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[e._v("Component")])]):e._e(),e._v(" "),!0===e.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:t.color})]):e._e(),e._v(" "),n("td",[e._v(e._s(t.desc))])])})),e._v(" "),e._l(e.data.utilities,(function(t,c){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[e._v(e._s(t.class))])]),e._v(" "),!1!==e.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[e._v("Utility")])]):e._e(),e._v(" "),!0===e.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:t.color})]):e._e(),e._v(" "),n("td",[e._v(e._s(t.desc))])])}))],2)])]),e._v(" "),!1!==e.data.showTitle?n("div",{staticClass:"divider"}):e._e(),e._v(" "),!1!==e.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[e._v("Examples")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},415:function(e,t,n){"use strict";n.r(t);var c=n(8),component=Object(c.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"form-control"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},421:function(e,t,n){"use strict";n.r(t);var c={props:{classes:String}},o=n(8),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{staticClass:"checkbox",class:e.classes,attrs:{type:"checkbox",checked:""}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:n(113).default})},499:function(e,t,n){"use strict";n.r(t);var c={head:function(){return{title:"daisyUI — Tailwind CSS checkbox component",meta:[{hid:"description",name:"description",content:"Tailwind CSS checkbox component - Tailwind CSS checkbox examples"}]}}},o=n(8),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"form-control",desc:"Container element"},{class:"checkbox",desc:"For checkbox"}],utilities:[{class:"checkbox-primary",desc:"Adds `primary` to checkbox"},{class:"checkbox-secondary",desc:"Adds `secondary` to checkbox"},{class:"checkbox-accent",desc:"Adds `accent` to checkbox"},{class:"checkbox-lg",desc:"Large checkbox"},{class:"checkbox-md",desc:"Medium checkbox (default)"},{class:"checkbox-sm",desc:"Small checkbox"},{class:"checkbox-xs",desc:"Extra small checkbox"}]}}}),e._v(" "),n("Wrapper",{attrs:{title:"checkbox",classes:"flex flex-col space-y-2 max-w-xs"}},[n("Checkbox")],1),e._v(" "),n("Wrapper",{attrs:{title:"checkbox with label and container",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox primary",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-primary"}})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox secondary",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-secondary"}})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox accent",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-accent"}})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox sizes",classes:"flex flex-col space-y-2 max-w-xs"}},[n("Checkbox",{attrs:{classes:"checkbox-xs"}}),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-sm"}}),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-md"}}),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-lg"}})],1),e._v(" "),n("Wrapper",{attrs:{title:"checkbox disabled",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[e._v("Disabled + unchecked")]),e._v(" "),n("input",{staticClass:"checkbox",attrs:{type:"checkbox",disabled:""}})])]),e._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[e._v("Disabled + checked")]),e._v(" "),n("input",{staticClass:"checkbox",attrs:{type:"checkbox",checked:"checked",disabled:""}})])])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ClassTable:n(412).default,Checkbox:n(421).default,Wrapper:n(411).default,FormControl:n(415).default,Input:n(113).default})}}]);