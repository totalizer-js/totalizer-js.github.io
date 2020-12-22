(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{305:function(t,e,s){"use strict";var r=new class{constructor(){this.raf="",this.instances=[]}play(){this.raf=requestAnimationFrame(this.tick.bind(this))}stop(){this.raf=cancelAnimationFrame(this.raf)}tick(t){this.instances.forEach(e=>e.tick(t)),this.instances.length&&this.play()}add(t){this.instances.includes(t)||(this.instances.push(t),1===this.instances.length&&this.play())}remove(t){const e=this.instances.indexOf(t);e>-1&&e<this.instances.length&&(this.instances.splice(e,1),this.instances.length||this.stop())}};function a(t){const e=t.style.transform||"",s=/(\w+)\(([^)]*)\)/g,r=new Map;let a=s.exec(e);for(;a;)r.set(a[1],a[2]),a=s.exec(e);return r}const i=/^#([a-f\d])([a-f\d])([a-f\d])$/i,l=/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,o=/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,c=/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/,n=/^hsl\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/,d=/^hsla\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*([\d.]+)\s*\)$/,_=(t,e,s)=>{let r=s;return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t},v=t=>{const e=t.trim();let s;if(s=i.exec(e),s)return[parseInt(`${s[1]}${s[1]}`,16),parseInt(`${s[2]}${s[2]}`,16),parseInt(`${s[3]}${s[3]}`,16),1];if(s=l.exec(e),s)return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16),1];if(s=o.exec(e)||c.exec(e),s)return[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10),void 0!==s[4]?parseFloat(s[4],10):1];const r=n.exec(e)||d.exec(e);if(r){const[t,e,s,a]=[parseInt(r[1],10)/360,parseInt(r[2],10)/100,parseInt(r[3],10)/100,void 0!==r[4]?parseFloat(r[4],10):1];if(0===e)return[s,s,s,a];const i=s<.5?s*(1+e):s+e-s*e,l=2*s-i;return[_(l,i,t+1/3),_(l,i,t),_(l,i,t-1/3),a]}return null},h={linear:()=>t=>t},p={Sine:()=>t=>1-Math.cos(t*Math.PI/2),Circ:()=>t=>1-Math.sqrt(1-t*t),Back:()=>t=>t*t*(3*t-2),Bounce:()=>t=>{let e=4,s=2**e;for(;t<(s-1)/11;)e-=1,s=2**e;return 1/4**(3-e)-7.5625*((3*s-2)/22-t)**2},Elastic:(t=1,e=.5)=>{const s=Math.min(Math.max(t,1),10),r=Math.min(Math.max(e,.1),2);return t=>0===t||1===t?t:-s*2**(10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/s))*(2*Math.PI)/r)}};["Quad","Cubic","Quart","Quint","Expo"].forEach((t,e)=>{p[t]=()=>t=>t**(e+2)}),Object.keys(p).forEach(t=>{const e=p[t];h["easeIn"+t]=e,h["easeOut"+t]=(t,s)=>r=>1-e(t,s)(1-r),h["easeInOut"+t]=(t,s)=>r=>r<.5?e(t,s)(2*r)/2:1-e(t,s)(-2*r+2)/2});var u=h;const f=t=>{if((t=>{const e=t.toString().trim();return[i,l,o,c,n,d].some(t=>t.test(e))})(t))return{numbers:v(t),strings:["rgba(",",",",",",",")"]};const e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;return{numbers:t.match(e)?t.match(e).map(Number):[0],strings:t.split(e)}};var y=t=>Object.entries(t.props).map(([e,s])=>{const{el:r,delay:i,endDelay:l,duration:o}=t;let[c,n]=["",""],[d,_,v,h,p]=["",null,null,null,null];const y=a(r);let C;C="string"==typeof t.easing?u[t.easing]?u[t.easing]():u.linear():"function"==typeof t.easing?t.easing:u.linear();if(["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"].includes(e))d="transform",c=y.get(e)||(e.includes("scale")?1:0);else if(null!==r.getAttribute(e))d="attribute",c=r.getAttribute(e);else if(e in r.style){d="css";const t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();c=r.style[e]||getComputedStyle(r).getPropertyValue(t)||0}if([c,n]=Array.isArray(s)?s:[c,s],"function"==typeof s)h=s;else{const t=f(c.toString()),s=f(n.toString());[_,v]=[t.numbers,s.numbers],p=s.strings.length?s.strings:t.strings;const r=["translate","padding","margin","width","height","left","top","right","bottom","fontSize"],a=["rotate","skew"];p[1]||(r.some(t=>e.includes(t))&&(p[1]="px"),a.some(t=>e.includes(t))&&(p[1]="deg"))}return{el:r,delay:i,endDelay:l,duration:o,easing:C,prop:e,type:d,from:_,to:v,str:p,fn:h}});e.a=class{constructor(t){this.tweens=[],this.renderMap=new Map,this._now=0,this._start=0,this._last=0,this._cur=0,this.totalTime=0,this.loopTimes=0,this.isReverse=!1,this.isAlternate=!1,t&&this.add(t)}get cur(){return this._cur}set cur(t){t!==this._cur&&(this._cur=t,this.render())}render(){this.tweens.forEach(t=>{this._setRenderMap(t)}),this._runRenderMap()}_setRenderMap(t){const e=this.isReverse?this.totalTime-this.cur:this.cur,s=((t,e)=>{let s;return s=e<t.delay?[-1,e-t.delay]:e<=t.delay+t.duration?[1,0]:[0,t.delay+t.duration-e],s})(t,e);let r;r=e<t.delay?0:e<=t.delay+t.duration?(e-t.delay)/t.duration:1;const a=t.easing(r);let i="";if(t.fn)i=t.fn(r);else{[i]=t.str;for(let e=0;e<t.to.length;e+=1){const s=t.from[e];i+=s+(t.to[e]-s)*a+t.str[e+1]}}let l=this.renderMap.get(t.el);l||(l=new Map);const o=l.get(t.prop);var c,n;(!o||(c=s,n=o.level,c[0]>0||c[0]>n[0]||c[0]===n[0]&&c[1]>=n[1]))&&l.set(t.prop,{el:t.el,type:t.type,prop:t.prop,result:i,level:s}),this.renderMap.set(t.el,l)}_runRenderMap(){this.renderMap.forEach((t,e)=>{t.forEach(t=>{const{style:s}=e;if("transform"===t.type){const e=a(t.el);e.set(t.prop,t.result);let r="";e.forEach((t,e)=>{r+=`${e}(${t}) `}),s.transform=r}else"attribute"===t.type?t.el.setAttribute(t.prop,t.result):s[t.prop]=t.result})}),this.renderMap=new Map}tick(t){this._start||(this._start=t),this._now=t-this._start+this._last,this._now<=this.totalTime?this.cur=this._now:(this.loopTimes-=1,this.loopTimes>0?(this.cur=this.totalTime,this._start=0,this._last=0,this.isAlternate&&(this.isReverse=!this.isReverse)):this.finish())}play(){return r.add(this),this}loop(t=1/0){return this.loopTimes=t||0,this}reverse(t){return this.isReverse=void 0!==t?Boolean(t):!this.isReverse,this}alternate(t){return this.isAlternate=void 0!==t?Boolean(t):!this.isAlternate,this}pause(){return this._last=this._now,this._start=0,r.remove(this),this}process(t){return this.cur=this.totalTime*Math.max(0,Math.min(t,1)),this}reset(){return this._start=0,this._last=0,this.cur=0,r.remove(this),this}finish(){return this._last=0,this._start=0,this.cur=this.totalTime,r.remove(this),this}add(t={}){const e={duration:300,props:{},delay:0,endDelay:0,easing:"linear",...t};return this.totalTime=Math.max(e.duration+e.delay+e.endDelay,this.totalTime),this.tweens.push(...y(e)),this}clear(){this.tweens=[]}}},340:function(t,e,s){},376:function(t,e,s){"use strict";s(340)},391:function(t,e,s){"use strict";s.r(e);s(92);var r=s(305),a={mounted:function(){this.logo(),this.eases(),this.line()},methods:{logo:function(){var t=new r.a;t.add({el:this.$refs.boxer,props:{translateX:["50px","-50px"]}});var e=new r.a;e.add({el:this.$refs.logo,props:{translateX:["-50px","50px"]}});var s=new r.a;s.add({el:this.$refs.section,props:{translateX:["50px","-50px"]}});window.addEventListener("mousemove",(function(r){var a=r.clientX/document.body.clientWidth;t.process(a),e.process(a),s.process(a)}))},eases:function(){var t=this;["linear","easeOutSine","easeOutQuad","easeOutCubic","easeOutCirc","easeOutBounce","easeOutBack","easeOutElastic"].forEach((function(e,s){var a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("x",120),a.setAttribute("y",16*(s+1)+15),a.setAttribute("width",20),a.setAttribute("height",10),a.setAttribute("rx",2),a.setAttribute("fill","rgba(0,220,255,1)");var i=document.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("x",20),i.setAttribute("y",16*(s+1)+24),i.setAttribute("class","text"),i.innerHTML=e,i.setAttribute("style",'font-size:12px;line-height:20px;  font-family:"Times New Roman",Georgia,Serif;'),i.setAttribute("fill","#aaa"),new r.a({el:a,props:{x:"320"},duration:2e3,easing:e}).loop().alternate().play(),t.$refs.eases.appendChild(i),t.$refs.eases.appendChild(a)}))},line:function(){var t=new r.a;t.add({el:this.$refs.line,props:{x1:[100,900],x2:[100,900]},duration:4e3}),t.add({el:this.$refs.rect1,props:{width:300},duration:1500}),t.add({el:this.$refs.rect2,props:{width:300},delay:1e3,duration:1500}),t.add({el:this.$refs.rect3,props:{width:200},delay:2e3,duration:1e3}),t.add({el:this.$refs.rect4,props:{width:200},delay:3e3,duration:1e3}),t.loop().alternate().play()}}},i=(s(376),s(42)),l=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"wrapper",staticClass:"wrapper",staticStyle:{position:"relative"}},[s("div",{ref:"boxer",staticClass:"boxer"},[t._m(0)]),t._v(" "),s("div",{ref:"logo",staticClass:"logo"},[s("h1",[s("span",{ref:"letter"},[t._v("T")]),t._v("otalizer JS")]),t._v(" "),s("p",[t._v("JavaScript Animation Engine")])]),t._v(" "),s("section",{ref:"section"},[s("svg",{ref:"eases",staticClass:"eases",attrs:{viewBox:"0 0 400 200"}}),t._v(" "),s("svg",{ref:"timeline",staticClass:"timeline",attrs:{viewBox:"0 0 1000 500"}},[s("rect",{staticClass:"rect_bg",attrs:{x:"100",y:"100",width:"300",height:"70"}}),t._v(" "),s("rect",{ref:"rect1",staticClass:"rect_ac",attrs:{x:"100",y:"100",width:"0",height:"70"}}),t._v(" "),s("text",{attrs:{x:"250",y:"150","font-size":"40","text-anchor":"middle"}},[t._v("\n        Totalizer\n      ")]),t._v(" "),s("rect",{staticClass:"rect_delay",attrs:{x:"100",y:"170",width:"200",height:"70"}}),t._v(" "),s("rect",{staticClass:"rect_bg",attrs:{x:"300",y:"170",width:"300",height:"70"}}),t._v(" "),s("rect",{ref:"rect2",staticClass:"rect_ac",attrs:{x:"300",y:"170",width:"0",height:"70"}}),t._v(" "),s("text",{attrs:{x:"450",y:"215","font-size":"30","text-anchor":"middle"}},[t._v("1500")]),t._v(" "),s("rect",{staticClass:"rect_delay",attrs:{x:"100",y:"240",width:"400",height:"70"}}),t._v(" "),s("rect",{staticClass:"rect_bg",attrs:{x:"500",y:"240",width:"200",height:"70"}}),t._v(" "),s("rect",{ref:"rect3",staticClass:"rect_ac",attrs:{x:"500",y:"240",width:"0",height:"70"}}),t._v(" "),s("text",{attrs:{x:"600",y:"285","font-size":"30","text-anchor":"middle"}},[t._v("1000")]),t._v(" "),s("rect",{staticClass:"rect_delay",attrs:{x:"100",y:"310",width:"600",height:"70"}}),t._v(" "),s("rect",{staticClass:"rect_bg",attrs:{x:"700",y:"310",width:"200",height:"70"}}),t._v(" "),s("rect",{ref:"rect4",staticClass:"rect_ac",attrs:{x:"700",y:"310",width:"0",height:"70"}}),t._v(" "),s("text",{attrs:{x:"800",y:"355","font-size":"30","text-anchor":"middle"}},[t._v("1000")]),t._v(" "),s("line",{attrs:{x1:"50",y1:"100",x2:"950",y2:"100","stroke-dasharray":"5"}}),t._v(" "),s("line",{attrs:{x1:"50",y1:"170",x2:"950",y2:"170","stroke-dasharray":"5"}}),t._v(" "),s("line",{attrs:{x1:"50",y1:"240",x2:"950",y2:"240","stroke-dasharray":"5"}}),t._v(" "),s("line",{attrs:{x1:"50",y1:"310",x2:"950",y2:"310","stroke-dasharray":"5"}}),t._v(" "),s("line",{attrs:{x1:"50",y1:"380",x2:"950",y2:"380","stroke-dasharray":"5"}}),t._v(" "),s("line",{attrs:{x1:"100",y1:"50",x2:"100",y2:"430","stroke-dasharray":"5"}}),t._v(" "),s("line",{attrs:{x1:"900",y1:"50",x2:"900",y2:"430","stroke-dasharray":"5"}}),t._v(" "),s("line",{ref:"line",staticClass:"move",attrs:{x1:"100",y1:"50",x2:"100",y2:"430"}})])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preloader"},[s("div",{staticClass:"preloader__ring"},[s("div",{staticClass:"preloader__sector"},[t._v("T")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("o")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("t")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("a")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("l")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("i")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("z")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("e")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("r")]),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"})]),t._v(" "),s("div",{staticClass:"preloader__ring"},[s("div",{staticClass:"preloader__sector"},[t._v("T")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("o")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("t")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("a")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("l")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("i")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("z")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("e")]),t._v(" "),s("div",{staticClass:"preloader__sector"},[t._v("r")]),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"}),t._v(" "),s("div",{staticClass:"preloader__sector"})])])}],!1,null,"21a1257f",null);e.default=l.exports}}]);