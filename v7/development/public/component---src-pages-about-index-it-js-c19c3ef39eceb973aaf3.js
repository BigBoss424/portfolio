(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{"5kS5":function(e,a,t){e.exports={container:"index-module--container--1Qco9",photo:"index-module--photo--6zcpX",content:"index-module--content--2qSIH",iconsContainer:"index-module--iconsContainer--1JLyf",iconWrapper:"index-module--iconWrapper--1IEjp"}},O0dG:function(e,a,t){"use strict";t.r(a),t.d(a,"aboutPropTypes",(function(){return g})),t.d(a,"imageListPropTypes",(function(){return v})),t.d(a,"query",(function(){return b})),t.d(a,"iconsNameMap",(function(){return I}));t("f3/d"),t("Vd3H"),t("0mN4");var n=t("q1tI"),r=t.n(n),i=t("17x9"),o=t.n(i),s=t("9eSz"),l=t.n(s),c=t("I/Ru"),u=t("jNNy"),m=t("Al62"),d=t.n(m),p=t("5kS5"),h=t.n(p);function f(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a}var g={data:o.a.shape({profilePhoto:o.a.shape({childImageSharp:o.a.shape({fluid:o.a.object.isRequired}).isRequired}).isRequired,flagIt:o.a.shape({childImageSharp:o.a.shape({fixed:o.a.object.isRequired})}),flagEn:o.a.shape({childImageSharp:o.a.shape({fixed:o.a.object.isRequired})}),skillIcons:o.a.object.isRequired,toolIcons:o.a.object.isRequired})},E=function(e){function a(){return e.apply(this,arguments)||this}return f(a,e),a.prototype.render=function(){var e=this.props.data,a=e.profilePhoto,t=e.flagIt,n=e.skillIcons,i=e.toolIcons;return r.a.createElement(c.a,null,r.a.createElement(u.a,{title:"About",description:"A brief summary of this blog",path:"about"}),r.a.createElement("div",{className:h.a.container},r.a.createElement("div",{className:h.a.photo},r.a.createElement(l.a,{fluid:a.childImageSharp.fluid})),r.a.createElement("div",{className:h.a.content},r.a.createElement("h1",null,"Hi, I'm Aaron"),r.a.createElement("h2",null,"Software Developer"),r.a.createElement("p",null,"Per la versione italiana clicca qui"),r.a.createElement("a",{href:d.a.resolvePageUrl("../","it","about")},r.a.createElement(l.a,{fixed:t.childImageSharp.fixed,style:{display:"block",margin:"auto"}})),r.a.createElement("p",null,"My name is Aaron Jones, I reside in Altadena, California. I am a Web Developer and Programmer of sorts with experience in languages such as Java, C, C++, HTML5, CSS3, RoR (Ruby on Rails). I also have experience managing servers and services such as Web Hosting and SEO Optimization. I enjoy using Linux and other Unix-Based Operating Systems. I have a great attention to detail and like to ensure that my clients are fully satisfied with the site or program that I build for them."),r.a.createElement("br",null),r.a.createElement("h2",null,"Skills"),r.a.createElement(y,{edges:n.edges}),r.a.createElement("h2",null,"Tools"),r.a.createElement(y,{edges:i.edges}))))},a}(r.a.Component),v={edges:o.a.arrayOf(o.a.shape({node:o.a.shape({name:o.a.string.isRequired,childImageSharp:o.a.shape({fixed:o.a.object.isRequired}).isRequired}).isRequired})).isRequired},y=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return r.a.createElement("div",{className:h.a.iconsContainer},a.props.edges.sort((function(e,a){return e.node.name.toLowerCase()>a.node.name.toLowerCase()?1:-1})).map((function(e){var a=e.node,t=a.name,n=a.childImageSharp;return r.a.createElement("div",{className:h.a.iconWrapper,key:t},r.a.createElement(l.a,{fixed:n.fixed,alt:t+" logo",title:t}),r.a.createElement("label",null,I[t]?I[t]:d.a.capitalize(t)))})))},a}return f(a,e),a}(r.a.Component),b="3573639707",I={css:"CSS",html:"HTML",jquery:"JQuery",nodejs:"Node.js",vuejs:"Vue.js",gruntjs:"Grunt.js"};a.default=E},rLZg:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return E}));t("f3/d"),t("Vd3H"),t("0mN4");var n=t("q1tI"),r=t.n(n),i=t("9eSz"),o=t.n(i),s=t("O0dG"),l=t("I/Ru"),c=t("jNNy"),u=t("Al62"),m=t.n(u),d=t("5kS5"),p=t.n(d);function h(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a}var f=function(e){function a(){return e.apply(this,arguments)||this}return h(a,e),a.prototype.render=function(){var e=this.props.data,a=e.profilePhoto,t=e.flagEn,n=e.skillIcons,i=e.toolIcons;return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"About",description:"Una breve presentazione di questo blog",path:"about"}),r.a.createElement("div",{className:p.a.container},r.a.createElement("div",{className:p.a.photo},r.a.createElement(o.a,{fluid:a.childImageSharp.fluid})),r.a.createElement("div",{className:p.a.content},r.a.createElement("h1",null,"Ciao, sono Luigi!"),r.a.createElement("h2",null,"Software Developer"),r.a.createElement("p",null,"For the English version click here"),r.a.createElement("a",{href:m.a.resolvePageUrl("../","../","about")},r.a.createElement(o.a,{fixed:t.childImageSharp.fixed,style:{display:"block",margin:"auto"}})),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus venenatis arcu, cursus pretium enim lacinia nec. Duis viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi, fringilla quis lacus et, sagittis mollis massa. Cras tempus massa quis lobortis laoreet. Pellentesque metus odio, sagittis nec venenatis non, maximus congue eros. Suspendisse pellentesque purus sit amet ante commodo, et molestie mauris aliquet. Proin non nibh libero. Fusce at nulla euismod, condimentum augue quis, convallis justo."),r.a.createElement("br",null),r.a.createElement("h2",null,"Competenze"),r.a.createElement(g,{edges:n.edges}),r.a.createElement("h2",null,"Strumenti"),r.a.createElement(g,{edges:i.edges}))))},a}(r.a.Component),g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return r.a.createElement("div",{className:p.a.iconsContainer},a.props.edges.sort((function(e,a){return e.node.name.toLowerCase()>a.node.name.toLowerCase()?1:-1})).map((function(e){var a=e.node,t=a.name,n=a.childImageSharp;return r.a.createElement("div",{className:p.a.iconWrapper,key:t},r.a.createElement(o.a,{fixed:n.fixed,alt:t+" logo",title:t}),r.a.createElement("label",null,s.iconsNameMap[t]?s.iconsNameMap[t]:m.a.capitalize(t)))})))},a}return h(a,e),a}(r.a.Component),E="4242763207";a.default=f}}]);
//# sourceMappingURL=component---src-pages-about-index-it-js-c19c3ef39eceb973aaf3.js.map