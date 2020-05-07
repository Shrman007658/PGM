(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var l=n(1),a=n(9),o=(n(0),n(192)),r={id:"monument-modes",title:"Monument Modes"},b={id:"modules/objectives/monument-modes",title:"Monument Modes",description:"This module can be used to customize the modes that cores and destroyables cycle through, and at what duration they do so. When a monuments mode changes its material is usually changed from a hard to a soft block.",source:"@site/docs/modules/objectives/monument-modes.mdx",permalink:"/docs/modules/objectives/monument-modes",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/objectives/monument-modes.mdx",sidebar:"Modules",previous:{title:"Destroy the Core",permalink:"/docs/modules/objectives/dtc"},next:{title:"Blitz",permalink:"/docs/modules/objectives/blitz"}},c=[],i={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This module can be used to customize the modes that cores and destroyables cycle through, and at what duration they do so. When a monuments mode changes its material is usually changed from a hard to a soft block."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<modes>")," tag can contain any number of ",Object(o.b)("inlineCode",{parentName:"p"},"<mode>")," tags with different durations. Each ",Object(o.b)("inlineCode",{parentName:"p"},"<mode>")," has configurable characteristics that define it."),Object(o.b)("div",{className:"table-container"},Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Element"),Object(o.b)("th",null,"Description"),Object(o.b)("th",null),Object(o.b)("th",null,"Value/Children"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"<modes> </modes>")),Object(o.b)("td",null,"Node containing the monument modes for this match."),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("th",null,"Sub-elements"),Object(o.b)("th",null),Object(o.b)("th",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"<mode/>")),Object(o.b)("td",null,"An individual monument mode."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--secondary"},"None")))))),Object(o.b)("h5",{id:"mode-attributes"},"Mode Attributes"),Object(o.b)("div",{className:"table-container"},Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Attribute"),Object(o.b)("th",null,"Description"),Object(o.b)("th",null,"Value"),Object(o.b)("th",null,"Default"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"after")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--danger"},"Required"),"Time from the start of the game till this mode takes effect."),Object(o.b)("td",null,Object(o.b)("a",{href:"/reference/time_periods"},"Time Period")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"material")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--danger"},"Required"),"Material the core/destroyable changes to."),Object(o.b)("td",null,Object(o.b)("a",{href:"/reference/inventory#material_matchers"},"Single Material Pattern")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"name")),Object(o.b)("td",null,"Custom mode name, used for the mode change notice."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"String")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"show-before")),Object(o.b)("td",null,"The time before a mode is over to show it in the BossBar.",Object(o.b)("br",null),"If show-before is set to 0 the mode is not shown in the BossBar at all."),Object(o.b)("td",null,Object(o.b)("a",{href:"/reference/time_periods"},"Time Period")),Object(o.b)("td",null,"60 sec"))))),"Example",Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<modes>\n    <mode after="10m" material="gold block"/>\n</modes>\n')),Object(o.b)("p",null,"This specifies a mode that will change the material of affected objectives to gold block after 10 minutes of gameplay."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<modes>\n    <mode after="5m" material="coal block" name="`eEASY MODE"/>\n</modes>\n')),Object(o.b)("p",null,"This specifies a mode that will change the material of affected objectives to coal block after 10 minutes of gameplay, with the following chat message: ",Object(o.b)("inlineCode",{parentName:"p"},"> > > EASY MODE < < <")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NOTE:")," In order for an objective to change modes, it must have ",Object(o.b)("inlineCode",{parentName:"p"},'mode-changes="true"')," in its element tag."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<destroyables name="Monument" materials="obsidian" mode-changes="true">\n    \x3c!-- destroyables... --\x3e\n</destroyable>\n')))}s.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var l=n(0),a=n.n(l);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,O=u["".concat(r,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(O,b({ref:t},i,{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,r[1]=b;for(var i=2;i<o;i++)r[i]=n[i];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);