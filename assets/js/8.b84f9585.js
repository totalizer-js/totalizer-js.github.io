(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{305:function(t,e,s){"use strict";var r=new class{constructor(){this.raf="",this.instances=[]}play(){this.raf=requestAnimationFrame(this.tick.bind(this))}stop(){this.raf=cancelAnimationFrame(this.raf)}tick(t){this.instances.forEach(e=>e.tick(t)),this.instances.length&&this.play()}add(t){this.instances.includes(t)||(this.instances.push(t),1===this.instances.length&&this.play())}remove(t){const e=this.instances.indexOf(t);e>-1&&e<this.instances.length&&(this.instances.splice(e,1),this.instances.length||this.stop())}};function i(t){const e=t.style.transform||"",s=/(\w+)\(([^)]*)\)/g,r=new Map;let i=s.exec(e);for(;i;)r.set(i[1],i[2]),i=s.exec(e);return r}const n=/^#([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,o=/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,l=/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/,h=/^hsl\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*\)$/,c=/^hsla\(\s*(\d+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*([\d.]+)\s*\)$/,u=(t,e,s)=>{let r=s;return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t},d=t=>{const e=t.trim();let s;if(s=n.exec(e),s)return[parseInt(`${s[1]}${s[1]}`,16),parseInt(`${s[2]}${s[2]}`,16),parseInt(`${s[3]}${s[3]}`,16),1];if(s=a.exec(e),s)return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16),1];if(s=o.exec(e)||l.exec(e),s)return[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10),void 0!==s[4]?parseFloat(s[4],10):1];const r=h.exec(e)||c.exec(e);if(r){const[t,e,s,i]=[parseInt(r[1],10)/360,parseInt(r[2],10)/100,parseInt(r[3],10)/100,void 0!==r[4]?parseFloat(r[4],10):1];if(0===e)return[s,s,s,i];const n=s<.5?s*(1+e):s+e-s*e,a=2*s-n;return[u(a,n,t+1/3),u(a,n,t),u(a,n,t-1/3),i]}return null},p={linear:()=>t=>t},f={Sine:()=>t=>1-Math.cos(t*Math.PI/2),Circ:()=>t=>1-Math.sqrt(1-t*t),Back:()=>t=>t*t*(3*t-2),Bounce:()=>t=>{let e=4,s=2**e;for(;t<(s-1)/11;)e-=1,s=2**e;return 1/4**(3-e)-7.5625*((3*s-2)/22-t)**2},Elastic:(t=1,e=.5)=>{const s=Math.min(Math.max(t,1),10),r=Math.min(Math.max(e,.1),2);return t=>0===t||1===t?t:-s*2**(10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/s))*(2*Math.PI)/r)}};["Quad","Cubic","Quart","Quint","Expo"].forEach((t,e)=>{f[t]=()=>t=>t**(e+2)}),Object.keys(f).forEach(t=>{const e=f[t];p["easeIn"+t]=e,p["easeOut"+t]=(t,s)=>r=>1-e(t,s)(1-r),p["easeInOut"+t]=(t,s)=>r=>r<.5?e(t,s)(2*r)/2:1-e(t,s)(-2*r+2)/2});var m=p;const g=t=>{if((t=>{const e=t.toString().trim();return[n,a,o,l,h,c].some(t=>t.test(e))})(t))return{numbers:d(t),strings:["rgba(",",",",",",",")"]};const e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;return{numbers:t.match(e)?t.match(e).map(Number):[0],strings:t.split(e)}};var y=t=>Object.entries(t.props).map(([e,s])=>{const{el:r,delay:n,endDelay:a,duration:o}=t;let[l,h]=["",""],[c,u,d,p,f]=["",null,null,null,null];const y=i(r);let v;v="string"==typeof t.easing?m[t.easing]?m[t.easing]():m.linear():"function"==typeof t.easing?t.easing:m.linear();if(["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"].includes(e))c="transform",l=y.get(e)||(e.includes("scale")?1:0);else if(null!==r.getAttribute(e))c="attribute",l=r.getAttribute(e);else if(e in r.style){c="css";const t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();l=r.style[e]||getComputedStyle(r).getPropertyValue(t)||0}if([l,h]=Array.isArray(s)?s:[l,s],"function"==typeof s)p=s;else{const t=g(l.toString()),s=g(h.toString());[u,d]=[t.numbers,s.numbers],f=s.strings.length?s.strings:t.strings;const r=["translate","padding","margin","width","height","left","top","right","bottom","fontSize"],i=["rotate","skew"];f[1]||(r.some(t=>e.includes(t))&&(f[1]="px"),i.some(t=>e.includes(t))&&(f[1]="deg"))}return{el:r,delay:n,endDelay:a,duration:o,easing:v,prop:e,type:c,from:u,to:d,str:f,fn:p}});e.a=class{constructor(t){this.tweens=[],this.renderMap=new Map,this._now=0,this._start=0,this._last=0,this._cur=0,this.totalTime=0,this.loopTimes=0,this.isReverse=!1,this.isAlternate=!1,t&&this.add(t)}get cur(){return this._cur}set cur(t){t!==this._cur&&(this._cur=t,this.render())}render(){this.tweens.forEach(t=>{this._setRenderMap(t)}),this._runRenderMap()}_setRenderMap(t){const e=this.isReverse?this.totalTime-this.cur:this.cur,s=((t,e)=>{let s;return s=e<t.delay?[-1,e-t.delay]:e<=t.delay+t.duration?[1,0]:[0,t.delay+t.duration-e],s})(t,e);let r;r=e<t.delay?0:e<=t.delay+t.duration?(e-t.delay)/t.duration:1;const i=t.easing(r);let n="";if(t.fn)n=t.fn(r);else{[n]=t.str;for(let e=0;e<t.to.length;e+=1){const s=t.from[e];n+=s+(t.to[e]-s)*i+t.str[e+1]}}let a=this.renderMap.get(t.el);a||(a=new Map);const o=a.get(t.prop);var l,h;(!o||(l=s,h=o.level,l[0]>0||l[0]>h[0]||l[0]===h[0]&&l[1]>=h[1]))&&a.set(t.prop,{el:t.el,type:t.type,prop:t.prop,result:n,level:s}),this.renderMap.set(t.el,a)}_runRenderMap(){this.renderMap.forEach((t,e)=>{t.forEach(t=>{const{style:s}=e;if("transform"===t.type){const e=i(t.el);e.set(t.prop,t.result);let r="";e.forEach((t,e)=>{r+=`${e}(${t}) `}),s.transform=r}else"attribute"===t.type?t.el.setAttribute(t.prop,t.result):s[t.prop]=t.result})}),this.renderMap=new Map}tick(t){this._start||(this._start=t),this._now=t-this._start+this._last,this._now<=this.totalTime?this.cur=this._now:(this.loopTimes-=1,this.loopTimes>0?(this.cur=this.totalTime,this._start=0,this._last=0,this.isAlternate&&(this.isReverse=!this.isReverse)):this.finish())}play(){return r.add(this),this}loop(t=1/0){return this.loopTimes=t||0,this}reverse(t){return this.isReverse=void 0!==t?Boolean(t):!this.isReverse,this}alternate(t){return this.isAlternate=void 0!==t?Boolean(t):!this.isAlternate,this}pause(){return this._last=this._now,this._start=0,r.remove(this),this}process(t){return this.cur=this.totalTime*Math.max(0,Math.min(t,1)),this}reset(){return this._start=0,this._last=0,this.cur=0,r.remove(this),this}finish(){return this._last=0,this._start=0,this.cur=this.totalTime,r.remove(this),this}add(t={}){const e={duration:300,props:{},delay:0,endDelay:0,easing:"linear",...t};return this.totalTime=Math.max(e.duration+e.delay+e.endDelay,this.totalTime),this.tweens.push(...y(e)),this}clear(){this.tweens=[]}}},306:function(t,e,s){"use strict";var r=s(305);e.a=r.a},336:function(t,e,s){},372:function(t,e,s){"use strict";s(336)},383:function(t,e,s){"use strict";s.r(e);var r=s(306),i={data:function(){return{}},mounted:function(){var t=new r.a;t.add({el:this.$refs.div,props:{translateX:[0,300],scale:[.4,1],rotate:[0,720],background:["#ddd","#08c"]},delay:300,endDelay:300,duration:2e3,easing:"easeOutBounce"}),t.loop().alternate().play()},methods:{}},n=(s(372),s(42)),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"demo"},[e("h2",[this._v("Sample Animation")]),this._v(" "),e("div",{ref:"div",attrs:{id:"div"}})])}),[],!1,null,"31fe16db",null);e.default=a.exports}}]);