(window.webpackJsonp=window.webpackJsonp||[]).push([[78,9,11,44],{402:function(t,e,n){var l=n(18),r="["+n(403)+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(t,e,n){"use strict";var l=n(10),r=n(4),o=n(81),c=n(14),d=n(12),v=n(35),f=n(159),h=n(58),_=n(5),C=n(60),m=n(59).f,y=n(25).f,w=n(13).f,S=n(402).trim,T="Number",x=r.Number,E=x.prototype,A=v(C(E))==T,N=function(t){var e,n,l,r,o,c,d,code,v=h(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=S(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+v}for(c=(o=v.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>r)return NaN;return parseInt(o,l)}return+v};if(o(T,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var O,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(A?_((function(){E.valueOf.call(n)})):v(n)!=T)?f(new x(N(e)),n,I):N(e)},D=l?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;D.length>R;R++)d(x,O=D[R])&&!d(I,O)&&w(I,O,y(x,O));I.prototype=E,E.constructor=I,c(r,T,I)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var l={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){n(408)},408:function(t,e,n){"use strict";var l=n(2),r=n(18),o=n(84),c=n(85),d=n(161),v=n(3),f=n(21),h=v("replace"),_=RegExp.prototype,C=Math.max,m=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,v,y,w,S,T,x,E=r(this),A=0,N=0,O="";if(null!=t){if((n=o(t))&&!~String(r("flags"in _?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(l=t[h]))return l.call(t,E,e);if(f&&n)return String(E).replace(t,e)}for(v=String(E),y=String(t),(w="function"==typeof e)||(e=String(e)),S=y.length,T=C(1,S),A=m(v,y,0);-1!==A;)x=w?String(e(y,A,v)):d(y,v,A,[],void 0,e),O+=v.slice(N,A)+x,N=A+S,A=m(v,y,A+T);return N<v.length&&(O+=v.slice(N)),O}})},409:function(t,e,n){"use strict";var l=n(2),r=n(402).trim;l({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return r(this)}})},410:function(t,e,n){var l=n(5),r=n(403);t.exports=function(t){return l((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},411:function(t,e,n){"use strict";n.r(e);n(407),n(409),n(112);var l={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var l,r=new Array(1+n++).join("  "),o=new Array(n-1).join("  "),i=0;i<e.children.length;i++)l=document.createTextNode("\n"+r),e.insertBefore(l,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(l=document.createTextNode("\n"+o),e.appendChild(l));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(t,e,n){"use strict";n.r(e);var l={props:["data"]},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overflow-x-auto mt-6"},[n("table",{staticClass:"table table-compact w-full"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-success w-20"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"lowercase font-mono"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"badge badge-sm badge-info w-20"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border border-opacity-10 rounded",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"text-xl font-bold mt-6"},[t._v("Examples")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"daisyUI — Tailwind CSS steps component",meta:[{hid:"description",name:"description",content:"Tailwind CSS steps component - Tailwind CSS steps examples"}]}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"steps",desc:"Container of step items"},{class:"step",desc:"A step item"}],utilities:[{class:"step-primary",desc:"Adds `primary` color to step"},{class:"step-secondary",desc:"Adds `secondary` color to step"},{class:"step-accent",desc:"Adds `accent` color to step"},{class:"step-info",desc:"Adds `info` color to step"},{class:"step-success",desc:"Adds `success` color to step"},{class:"step-warning",desc:"Adds `warning` color to step"},{class:"step-error",desc:"Adds `error` color to step"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"steps"}},[n("ul",{staticClass:"w-full steps"},[n("li",{staticClass:"step step-primary"},[t._v("Register")]),t._v(" "),n("li",{staticClass:"step step-primary"},[t._v("Choose plan")]),t._v(" "),n("li",{staticClass:"step"},[t._v("Purchase")]),t._v(" "),n("li",{staticClass:"step"},[t._v("Receive Product")])])]),t._v(" "),n("Wrapper",{attrs:{title:"steps"}},[n("ul",{staticClass:"w-full steps"},[n("li",{staticClass:"step step-info"},[t._v("Fly to moon")]),t._v(" "),n("li",{staticClass:"step step-info"},[t._v("Shrink the moon")]),t._v(" "),n("li",{staticClass:"step step-info"},[t._v("Grab the moon")]),t._v(" "),n("li",{staticClass:"step step-error",attrs:{"data-content":"?"}},[t._v("Sit on toilet")])])]),t._v(" "),n("Wrapper",{attrs:{title:"with data-content"}},[n("ul",{staticClass:"w-full steps"},[n("li",{staticClass:"step step-neutral",attrs:{"data-content":"?"}},[t._v("Step 1")]),t._v(" "),n("li",{staticClass:"step step-neutral",attrs:{"data-content":"!"}},[t._v("Step 2")]),t._v(" "),n("li",{staticClass:"step step-neutral",attrs:{"data-content":"✓"}},[t._v("Step 3")]),t._v(" "),n("li",{staticClass:"step step-neutral",attrs:{"data-content":"✕"}},[t._v("Step 4")]),t._v(" "),n("li",{staticClass:"step step-neutral",attrs:{"data-content":"★"}},[t._v("Step 5")]),t._v(" "),n("li",{staticClass:"step step-neutral",attrs:{"data-content":""}},[t._v("Step 6")]),t._v(" "),n("li",{staticClass:"step step-neutral",attrs:{"data-content":"●"}},[t._v("Step 7")])])]),t._v(" "),n("Wrapper",{attrs:{title:"steps with scrollable container"}},[n("div",{staticClass:"overflow-x-auto"},[n("ul",{staticClass:"w-full steps"},[n("li",{staticClass:"step"},[t._v("start")]),t._v(" "),n("li",{staticClass:"step step-secondary"},[t._v("2")]),t._v(" "),n("li",{staticClass:"step step-secondary"},[t._v("3")]),t._v(" "),n("li",{staticClass:"step step-secondary"},[t._v("4")]),t._v(" "),n("li",{staticClass:"step"},[t._v("5")]),t._v(" "),n("li",{staticClass:"step step-accent"},[t._v("6")]),t._v(" "),n("li",{staticClass:"step step-accent"},[t._v("7")]),t._v(" "),n("li",{staticClass:"step"},[t._v("8")]),t._v(" "),n("li",{staticClass:"step step-error"},[t._v("9")]),t._v(" "),n("li",{staticClass:"step step-error"},[t._v("10")]),t._v(" "),n("li",{staticClass:"step"},[t._v("11")]),t._v(" "),n("li",{staticClass:"step"},[t._v("12")]),t._v(" "),n("li",{staticClass:"step step-warning"},[t._v("13")]),t._v(" "),n("li",{staticClass:"step step-warning"},[t._v("14")]),t._v(" "),n("li",{staticClass:"step"},[t._v("15")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("16")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("17")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("18")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("19")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("20")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("21")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("22")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("23")]),t._v(" "),n("li",{staticClass:"step step-neutral"},[t._v("end")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(412).default,Wrapper:n(411).default})}}]);