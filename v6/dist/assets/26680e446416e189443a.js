(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{271:function(t,e,l){"use strict";l.r(e);var r=l(265),n=l(267),o=l(259),c=l(34),v={props:{talk:{type:Object,required:!0}},setup(t){var e=t.talk.date&&Object(r.a)(t.talk.date,"yyyy-MM-dd",new Date);return{formattedDate:Object(c.a)(()=>e?Object(n.a)(e,"do 'of' MMMM yyyy"):""),isUpcoming:Object(c.a)(()=>e?Object(o.a)(e):"")}}},d=l(8),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("article",{staticClass:"py-4 pb-16 my-4 border-b border-gray-400 last:border-b-0 flex flex-col md:flex-row justify-center"},[l("div",{staticClass:"flex flex-col flex-1"},[l("div",[l("ClientOnly",[t.isUpcoming?l("div",{staticClass:"block mb-2 transition-all-300 animated fade-in"},[l("span",{staticClass:"inline bg-gray-700 text-gray-100 rounded px-2 py-1"},[t._v("\n            Upcoming\n          ")])]):t._e()]),t._v(" "),l("h2",{staticClass:"text-2xl inline-block py-1"},[t._v("\n        "+t._s(t.talk.title)+"\n      ")])],1),t._v(" "),l("div",{staticClass:"text-gray-700"},[l("a",t._b({class:[t.talk.eventUrl&&"underline hover:no-underline inline-block hover:text-gray-800"]},"a",t.talk.eventUrl?{href:t.talk.eventUrl,rel:"nofollow noopener"}:{},!1),[t._v("\n        "+t._s(t.talk.eventName)+"\n      ")]),t._v(" "),t.talk.location?[t._v("\n        •\n        "),l("span",[t._v(t._s(t.talk.location))])]:t._e(),t._v(" "),t.talk.date?[t._v("\n        •\n        "),l("time",[t._v(t._s(t.formattedDate))])]:t._e()],2),t._v(" "),l("div",{staticClass:"flex md:flex-col mt-8"},[t.talk.videoUrl?l("a",{staticClass:"group flex items-center mr-8 md:mr-0",attrs:{href:t.talk.videoUrl,title:"Open video for "+t.talk.title,rel:"noopener nofollow",target:"_blank"}},[l("svg",{staticClass:"w-6 h-6 mr-2 group",attrs:{role:"presentation",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[l("description",[t._v("\n            Video camera icon which will open the page of the talk's video recording on click\n          ")]),t._v(" "),l("path",{staticClass:"fill-current text-gray-800 group-hover:text-gray-700",attrs:{d:"M13.59 12l6.7-6.7A1 1 0 0 1 22 6v12a1 1 0 0 1-1.7.7L13.58 12z"}}),t._v(" "),l("rect",{staticClass:"fill-current text-gray-600 group-hover:text-gray-500",attrs:{height:"14",rx:"2",width:"14",x:"2",y:"5"}})],1),t._v(" "),l("span",{staticClass:"group-hover:underline text-lg"},[t._v("Video")])]):t._e(),t._v(" "),t.talk.slidesUrl?l("a",{staticClass:"group flex items-center",class:t.talk.videoUrl&&"mt-6",attrs:{href:t.talk.slidesUrl,title:"Open slides for "+t.talk.title,rel:"noopener nofollow",target:"_blank"}},[l("svg",{staticClass:"w-6 h-6 mr-2",attrs:{role:"presentation",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[l("description",[t._v("\n            Presentation stand icon which will open the page of the talk's slides on click\n          ")]),t._v(" "),l("path",{staticClass:"fill-current text-gray-800 group-hover:text-gray-700",attrs:{d:"M11 18.62l-6.55 3.27a1 1 0 0 1-.9-1.78L11 16.38V5a1 1 0 0 1 2 0v11.38l7.45 3.73a1 1 0 0 1-.9 1.78L13 18.62V21a1 1 0 0 1-2 0v-2.38z"}}),t._v(" "),l("path",{staticClass:"fill-current text-gray-600 group-hover:text-gray-500",attrs:{d:"M21 14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2V4a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2v10z"}})],1),t._v(" "),l("span",{staticClass:"group-hover:underline text-lg"},[t._v("Slides")])]):l("span",{staticClass:"group-hover:underline text-gray-800"},[t._v("\n        No slides available "+t._s(t.isUpcoming?"yet":"")+"\n      ")])])]),t._v(" "),l("p",{staticClass:"flex-1 mt-8 md:mt-0"},[t._v("\n    "+t._s(t.talk.description||"No description")+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);