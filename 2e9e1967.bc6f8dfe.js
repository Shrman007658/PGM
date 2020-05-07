(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(1),l=n(9),a=(n(0),n(192)),c={id:"lanes",title:"Lanes"},o={id:"modules/mechanics/lanes",title:"Lanes",description:"Lanes are used in RFW style maps with two parallel lanes for the teams. They prevent players from leaving their teams lane and entering the enemies.",source:"@site/docs/modules/mechanics/lanes.mdx",permalink:"/docs/modules/mechanics/lanes",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/mechanics/lanes.mdx",sidebar:"Modules",previous:{title:"Proximity Alarms",permalink:"/docs/modules/mechanics/proximity-alarms"},next:{title:"Damage",permalink:"/docs/modules/mechanics/damage"}},b=[],i={rightToc:b};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Lanes are used in RFW style maps with two parallel lanes for the teams. They prevent players from leaving their teams lane and entering the enemies."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<lanes> </lanes>")),Object(a.b)("td",null,"Node containing this world's lanes."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<lane> </lane>")),Object(a.b)("td",null,"A single lane definition."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Regions")))))),Object(a.b)("h5",{id:"lane-attributes"},"Lane Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"team")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The team the lane belongs to and in which they have to stay inside."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/teams"},"Team ID")))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<lanes>\n    <lane team="blue">\n        <region id="blue-lane-total"/>\n        <region id="blue-spawn-rooms"/>\n    </lane>\n    <lane team="red">\n        <region id="red-lane-total"/>\n        <region id="red-spawn-rooms"/>\n    </lane>\n</lanes>\n')))}u.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),u=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=u(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,p=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?l.a.createElement(p,o({ref:t},i,{components:n})):l.a.createElement(p,o({ref:t},i))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<a;i++)c[i]=n[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);