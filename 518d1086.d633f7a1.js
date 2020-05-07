(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var l=n(1),a=n(9),r=(n(0),n(192)),o={id:"monument-modes",title:"Monument Modes"},b={id:"modules/monument-modes",title:"Monument Modes",description:"This module can be used to customize the modes that cores and destroyables cycle through, and at what duration they do so. When a monuments mode changes its material is usually changed from a hard to a soft block.",source:"@site/docs/modules/monument-modes.mdx",permalink:"/PGM/docs/modules/monument-modes",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/monument-modes.mdx",sidebar:"Modules",previous:{title:"Destroy the Core",permalink:"/PGM/docs/modules/dtc"},next:{title:"Blitz",permalink:"/PGM/docs/modules/blitz"}},c=[],i={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This module can be used to customize the modes that cores and destroyables cycle through, and at what duration they do so. When a monuments mode changes its material is usually changed from a hard to a soft block."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<modes>")," tag can contain any number of ",Object(r.b)("inlineCode",{parentName:"p"},"<mode>")," tags with different durations. Each ",Object(r.b)("inlineCode",{parentName:"p"},"<mode>")," has configurable characteristics that define it."),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Element"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null),Object(r.b)("th",null,"Value/Children"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<modes> </modes>")),Object(r.b)("td",null,"Node containing the monument modes for this match."),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("th",null,"Sub-elements"),Object(r.b)("th",null),Object(r.b)("th",null)),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<mode/>")),Object(r.b)("td",null,"An individual monument mode."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary"},"None")))))),Object(r.b)("h5",{id:"mode-attributes"},"Mode Attributes"),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Attribute"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null,"Value"),Object(r.b)("th",null,"Default"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"after")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--danger"},"Required"),"Time from the start of the game till this mode takes effect."),Object(r.b)("td",null,Object(r.b)("a",{href:"/reference/time_periods"},"Time Period")),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"material")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--danger"},"Required"),"Material the core/destroyable changes to."),Object(r.b)("td",null,Object(r.b)("a",{href:"/reference/inventory#material_matchers"},"Single Material Pattern")),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"name")),Object(r.b)("td",null,"Custom mode name, used for the mode change notice."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"String")),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"show-before")),Object(r.b)("td",null,"The time before a mode is over to show it in the BossBar.",Object(r.b)("br",null),"If show-before is set to 0 the mode is not shown in the BossBar at all."),Object(r.b)("td",null,Object(r.b)("a",{href:"/reference/time_periods"},"Time Period")),Object(r.b)("td",null,"60 sec"))))),"Example",Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<modes>\n    <mode after="10m" material="gold block"/>\n</modes>\n')),Object(r.b)("p",null,"This specifies a mode that will change the material of affected objectives to gold block after 10 minutes of gameplay."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<modes>\n    <mode after="5m" material="coal block" name="`eEASY MODE"/>\n</modes>\n')),Object(r.b)("p",null,"This specifies a mode that will change the material of affected objectives to coal block after 10 minutes of gameplay, with the following chat message: ",Object(r.b)("inlineCode",{parentName:"p"},"> > > EASY MODE < < <")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NOTE:")," In order for an objective to change modes, it must have ",Object(r.b)("inlineCode",{parentName:"p"},'mode-changes="true"')," in its element tag."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<destroyables name="Monument" materials="obsidian" mode-changes="true">\n    \x3c!-- destroyables... --\x3e\n</destroyable>\n')))}u.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=l,O=s["".concat(o,".").concat(m)]||s[m]||d[m]||r;return n?a.a.createElement(O,b({ref:t},i,{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,o[1]=b;for(var i=2;i<r;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);