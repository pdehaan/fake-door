(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,n){"use strict";n.r(t),n(172);var a=n(0),r=n.n(a),o=n(154),i=(n(78),n(180),n(182)),l=n.n(i),c=n(183),u=n.n(c),s=function(e){var t=e.facets;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement("div",{className:"product-facet",key:t},r.a.createElement("div",{className:"product-facet__top",style:{backgroundImage:"url("+l.a+")"}}),r.a.createElement("div",{className:"product-facet__bottom",style:{backgroundImage:"url("+u.a+")"}}),r.a.createElement("section",null,r.a.createElement("div",{className:"product-facet__content"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.text)),r.a.createElement("div",{className:"product-facet__image"},r.a.createElement("img",{alt:"",src:e.image.publicURL,width:"100%",height:"auto"}))))}))},d=n(152),p=(n(184),function(){return r.a.createElement("footer",{className:"product-footer"},r.a.createElement("h4",null,"Legal"),r.a.createElement("h4",null,"Privacy"),r.a.createElement("h4",null,"Our Team"),r.a.createElement("h4",null,r.a.createElement(d.Link,{to:"/"},"Careers")))}),m=(n(186),function(e){var t=e.name,n=e.icon;return r.a.createElement("div",{className:"product-header"},r.a.createElement("h2",null,r.a.createElement("span",{className:"product-header__app-icon",style:{background:"url("+n.publicURL+")"}}),t),r.a.createElement("ul",null,r.a.createElement("li",null,"Learn More"),r.a.createElement("li",null,"Our Story"),r.a.createElement("li",null,"Download Now")))}),f=(n(188),function(e){var t=e.hero,n=(e.location,t[0]),a=n.title,o=n.text,i=n.image,l=n.cta;return r.a.createElement("div",{className:"product-hero"},r.a.createElement("header",null,r.a.createElement("div",{className:"product-hero__content"},r.a.createElement("h1",null,a),r.a.createElement("p",null,o),r.a.createElement("button",null,l)),r.a.createElement("div",{className:"product-hero__image"},r.a.createElement("img",{src:i.publicURL,alt:o,width:"100%",height:"auto"}))))});n.d(t,"query",function(){return g}),t.default=function(e){var t=e.data,n=e.location,a=t.markdownRemark.frontmatter.product[0],i=a.name,l=a.icon,c=a.hero,u=a.facets;return console.log(n),r.a.createElement(o.a,{rootClass:"product",title:i,description:c[0].title,favicon:l.publicURL},r.a.createElement(m,{name:i,icon:l}),r.a.createElement(f,{hero:c}),r.a.createElement(s,{facets:u}),r.a.createElement(p,null))};var g="264460395"},151:function(e,t,n){"use strict";var a=n(36);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(158)),o=a(n(159)),i=a(n(12)),l=a(n(52)),c=a(n(53)),u=a(n(8)),s=a(n(0)),d=n(14),p=n(152);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/fake-door/"+e)}var f={activeClassName:u.default.string,activeStyle:u.default.object},g=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,c=t.onMouseEnter,u=t.location,f=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),g=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state"]),v=m(n);return s.default.createElement(d.Link,(0,o.default)({to:v,state:f,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){if(l&&l(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,p.parsePath)(v),a=n.pathname,r=n.hash;if(a===u.pathname||!a){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}I(v,{state:f})}return!0}},g))},t}(s.default.Component);g.propTypes=(0,o.default)({},f,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired});var v,h=(v=g,function(e){return s.default.createElement(d.Location,null,function(t){var n=t.location;return s.default.createElement(v,(0,o.default)({location:n},e))})});t.default=h;var I=function(e,t){window.___navigate(e,t)};t.navigate=I;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=b,t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)},t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),b(e)}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(151),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(34);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(153),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(35);n.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(161),i=n.n(o),l=(n(155),n(157)),c=n.n(l);t.a=function(e){var t=e.title,n=e.description,a=e.rootClass,o=e.favicon,l=void 0===o?null:o,u=e.children,s=l||c.a;return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(i.a,{title:t,meta:[{name:"description",content:n}]},r.a.createElement("link",{rel:"shortcut icon",href:s}),r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:"layout layout--"+a+" "+a},u))}},155:function(e,t,n){},157:function(e,t,n){e.exports=n.p+"static/firefox-logo-27d319b45926552180640e6c91290e5e.png"},158:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},159:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(37),c=n(1),u=function(e){var t=e.location,n=c.default.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},172:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(15)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},180:function(e,t,n){},182:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjYwcHgiIHZpZXdCb3g9IjAgMCAxNDAwIDYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dG9wLWN1cnZlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InRvcC1jdXJ2ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtMyIgZmlsbD0iI0RFRURGNyIgcG9pbnRzPSIwIDYwIDE0MDAgMCAxNDAwIDYwIj48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg=="},183:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjYwcHgiIHZpZXdCb3g9IjAgMCAxNDAwIDYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MC4yICg1NTA0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Ym90dG9tLWN1cnZlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImJvdHRvbS1jdXJ2ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNyIgZmlsbD0iI0NCRTNGNSIgcG9pbnRzPSIwIDYwIDAgLTMuNTUyNzEzNjhlLTE1IDE0MDAgLTMuNTUyNzEzNjhlLTE1Ij48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg=="},184:function(e,t,n){},186:function(e,t,n){},188:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-product-index-js-8639528d054802256418.js.map