(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l}),n(52);var a=n(0),r=n.n(a),o=n(154),i=n(161),u=n(164),s=n(167);t.default=function(e){var t=e.data,n=(e.location,t.allMarkdownRemark.edges),a=t.site.siteMetadata,l=a.title,c=a.description;return r.a.createElement(o.a,{meta:t.site.siteMetadata,rootClass:"productGroup"},r.a.createElement(u.a,Object.assign({title:l,description:c},{parent:t.markdownRemark.frontmatter.title})),r.a.createElement(s.a,{edges:n}),r.a.createElement(i.a,null,r.a.createElement("a",{href:t.site.siteMetadata.repo},"View Source")))};var l="1239442273"},151:function(e,t,n){"use strict";var a=n(36);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(157)),o=a(n(158)),i=a(n(12)),u=a(n(53)),s=a(n(54)),l=a(n(8)),c=a(n(0)),d=n(14),f=n(152);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/fake-door/"+e)}var m={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,l=t.location,m=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state"]),v=p(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:m,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){if(u&&u(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,f.parsePath)(v),a=n.pathname,r=n.hash;if(a===l.pathname||!a){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}w(v,{state:m})}return!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired});var v,g=(v=h,function(e){return c.default.createElement(d.Location,null,function(t){var n=t.location;return c.default.createElement(v,(0,o.default)({location:n},e))})});t.default=g;var w=function(e,t){window.___navigate(e,t)};t.navigate=w;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=y,t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)},t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),y(e)}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(8),i=n.n(o),u=n(151),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(34);n.d(t,"waitForRouteChange",function(){return l.c});var c=n(153),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var f=n(35);n.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(160),i=n.n(o);n(155),t.a=function(e){var t=e.meta,n=e.rootClass,a=e.children,o=t||"",u=o.title,s=o.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:u,meta:[{name:"description",content:s}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:"layout layout--"+n+" "+n},a))}},155:function(e,t,n){},157:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},158:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),u=n(37),s=n(1),l=function(e){var t=e.location,n=s.default.getResourcesForPathname(t.pathname);return r.a.createElement(u.a,{location:t,pageResources:n})};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(162),t.a=function(e){var t=e.children;return r.a.createElement("footer",{className:"footer"},t)}},162:function(e,t,n){},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(152);n(165),t.a=function(e){var t=e.title,n=e.description,a=e.parent,i=void 0===a?null:a;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,r.a.createElement(o.Link,{to:"/"},t)),r.a.createElement("p",null,n),i&&r.a.createElement("div",{className:"breadcrumb"},r.a.createElement("h2",null,r.a.createElement(o.Link,{to:"/"},r.a.createElement("div",{className:"home"})),r.a.createElement("span",null,"  »  ")," ",i)))}},165:function(e,t,n){},167:function(e,t,n){"use strict";n(78);var a=n(0),r=n.n(a),o=n(152);n(168),t.a=function(e){var t=e.edges;return r.a.createElement("main",{className:"products"},t.map(function(e,t){return r.a.createElement(o.Link,{to:e.node.fields.slug,key:t,className:"products__card"},r.a.createElement("h3",null,e.node.frontmatter.title),r.a.createElement("p",null,e.node.frontmatter.description))}))}},168:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-product-group-js-6bf79279bed3acab2f6a.js.map