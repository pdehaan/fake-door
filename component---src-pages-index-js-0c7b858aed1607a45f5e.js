(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});n(79);var a=n(0),r=n.n(a),o=n(154),i=n(161),s=n(163),u=n(165);t.default=function(e){var t=e.data,n=t.allMarkdownRemark.edges.filter(function(e){return"/project-template/"!==e.node.fields.slug});console.log(n);var a=t.site.siteMetadata,l=a.title,c=a.description;return r.a.createElement(o.a,{meta:t.site.siteMetadata,rootClass:"index",title:l},r.a.createElement(s.a,{title:l,description:c}),r.a.createElement(u.a,{edges:n}),r.a.createElement(i.a,null,r.a.createElement("a",{href:t.site.siteMetadata.repo},"View Source")))};var l="25027325"},151:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(157)),o=a(n(158)),i=a(n(7)),s=a(n(51)),u=a(n(52)),l=a(n(4)),c=a(n(0)),d=n(15),f=n(152);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/fake-door/"+e)}var m={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(151),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(153),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(160),i=n.n(o),s=(n(155),n(156)),u=n.n(s);t.a=function(e){var t=e.title,n=e.description,a=e.rootClass,o=e.favicon,s=void 0===o?null:o,l=e.children,c=s||u.a;return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(i.a,{title:t,meta:[{name:"description",content:n}]},r.a.createElement("link",{rel:"shortcut icon",href:c}),r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:"layout layout--"+a+" "+a},l))}},155:function(e,t,n){},156:function(e,t,n){e.exports=n.p+"static/firefox-logo-27d319b45926552180640e6c91290e5e.png"},157:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},158:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},159:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(53),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(162);t.a=function(e){var t=e.children;return r.a.createElement("footer",{className:"footer"},t)}},162:function(e,t,n){},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(152);n(164);t.a=function(e){var t=e.title,n=e.description,a=e.parent,i=void 0===a?null:a;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,r.a.createElement(o.Link,{to:"/"},t)),r.a.createElement("p",null,n),i&&r.a.createElement("div",{className:"breadcrumb"},r.a.createElement("h2",null,r.a.createElement(o.Link,{to:"/"},r.a.createElement("div",{className:"home"})),r.a.createElement("span",null,"  »  ")," ",i)))}},164:function(e,t,n){},165:function(e,t,n){"use strict";n(50);var a=n(0),r=n.n(a),o=n(152);n(166);t.a=function(e){var t=e.edges;return r.a.createElement("main",{className:"products"},t.map(function(e,t){return r.a.createElement(o.Link,{to:e.node.fields.slug,key:t,className:"products__card"},r.a.createElement("h3",null,e.node.frontmatter.title),r.a.createElement("p",null,e.node.frontmatter.description))}))}},166:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-0c7b858aed1607a45f5e.js.map