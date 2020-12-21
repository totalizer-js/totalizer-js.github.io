(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{305:function(t,e,s){"use strict";var r=new class{constructor(){this.raf="",this.instances=[]}play(){this.raf=requestAnimationFrame(this.tick.bind(this))}stop(){this.raf=cancelAnimationFrame(this.raf)}tick(t){this.instances.forEach(e=>e.tick(t)),this.instances.length&&this.play()}add(t){this.instances.includes(t)||(this.instances.push(t),1===this.instances.length&&this.play())}remove(t){const e=this.instances.indexOf(t);e>-1&&e<this.instances.length&&(this.instances.splice(e,1),this.instances.length||this.stop())}};const i={linear:()=>t=>t},a={Sine:()=>t=>1-Math.cos(t*Math.PI/2),Circ:()=>t=>1-Math.sqrt(1-t*t),Back:()=>t=>t*t*(3*t-2),Bounce:()=>t=>{let e=4,s=2**e;for(;t<(s-1)/11;)e-=1,s=2**e;return 1/4**(3-e)-7.5625*((3*s-2)/22-t)**2},Elastic:(t=1,e=.5)=>{const s=Math.min(Math.max(t,1),10),r=Math.min(Math.max(e,.1),2);return t=>0===t||1===t?t:-s*2**(10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/s))*(2*Math.PI)/r)}};["Quad","Cubic","Quart","Quint","Expo"].forEach((t,e)=>{a[t]=()=>t=>t**(e+2)}),Object.keys(a).forEach(t=>{const e=a[t];i["easeIn"+t]=e,i["easeOut"+t]=(t,s)=>r=>1-e(t,s)(1-r),i["easeInOut"+t]=(t,s)=>r=>r<.5?e(t,s)(2*r)/2:1-e(t,s)(-2*r+2)/2});var n=i;function o(t){const e=t.style.transform||"",s=/(\w+)\(([^)]*)\)/g,r=new Map;let i=s.exec(e);for(;i;)r.set(i[1],i[2]),i=s.exec(e);return r}const l=/^#([a-f\d])([a-f\d])([a-f\d])$/i,h=/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,c=/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,u=/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/,d=/^hsl\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/,p=/^hsla\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*([\d.]+)\s*\)$/,f=(t,e,s)=>{let r=s;return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t},m=t=>{const e=t.trim();let s;if(s=l.exec(e),s)return[parseInt(`${s[1]}${s[1]}`,16),parseInt(`${s[2]}${s[2]}`,16),parseInt(`${s[3]}${s[3]}`,16),1];if(s=h.exec(e),s)return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16),1];if(s=c.exec(e)||u.exec(e),s)return[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10),void 0!==s[4]?parseFloat(s[4],10):1];const r=d.exec(e)||p.exec(e);if(r){const[t,e,s,i]=[parseInt(r[1],10)/360,parseInt(r[2],10)/100,parseInt(r[3],10)/100,void 0!==r[4]?parseFloat(r[4],10):1];if(0===e)return[s,s,s,i];const a=s<.5?s*(1+e):s+e-s*e,n=2*s-a;return[f(n,a,t+1/3),f(n,a,t),f(n,a,t-1/3),i]}return null},v=t=>{if((t=>{const e=t.toString().trim();return[l,h,c,u,d,p].some(t=>t.test(e))})(t))return{numbers:m(t),strings:["rgba(",",",",",",",")"]};const e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;return{numbers:t.match(e)?t.match(e).map(Number):[0],strings:t.split(e)}};var g=t=>Object.entries(t.props).map(([e,s])=>{const{el:r,delay:i,endDelay:a,duration:n,easing:l}=t;let[h,c]=["",""],[u,d,p,f,m]=["",null,null,null,null];const g=o(r);if(["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"].includes(e))u="transform",h=g.get(e)||(e.includes("scale")?1:0);else if(null!==r.getAttribute(e))u="attribute",h=r.getAttribute(e);else if(e in r.style){u="css";const t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();h=r.style[e]||getComputedStyle(r).getPropertyValue(t)||0}if([h,c]=Array.isArray(s)?s:[h,s],"function"==typeof s)f=s;else{const t=v(h.toString()),s=v(c.toString());[d,p]=[t.numbers,s.numbers],m=s.strings.length?s.strings:t.strings;const r=["translate","padding","margin","width","height","left","top","right","bottom","fontSize"],i=["rotate","skew"];m[1]||(r.some(t=>e.includes(t))&&(m[1]="px"),i.some(t=>e.includes(t))&&(m[1]="deg"))}return{el:r,delay:i,endDelay:a,duration:n,easing:l,prop:e,type:u,from:d,to:p,str:m,fn:f}});e.a=class{constructor(t){this.tweens=[],this.renderMap=new Map,this._now=0,this._start=0,this._last=0,this._cur=0,this.totalTime=0,this.loopTimes=0,this.isReverse=!1,this.isAlternate=!1,t&&this.add(t)}get cur(){return this._cur}set cur(t){t!==this._cur&&(this._cur=t,this.render())}render(){this.tweens.forEach(t=>{this._setRenderMap(t)}),this._runRenderMap()}_setRenderMap(t){let e;const s=this.isReverse?this.totalTime-this.cur:this.cur;let r;s<t.delay?(e=0,r=[-1,s-t.delay]):s<=t.delay+t.duration?(e=(s-t.delay)/t.duration,r=[1,0]):(e=1,r=[0,t.delay+t.duration-s]);const i=t.easing(e);let a="";if(t.fn)a=t.fn(e);else{[a]=t.str;for(let e=0;e<t.to.length;e+=1){const s=t.from[e];a+=s+(t.to[e]-s)*i+t.str[e+1]}}let n=this.renderMap.get(t.el);n||(n=new Map);const o=n.get(t.prop);var l,h;(!o||(l=o.level,(h=r)[0]>0||h[0]>l[0]||h[1]>=l[1]))&&n.set(t.prop,{el:t.el,type:t.type,prop:t.prop,result:a,level:r}),this.renderMap.set(t.el,n)}_runRenderMap(){this.renderMap.forEach((t,e)=>{t.forEach(t=>{const{style:s}=e;if("transform"===t.type){const e=o(t.el);e.set(t.prop,t.result);let r="";e.forEach((t,e)=>{r+=`${e}(${t}) `}),s.transform=r}else"attribute"===t.type?t.el.setAttribute(t.prop,t.result):s[t.prop]=t.result})}),this.renderMap=new Map}tick(t){this._start||(this._start=t),this._now=t-this._start+this._last,this._now<=this.totalTime?this.cur=this._now:(this.loopTimes-=1,this.loopTimes>0?(this.cur=this.totalTime,this._start=0,this._last=0,this.isAlternate&&(this.isReverse=!this.isReverse)):this.finish())}play(){return r.add(this),this}loop(t=1/0){return this.loopTimes=t||0,this}reverse(t){return this.isReverse=void 0!==t?Boolean(t):!this.isReverse,this}alternate(t){return this.isAlternate=void 0!==t?Boolean(t):!this.isAlternate,this}pause(){return this._last=this._now,this._start=0,r.remove(this),this}process(t){return this.cur=this.totalTime*Math.max(0,Math.min(t,1)),this}reset(){return this._start=0,this._last=0,this.cur=0,r.remove(this),this}finish(){return this._last=0,this._start=0,this.cur=this.totalTime,r.remove(this),this}add(t={}){const e={duration:300,props:{},delay:0,endDelay:0,easing:"linear",...t};"string"==typeof e.easing&&(e.easing=n[e.easing]?n[e.easing]():n.linear()),"function"!=typeof e.easing&&(e.easing=n.linear()),this.totalTime=Math.max(e.duration+e.delay+e.endDelay,this.totalTime);const s=g(e);return this.tweens.push(...s),this}clear(){this.tweens=[]}}},330:function(t,e,s){},373:function(t,e,s){"use strict";s(330)},400:function(t,e,s){"use strict";s.r(e);var r=s(305),i={data:function(){return{}},mounted:function(){var t=new r.a;t.add({el:document.getElementById("div"),props:{translateX:["0px","200px"],background:["#f8c555","#fff"]},delay:100,endDelay:100,duration:1e3}),t.loop().alternate().play()},methods:{}},a=(s(373),s(42)),n=Object(a.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"demo"},[s("div",{attrs:{id:"div"}})]),t._v(" "),s("div",{},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v("播放")]),t._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[t._v("暂停")]),t._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[t._v("循环")]),t._v(" "),s("a",{attrs:{href:"javascript:void(0)"}},[t._v("往返")])])])}],!1,null,"2478a04d",null);e.default=n.exports}}]);