(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,a){"use strict";a.r(t);a(168);var n=a(0),r=a.n(n),i=a(154),o=(a(50),a(176),a(177)),l=a.n(o),c=a(178),u=a.n(c),s=function(e){var t=e.facets;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement("div",{className:"product-facet",key:t},r.a.createElement("div",{className:"product-facet__top",style:{backgroundImage:"url("+l.a+")"}}),r.a.createElement("div",{className:"product-facet__bottom",style:{backgroundImage:"url("+u.a+")"}}),r.a.createElement("section",null,r.a.createElement("div",{className:"product-facet__content"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.text)),r.a.createElement("div",{className:"product-facet__image"},r.a.createElement("img",{alt:"",src:e.image.publicURL,width:"100%",height:"auto"}))))}))},d=a(152),p=(a(179),function(){return r.a.createElement("footer",{className:"product-footer"},r.a.createElement("h4",null,"Legal"),r.a.createElement("h4",null,"Privacy"),r.a.createElement("h4",null,"Our Team"),r.a.createElement("h4",null,r.a.createElement(d.Link,{to:"/"},"Careers")))}),m=(a(180),function(e){var t=e.name,a=e.icon;return r.a.createElement("div",{className:"product-header"},r.a.createElement("div",{className:"product-header__container"},r.a.createElement("h2",null,r.a.createElement("span",{className:"product-header__app-icon",style:{background:"url("+a.publicURL+")"}}),t),r.a.createElement("ul",null,r.a.createElement("li",null,"Learn More"),r.a.createElement("li",null,"Our Story"),r.a.createElement("li",null,"Download Now"))))}),f=(a(181),function(e){var t=e.hero[0],a=t.title,n=t.text,i=t.image,o=t.cta;return r.a.createElement("div",{className:"product-hero"},r.a.createElement("header",null,r.a.createElement("div",{className:"product-hero__content"},r.a.createElement("h1",null,a),r.a.createElement("p",null,n),r.a.createElement("button",null,o)),r.a.createElement("div",{className:"product-hero__image"},r.a.createElement("img",{src:i.publicURL,alt:n,width:"100%",height:"auto"}))))});a(182);a.d(t,"query",function(){return g});t.default=function(e){var t=e.data.markdownRemark.frontmatter.product[0],a=t.name,n=t.icon,o=t.hero,l=t.facets;return r.a.createElement(i.a,{rootClass:"product",title:a,description:o[0].title,favicon:n.publicURL},r.a.createElement(m,{name:a,icon:n}),r.a.createElement(f,{hero:o}),r.a.createElement(s,{facets:l}),r.a.createElement(p,null))};var g="264460395"},151:function(e,t,a){"use strict";var n=a(35);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(157)),i=n(a(158)),o=n(a(7)),l=n(a(51)),c=n(a(52)),u=n(a(4)),s=n(a(0)),d=a(15),p=a(152);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/fake-door/"+e)}var f={activeClassName:u.default.string,activeStyle:u.default.object},g=function(e){function t(t){var a;a=e.call(this)||this,(0,c.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,c=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),f=t.replace,g=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=m(a);return s.default.createElement(d.Link,(0,i.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),h(a,{state:u,replace:f})),!0}},g))},t}(s.default.Component);g.propTypes=(0,i.default)({},f,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=g;t.default=v;var h=function(e,t){window.___navigate(m(e),t)};t.navigate=h;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(m(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(m(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(151),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(153),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(160),o=a.n(i),l=(a(155),a(156)),c=a.n(l);t.a=function(e){var t=e.title,a=e.description,n=e.rootClass,i=e.favicon,l=void 0===i?null:i,u=e.children,s=l||c.a;return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(o.a,{title:t,meta:[{name:"description",content:a}]},r.a.createElement("link",{rel:"shortcut icon",href:s}),r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:"layout layout--"+n+" "+n},u))}},155:function(e,t,a){},156:function(e,t,a){e.exports=a.p+"static/firefox-logo-27d319b45926552180640e6c91290e5e.png"},157:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},158:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(53),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},168:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},176:function(e,t,a){},177:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjYwcHgiIHZpZXdCb3g9IjAgMCAxNDAwIDYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dG9wLWN1cnZlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InRvcC1jdXJ2ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtMyIgZmlsbD0iI0RFRURGNyIgcG9pbnRzPSIwIDYwIDE0MDAgMCAxNDAwIDYwIj48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg=="},178:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjYwcHgiIHZpZXdCb3g9IjAgMCAxNDAwIDYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Ym90dG9tLWN1cnZlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImJvdHRvbS1jdXJ2ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNyIgZmlsbD0iI0NCRTNGNSIgcG9pbnRzPSIwIDYwIDAgLTMuNTUyNzEzNjhlLTE1IDE0MDAgLTMuNTUyNzEzNjhlLTE1Ij48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg=="},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-product-index-js-b0790242446b3fe7f287.js.map