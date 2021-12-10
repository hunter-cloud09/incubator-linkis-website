"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9067],{1875:function(e,t){t.Z=function(){return null}},541:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="iconExternalLink_wgqa",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},9067:function(e,t,n){n.d(t,{Z:function(){return Ie}});var a=n(7294),r=n(6010),l=n(6775),o=n(5999),i=n(5319),c="skipToContent_OuoZ";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,i.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(7462),d=n(3366),f=["width","height","className"];function v(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=e.className,i=(0,d.Z)(e,f);return a.createElement("svg",(0,m.Z)({className:o,viewBox:"0 0 24 24",width:n,height:l,fill:"currentColor"},i),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var h="announcementBar_axC9",b="announcementBarPlaceholder_xYHE",g="announcementBarClose_A3A1",E="announcementBarContent_6uhP";var p=function(){var e=(0,i.nT)(),t=e.isClosed,n=e.close,l=(0,i.LU)().announcementBar;if(!l)return null;var c=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return!c||m&&t?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:b}),a.createElement("div",{className:E,dangerouslySetInnerHTML:{__html:c}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",g),onClick:n,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(v,{width:14,height:14})):null)},Z=n(1875),_=n(2389),k={toggle:"toggle_iYfV"},w=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.dark),style:n},t)},N=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.light),style:n},t)},y=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,i=e.onChange,c=(0,a.useState)(l),s=c[0],u=c[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function C(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,c=(0,_.Z)();return a.createElement(y,(0,m.Z)({disabled:!c,icons:{checked:a.createElement(w,{icon:n,style:r}),unchecked:a.createElement(N,{icon:l,style:o})}},e))}var I=n(5350),L=n(7898),S=function(e){var t=(0,l.TH)(),n=(0,a.useState)(e),r=n[0],o=n[1],c=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,L.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)o(!0);else{if(c.current)return c.current=!1,void o(!1);r&&0===a&&o(!0);var l=document.documentElement.scrollHeight-u,i=window.innerHeight;r&&a>=r?o(!1):a+i<l&&o(!0)}}),[u,c]),(0,i.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};var D=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},T=n(3783),B=n(6730),x=n(9194),A=n(5537),M=["width","height","className"],P=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,l=void 0===r?30:r,o=e.className,i=(0,d.Z)(e,M);return a.createElement("svg",(0,m.Z)({className:o,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},i),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},R=["width","height","className"];function U(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=e.className,i=(0,d.Z)(e,R);return a.createElement("svg",(0,m.Z)({className:o,viewBox:"0 0 413.348 413.348",width:n,height:l,fill:"currentColor"},i),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var O="toggle_2i4l",H="navbarHideable_RReh",V="navbarHidden_FBwS",W="navbarSidebarToggle_AVbO",j="navbarSidebarCloseSvg_+9jJ",z="right";function q(){return(0,i.LU)().navbar.items}function F(){var e=(0,i.LU)().colorMode.disableSwitch,t=(0,I.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function G(e){var t=e.sidebarShown,n=e.toggleSidebar;D(t);var l=q(),c=F(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,i.g8)())?void 0:t({toggleSidebar:r}),o=(0,i.D9)(l),c=(0,a.useState)((function(){return!1})),s=c[0],u=c[1];(0,a.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&a.createElement(C,{className:W,checked:c.isDarkTheme,onChange:c.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(U,{width:20,height:20,className:j}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(x.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var Y=function(){var e,t=(0,i.LU)().navbar,n=t.hideOnScroll,l=t.style,o=function(){var e=(0,T.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],l=n[1];(0,i.Rb)((function(){r&&l(!1)}));var o=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),c=F(),s=(0,B.gA)(),u=S(n),d=u.navbarRef,f=u.isNavbarVisible,v=q(),h=v.some((function(e){return"search"===e.type})),b=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:z)}))}}(v),g=b.leftItems,E=b.rightItems;return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":o.shown},e[H]=n,e[V]=n&&!f,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement(P,null)),a.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),g.map((function(e,t){return a.createElement(x.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(x.Z,(0,m.Z)({},e,{key:t}))})),!c.disabled&&a.createElement(C,{className:O,checked:c.isDarkTheme,onChange:c.toggle}),!h&&a.createElement(Z.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(G,{sidebarShown:o.shown,toggleSidebar:o.toggle}))},J=n(9960),K=n(4996),Q=n(3919),X="footerLogoLink_SRtH",$=n(9750),ee=n(541),te=["to","href","label","prependBaseUrlToHref"];function ne(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,d.Z)(e,te),i=(0,K.Z)(t),c=(0,K.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(J.Z,(0,m.Z)({className:"footer__link-item"},n?{href:l?c:n}:{to:i},o),n&&!(0,Q.Z)(n)?a.createElement("span",null,r,a.createElement(ee.Z,null)):r)}var ae=function(e){var t=e.sources,n=e.alt;return a.createElement($.Z,{className:"footer__logo",alt:n,sources:t})};var re=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,c=t.logo,s=void 0===c?{}:c,u={light:(0,K.Z)(s.src),dark:(0,K.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(ne,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(J.Z,{href:s.href,className:X},a.createElement(ae,{alt:s.alt,sources:u})):a.createElement(ae,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},le=n(412),oe=(0,i.WA)("theme"),ie="light",ce="dark",se=function(e){return e===ce?ce:ie},ue=function(e){(0,i.WA)("theme").set(se(e))},me=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return le.Z.canUseDOM?se(document.documentElement.getAttribute("data-theme")):se(e)}(t)),o=l[0],c=l[1],s=(0,a.useCallback)((function(){c(ie),ue(ie)}),[]),u=(0,a.useCallback)((function(){c(ce),ue(ce)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",se(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=oe.get();null!==e&&c(se(e))}catch(t){console.error(t)}}),[c]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?ce:ie)}))}),[]),{isDarkTheme:o===ce,setLightTheme:s,setDarkTheme:u}},de=n(2924);var fe=function(e){var t=me(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(de.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},ve="docusaurus.tab.",he=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,i.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,i._f)().forEach((function(t){if(t.startsWith(ve)){var n=t.substring(ve.length);e[n]=(0,i.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},be=(0,a.createContext)(void 0);var ge=function(e){var t=he(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(be.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function Ee(e){var t=e.children;return a.createElement(fe,null,a.createElement(i.pl,null,a.createElement(ge,null,a.createElement(i.L5,null,a.createElement(i.Cn,null,t)))))}var pe=n(2859),Ze=n(2263);function _e(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(pe.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var ke=n(1217);function we(){var e=(0,Ze.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,i.l5)();return a.createElement(pe.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ne(e){var t=e.permalink,n=(0,Ze.Z)().siteConfig.url,r=function(){var e=(0,Ze.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,K.Z)(t)}(),o=t?""+n+t:r;return a.createElement(pe.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ye(e){var t=(0,Ze.Z)(),n=t.siteConfig.favicon,r=t.i18n,l=r.currentLocale,o=r.localeConfigs,c=(0,i.LU)(),s=c.metadatas,u=c.image,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,g=(0,K.Z)(n),E=(0,i.pe)(d),p=l,Z=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(pe.Z,null,a.createElement("html",{lang:p,dir:Z}),n&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,E),a.createElement("meta",{property:"og:title",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(ke.Z,{image:u}),v&&a.createElement(ke.Z,{image:v}),a.createElement(ke.Z,{description:f,keywords:h}),a.createElement(Ne,null),a.createElement(we,null),a.createElement(_e,(0,m.Z)({tag:i.HX,locale:l},b)),a.createElement(pe.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var Ce=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ie=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return Ce(),a.createElement(Ee,null,a.createElement(ye,e),a.createElement(u,null),a.createElement(p,null),a.createElement(Y,null),a.createElement("div",{className:(0,r.Z)(i.kM.wrapper.main,l,o)},t),!n&&a.createElement(re,null))}},5537:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(9960),i=n(9750),c=n(4996),s=n(2263),u=n(5319),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,g=(0,r.Z)(e,m),E=(0,c.Z)(v.href||"/"),p={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)};return l.createElement(o.Z,(0,a.Z)({to:E},g,v.target&&{target:v.target}),v.src&&l.createElement(i.Z,{className:h,sources:p,alt:v.alt||d||t}),null!=d&&l.createElement("b",{className:b},d))}},5525:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(9960),c=n(4996),s=n(541),u=n(3919),m=n(9194),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function b(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,b=void 0===h?"":h,g=e.prependBaseUrlToHref,E=(0,r.Z)(e,d),p=(0,c.Z)(m),Z=(0,c.Z)(n),_=(0,c.Z)(f,{forcePrependBaseUrl:!0}),k=v&&f&&!(0,u.Z)(f),w="dropdown__link--active"===b;return l.createElement(i.Z,(0,a.Z)({},f?{href:g?_:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(b)?"":b,to:p},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(Z)}}:null),E),k?l.createElement("span",null,v,l.createElement(s.Z,w&&{width:12,height:12})):v)}function g(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,f),s=l.createElement(b,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,v));return l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,r.Z)(e,h)),c=o?E:g;return l.createElement(c,(0,a.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,m.E)(o)}))}},6400:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),i=n(6730),c=n(6010),s=n(9194),u=n(5319),m=n(1388),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,d),b=(0,i.Iw)(v),g=b.activeVersion,E=b.activeDoc,p=(0,u.J)(v).preferredVersion,Z=(0,i.yW)(v),_=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([g,p,Z].filter(Boolean)),n),k=(0,s.E)(h.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[k]=(null==E?void 0:E.sidebar)&&E.sidebar===_.sidebar,t)),activeClassName:k,label:null!=f?f:_.id,to:_.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),i=n(3154),c=n(6730),s=n(5319),u=n(5999),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,E=(0,r.Z)(e,m),p=(0,c.Iw)(v),Z=(0,c.gB)(v),_=(0,c.yW)(v),k=(0,s.J)(v),w=k.preferredVersion,N=k.savePreferredVersionName;var y,C=(y=Z.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){N(e.name)}}})),[].concat(b,y,g)),I=null!=(t=null!=(n=p.activeVersion)?n:w)?t:_,L=f&&C?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):I.label,S=f&&C?void 0:d(I).path;return C.length<=1?l.createElement(o.Z,(0,a.Z)({},E,{mobile:f,label:L,to:S,isActive:h?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},E,{mobile:f,label:L,to:S,items:C,isActive:h?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),i=n(6730),c=n(5319),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,i.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:g,to:E}))}},3154:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(5319),c=n(5525),s=n(9194),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,l.useState)(!1),b=h[0],g=h[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":b})},l.createElement(c.O,(0,a.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,i.be)(),h=f(n,v),b=(0,i.uR)({initialState:function(){return!h}}),g=b.collapsed,E=b.toggleCollapsed,p=b.setCollapsed;return(0,l.useEffect)((function(){h&&p(!h)}),[v,h]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),E()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),o=n?h:v;return l.createElement(o,a)}},9194:function(e,t,n){n.d(t,{Z:function(){return p},E:function(){return E}});var a=n(3366),r=n(7294),l=n(5525),o=n(3154),i=n(7462),c=n(6196),s=n(2263),u=n(5319),m="iconLanguage_EbrZ",d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,f=(0,a.Z)(e,d),v=(0,s.Z)().i18n,h=v.currentLocale,b=v.locales,g=v.localeConfigs,E=(0,u.l5)();function p(e){return g[e].label}var Z=b.map((function(e){var t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(n,Z,l),k=t?"Languages":p(h);return r.createElement(o.Z,(0,i.Z)({},f,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(c.Z,{className:m}),r.createElement("span",null,k)),items:_}))}var v=n(1875);function h(e){return e.mobile?null:r.createElement(v.Z,null)}var b=["type"],g={default:function(){return l.Z},localeDropdown:function(){return f},search:function(){return h},dropdown:function(){return o.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function p(e){var t=e.type,n=(0,a.Z)(e,b),l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=g[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(l);return r.createElement(o,n)}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},9750:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(2389),c=n(5350),s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)(),n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,b.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},7898:function(e,t,n){var a=n(7294),r=n(412),l=function(){return r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(l()),r=function(){var t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},2491:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,l=e.split(/[#?]/)[0],o="/"===l||l===a?l:(r=l,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(l,o)}},1388:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(2491);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(1705);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(l).default}})},1705:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);