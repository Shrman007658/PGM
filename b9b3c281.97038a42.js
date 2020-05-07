(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{175:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return c})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return u}));var b=l(1),n=l(9),a=(l(0),l(192)),r={id:"dtm",title:"Destroy the Monument"},c={id:"modules/objectives/dtm",title:"Destroy the Monument",description:"Players have to locate and destroy certain objects from the enemy team, such as an obsidian pillar, etc. Teams win after a specified percentage of the enemy teams destroyables are destroyed. Teams can have multiple destroyables and they can be made out of multiple materials.",source:"@site/docs/modules/objectives/dtm.mdx",permalink:"/docs/modules/objectives/dtm",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/objectives/dtm.mdx",sidebar:"Modules",previous:{title:"Control Points",permalink:"/docs/modules/objectives/control-points"},next:{title:"Destroy the Core",permalink:"/docs/modules/objectives/dtc"}},o=[],s={rightToc:o};function u(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Players have to locate and destroy certain objects from the enemy team, such as an obsidian pillar, etc. Teams win after a specified percentage of the enemy teams destroyables are destroyed. Teams can have multiple destroyables and they can be made out of multiple materials."),Object(a.b)("p",null,"Completion specifies how much of the material(s) inside of the monument region must be removed for it to count as destroyed. For example, if the monument is obsidian and completion is set to 100% then all the obsidian must be removed in order for the monument to count as destroyed."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Destroyables Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<destroyables> </destroyables>")),Object(a.b)("td",null,"Node containing all the defined destroyables."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<destroyable> </destroyable>")),Object(a.b)("td",null,"A single destroyable."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Destroyable Sub-elements")))))),Object(a.b)("h5",{id:"destroyable-attributes"},"Destroyable Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"id")),Object(a.b)("td",null,"Unique identifier used to reference monuments from other places in the XML."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"name")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The destroyables name."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"required")),Object(a.b)("td",null,"Specify if this objective is required to win the match. Teams completing all of their required objectives will win regardless of score or blitz configuration."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"region")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"Region containing the destroyable."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Bounded Region")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"materials")),Object(a.b)("td",null,"The destroyables materials, multiple materials are separated with a semicolon",Object(a.b)("label",null,";")),Object(a.b)("td",null,Object(a.b)("a",{href:"/reference/inventory#material_matchers"},"Material Pattern")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"owner")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The destroyables owner."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/teams"},"Team ID")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"completion")),Object(a.b)("td",null,"Percentage of the destroyable that needs to be destroyed for a win."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"0 - 100")),Object(a.b)("td",null,"100%")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"mode-changes")),Object(a.b)("td",null,"Specify if this destroyable uses custom"," ",Object(a.b)("a",{href:"/modules/monument_modes"},"monument modes")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-progress")),Object(a.b)("td",null,"Show this destroyables progress in the scoreboard."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"repairable")),Object(a.b)("td",null,"Specify if the destroyable can be repaired."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"sparks")),Object(a.b)("td",null,"Spawn fireworks particles for destroyed blocks & play the fireworks sound to all players."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show")),Object(a.b)("td",null,"Specify if the objective should be hidden from all visible locations to the player. These locations include chat, the boss bar, and the scoreboard.",Object(a.b)("br",null),Object(a.b)("label",null,"NOTE:"),"The objective will also not be logged to the Database and the player will not recieve any raindrops upon completion."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"proximity-metric")),Object(a.b)("td",null,"Metric used to determine proximity to the destroyable.",Object(a.b)("br",null),"Accepts ",Object(a.b)("label",null,"closest player"),", ",Object(a.b)("label",null,"closest block")," or"," ",Object(a.b)("label",null,"closest kill")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Proximity Metric")),Object(a.b)("td",null,Object(a.b)("label",null,"closest player"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"proximity-horizontal")),Object(a.b)("td",null,"Only calculate horizontal distance for destroyable proximity."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"))))),Object(a.b)("h5",{id:"destroyable-sub-elements"},"Destroyable Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<region>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"Region containing the destroyable."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Bounded Regions")))))),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<destroyables name="Monument" materials="obsidian" completion="100%">\n    <destroyable owner="blue">\n        <region><cuboid min="46,16,26" max="45,14,25"/></region>\n    </destroyable>\n    <destroyable owner="red">\n        <region><cuboid min="-44,16,-24" max="-45,14,-25"/></region>\n    </destroyable>\n</destroyables>\n')))}u.isMDXComponent=!0},192:function(e,t,l){"use strict";l.d(t,"a",(function(){return d})),l.d(t,"b",(function(){return j}));var b=l(0),n=l.n(b);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},a=Object.keys(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):c({},t,{},e)),l},d=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(b.forwardRef)((function(e,t){var l=e.components,b=e.mdxType,a=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(l),O=b,j=d["".concat(r,".").concat(O)]||d[O]||i[O]||a;return l?n.a.createElement(j,c({ref:t},s,{components:l})):n.a.createElement(j,c({ref:t},s))}));function j(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=l.length,r=new Array(a);r[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:b,r[1]=c;for(var s=2;s<a;s++)r[s]=l[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"}}]);