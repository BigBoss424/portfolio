(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{227:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/domain@2x-383b52a.png"},228:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/kolle@2x-73a8a39.png"},229:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/questionmark@2x-075ee20.png"},230:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/spotify@2x-9f252f1.png"},231:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/talisker@2x-5f5a5db.png"},232:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/ticket@2x-844c8a8.png"},241:function(t,n,e){"use strict";var r=e(1),o=e(35),c=e(242),f=e(161),l=e(4),d=1..toFixed,m=Math.floor,x=function(t,n,e){return 0===n?e:n%2==1?x(t,n-1,e*t):x(t*t,n/2,e)};r({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){d.call({})}))},{toFixed:function(t){var n,e,r,l,d=c(this),k=o(t),data=[0,0,0,0,0,0],v="",_="0",y=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*data[e],data[e]=r%1e7,r=m(r/1e7)},h=function(t){for(var n=6,e=0;--n>=0;)e+=data[n],data[n]=m(e/t),e=e%t*1e7},w=function(){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var n=String(data[t]);s=""===s?n:s+f.call("0",7-n.length)+n}return s};if(k<0||k>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(v="-",d=-d),d>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(d*x(2,69,1))-69)<0?d*x(2,-n,1):d/x(2,n,1),e*=4503599627370496,(n=52-n)>0){for(y(0,e),r=k;r>=7;)y(1e7,0),r-=7;for(y(x(10,r,1),0),r=n-1;r>=23;)h(1<<23),r-=23;h(1<<r),y(1,1),h(2),_=w()}else y(0,e),y(1<<-n,0),_=w()+f.call("0",k);return _=k>0?v+((l=_.length)<=k?"0."+f.call("0",k-l)+_:_.slice(0,l-k)+"."+_.slice(l-k)):v+_}})},242:function(t,n,e){var r=e(19);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},243:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/domain-303ed77.png"},244:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/domain_o-99d29cb.png"},245:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/kolle-178e3eb.png"},246:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/kolle_o-65018f9.png"},247:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/questionmark-fc7fb74.png"},248:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/questionmark_o-e7b8d51.png"},249:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/spotify-025f9ff.png"},250:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/spotify_o-2f1749b.png"},251:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/talisker-d08ed97.png"},252:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/talisker_o-f69afbf.png"},253:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/ticket-895fa2b.png"},254:function(t,n,e){"use strict";e.r(n),n.default=e.p+"img/ticket_o-652c16a.png"},280:function(t,n,e){var map={"./domain.png":243,"./domain@2x.png":227,"./domain_o.png":244,"./kolle.png":245,"./kolle@2x.png":228,"./kolle_o.png":246,"./questionmark.png":247,"./questionmark@2x.png":229,"./questionmark_o.png":248,"./spotify.png":249,"./spotify@2x.png":230,"./spotify_o.png":250,"./talisker.png":251,"./talisker@2x.png":231,"./talisker_o.png":252,"./ticket.png":253,"./ticket@2x.png":232,"./ticket_o.png":254};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=280},281:function(t,n,e){var map={"./domain@2x.png":227,"./kolle@2x.png":228,"./questionmark@2x.png":229,"./spotify@2x.png":230,"./talisker@2x.png":231,"./ticket@2x.png":232};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=281},310:function(t,n,e){"use strict";e.r(n);e(160),e(241);var r={props:{name:{type:String,required:!0},slug:{type:String,default:"kolle"},description:{type:String,required:!0},price:{type:Number,required:!0}},computed:{textPrice:function(){if(-1===this.price)return"???? €";var t=this.price/100;return"".concat(t.toFixed(2).toLocaleString()," €")},imageSources:function(){return{src:e(280)("./".concat(this.slug,".png")),srcset:"".concat(e(281)("./".concat(this.slug,"@2x.png"))," 2x")}}}},o=e(16),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"flex flex-col md:flex-row items-center my-8 border border-gray-300 hover:border-gray-500 shadow-lg p-4 w-full hover:shadow-2xl transition-all-300",attrs:{name:t.name}},[e("span",{staticClass:"flex flex-no-shrink flex-col md:mr-8 mb-4 md:mb-0"},[e("img",t._b({staticClass:"rounded-full border border-gray-500",attrs:{alt:t.name}},"img",t.imageSources,!1))]),t._v(" "),e("span",{staticClass:"text-center md:text-left"},[e("span",{staticClass:"block text-2xl font-bold py-3"},[t._v("\n      "+t._s(t.textPrice)+" — "+t._s(t.name)+"\n    ")]),t._v(" "),e("span",{domProps:{textContent:t._s(t.description)}})])])}),[],!1,null,null,null);n.default=component.exports}}]);