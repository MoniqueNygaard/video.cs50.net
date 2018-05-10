webpackJsonpjwplayer([6],{42:function(t,e,i){var r,n;r=[],n=function(){function t(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function e(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):i[1]>59?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function i(){this.values=Object.create(null)}function r(t,i){function r(){function t(t){return i=i.substr(t.length),t}if(!i)return null;var e=i.match(/^([^<]*)(<[^>]+>?)?/);return t(e[1]?e[1]:e[2])}function n(t){return g[t]}function o(t){for(;d=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(d[0],n);return t}function a(t,e){return!y[e.localName]||y[e.localName]===t.localName}function s(e,i){var r=m[e];if(!r)return null;var n=t.document.createElement(r);n.localName=r;var o=v[e];return o&&i&&(n[o]=i.trim()),n}for(var h,l=t.document.createElement("div"),c=l,p=[];null!==(h=r());)if("<"!==h[0])c.appendChild(t.document.createTextNode(o(h)));else{if("/"===h[1]){p.length&&p[p.length-1]===h.substr(2).replace(">","")&&(p.pop(),c=c.parentNode);continue}var u,f=e(h.substr(1,h.length-2));if(f){u=t.document.createProcessingInstruction("timestamp",f),c.appendChild(u);continue}var d=h.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!d)continue;if(u=s(d[1],d[3]),!u)continue;if(!a(c,u))continue;d[2]&&(u.className=d[2].substr(1).replace("."," ")),p.push(d[1]),c.appendChild(u),c=u}return l}function n(t){for(var e=0;e<b.length;e++){var i=b[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function o(t,e){for(var i=e.childNodes.length-1;i>=0;i--)t.push(e.childNodes[i])}function a(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?(t.length=0,r[0]):i}return"ruby"===e.tagName?a(t):e.childNodes?(o(t,e),a(t)):void 0}function s(t){if(!t||!t.childNodes)return"ltr";var e,i,r=[];for(o(r,t);e=a(r);)for(var s=0;s<e.length;s++)if(i=e.charCodeAt(s),n(i))return"rtl";return"ltr"}function h(t){if("number"==typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return++r*-1}function l(){}function c(t,e){l.call(this),this.cue=e,this.cueDiv=r(t,e.text),this.cueDiv.className="jw-text-track-cue jw-reset";var i={textShadow:"",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(i,this.cueDiv),this.div=t.document.createElement("div"),i={textAlign:"middle"===e.align?"center":e.align,whiteSpace:"pre-line",position:"absolute",direction:s(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"},this.applyStyles(i),this.div.appendChild(this.cueDiv);var n=0;switch(e.align){case"start":case"left":n=e.position;break;case"middle":case"center":n=e.position-e.size/2;break;case"end":case"right":n=e.position-e.size}n=Math.max(Math.min(100,n),0),""===e.vertical?this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:"auto",width:this.formatStyle(t.width,"px")})}}function p(t){var e;if(t.div){var i=t.div.offsetHeight,r=t.div.offsetWidth,n=t.div.offsetTop,o=(o=t.div.childNodes)&&(o=o[0])&&o.getClientRects&&o.getClientRects();t=t.div.getBoundingClientRect(),e=o?Math.max(o[0]&&o[0].height||0,t.height/o.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight,this.width=Math.ceil(this.width+1)}function u(t,e,i,r,n){function o(t,e){for(var n,o=new p(t),a=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(i,e[s])||t.within(i)&&t.overlapsAny(r);)t.move(e[s]);if(t.within(i))return t;var h=t.intersectPercentage(i);a>h&&(n=new p(t),a=h),t=new p(o)}return n||o}var a=new p(e),s=e.cue,l=h(s),c=[];if(s.snapToLines){var u;switch(s.vertical){case"":c=["+y","-y"],u="height";break;case"rl":c=["+x","-x"],u="width";break;case"lr":c=["-x","+x"],u="width"}var f=a.lineHeight,d=Math.floor(i[u]/f);l=Math.min(l,d-n);var g=f*Math.round(l),m=i[u]+f,v=c[0];if(Math.abs(g)>m&&(g=g<0?-1:1,g*=Math.ceil(m/f)*f),l<0){g+=""===s.vertical?i.height:i.width;var y=n*f;g-=y,c=c.reverse()}g-=n,a.move(v,g)}else{var b=a.lineHeight/i.height*100;switch(s.lineAlign){case"middle":l-=b/2;break;case"end":l-=b}switch(s.vertical){case"":e.applyStyles({top:e.formatStyle(l,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(l,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(l,"%")})}c=["+y","-x","+x","-y"],a=new p(e)}var w=o(a,c);e.move(w.toCSSCompatValues(i))}function f(){}function d(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},i.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var r=0;r<i.length;++r)if(e===i[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(/^[\d]{1,3}(\.[\d]*)?%$/.test(e)&&(e=parseFloat(e),e>=0&&e<=100))&&(this.set(t,e),!0)}};var g={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},m={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},v={v:"title",lang:"lang"},y={rt:"ruby"},b=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];l.prototype.applyStyles=function(t,e){e=e||this.div;for(var i in t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},l.prototype.formatStyle=function(t,e){return 0===t?0:t+e},c.prototype=Object.create(l.prototype),c.prototype.constructor=c,p.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},p.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},p.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},p.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},p.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},p.prototype.intersectPercentage=function(t){var e=Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left)),i=Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top)),r=e*i;return r/(this.height*this.width)},p.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},p.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t;var n={left:t.left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i};return n},f.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},f.convertCueToDOMTree=function(t,e){return t&&e?r(t,e):null};var w="1.5%";f.processCues=function(t,e,i,r){if(!t||!e||!i)return null;for(;i.firstChild;)i.removeChild(i.firstChild);if(!e.length)return null;var n=t.document.createElement("div");if(n.className="jw-text-track-container jw-reset",n.style.position="absolute",n.style.left="0",n.style.right="0",n.style.top="0",n.style.bottom="0",n.style.margin=w,i.appendChild(n),d(e)||r){var o=[],a=p.getSimpleBoxPosition(n),s=e.reduce(function(t,e){return t+e.text.split("\n").length},0);!function(){for(var i=0;i<e.length;i++){var r=e[i],h=new c(t,r);h.div.className="jw-text-track-display jw-reset",n.appendChild(h.div),u(t,h,a,o,s),s-=r.text.split("\n").length,r.displayState=h.div,o.push(p.getSimpleBoxPosition(h))}}()}else for(var h=0;h<e.length;h++)n.appendChild(e[h].displayState)},window.WebVTT||(window.WebVTT=f)}.apply(e,r),!(void 0!==n&&(t.exports=n))}});
//# sourceMappingURL=polyfills.vttrenderer.976d541a74951c79ce60.map