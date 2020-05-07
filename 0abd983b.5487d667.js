(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return u}));var n=l(1),b=l(9),a=(l(0),l(192)),c={id:"lootables",title:"Lootables"},i={id:"modules/lootables",title:"Lootables",description:"Lootables are chests or other containers that generate their contents based on custom rules and probabilities.",source:"@site/docs/modules/lootables.mdx",permalink:"/PGM/docs/modules/lootables",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/lootables.mdx",sidebar:"Modules",previous:{title:"Kill Rewards",permalink:"/PGM/docs/modules/kill-rewards"}},o=[{value:"Loot",id:"loot",children:[]},{value:"Fill",id:"fill",children:[]}],r={rightToc:o};function u(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},r,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Lootables are chests or other containers that generate their contents based on custom rules and probabilities.\nThey can optionally refill themselves on a schedule, or in response to dynamic filters."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Lootables Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<lootables> </lootables>")),Object(a.b)("td",null),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<loot>")),Object(a.b)("td",null,"A generated set of items"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Loot Sub-elements"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<fill>")),Object(a.b)("td",null,"Configuration for filling containers with loot"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Fill Sub-elements")))))),Object(a.b)("h3",{id:"loot"},"Loot"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<loot>")," element defines a generated set of items, using literal ",Object(a.b)("inlineCode",{parentName:"p"},"<item>")," elements,\nand operations for choosing them."),Object(a.b)("div",{className:"table-container",style:{marginBottom:"30px"}},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Loot Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<loot>")),Object(a.b)("td",null,"A generated set of items"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Loot Sub-elements")))))),Object(a.b)("div",{className:"table-container",style:{marginBottom:"30px"}},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Loot Attributes"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"id")),Object(a.b)("td",null,"Unique identifier used to reference this loot elsewhere"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")))))),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"200px"}},"Loot Sub-elements"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Type"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<item>")),Object(a.b)("td",null,"An item to include in the loot. This can be any type of item element, and can have any item attributes."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/items"},"Item"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<any>")),Object(a.b)("td",null,Object(a.b)("a",{className:"left-ref-link",href:"#any"},Object(a.b)("i",{className:"fa fa-chevron-down"})),"Random selection of children"),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<maybe>")),Object(a.b)("td",null,"Include child conditionally based on a filter"),Object(a.b)("td",null))))),Object(a.b)("h4",{id:"random-selection"},"Random Selection"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<any>")," element makes a random selection from any number of child elements.\nIts children can be ",Object(a.b)("inlineCode",{parentName:"p"},"<option>")," elements, or any other ",Object(a.b)("inlineCode",{parentName:"p"},"<loot>")," sub-element."),Object(a.b)("div",{className:"table-container",style:{marginBottom:"30px"}},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"150px"}},"Any Attributes"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"count")),Object(a.b)("td",null,"Number of child elements to choose"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Numeric Range")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"unique")),Object(a.b)("td",null,Object(a.b)("label",null,"true")," if each child can only be chosen once.",Object(a.b)("br",null),Object(a.b)("label",null,"false")," to allow a child to be chosen multiple times."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true"))))),Object(a.b)("div",{className:"table-container",style:{marginBottom:"30px"}},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Any Sub-elements"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<option>")),Object(a.b)("td",null,"A single option for the random selection"))))),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"150px"}},"Option Attributes"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"weight")),Object(a.b)("td",null,"Weight of this option relative to all others"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"1")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,"Filter used to decide the eligibility of this option"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Filter")),Object(a.b)("td",null,Object(a.b)("label",null,"always")))))),Object(a.b)("h4",{id:"conditional-inclusion"},"Conditional Inclusion"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<maybe>")," element includes its child elements only if the specified filter matches.\nThe filter is matched against the first player to access the loot."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"150px"}},"Maybe Attributes"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,"Filter used to decide inclusion of children"),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")))))),Object(a.b)("h3",{id:"fill"},"Fill"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<fill>")," element fills containers with generated loot.\nIt will fill ",Object(a.b)("strong",{parentName:"p"},"anything")," that has an inventory, and matches its ",Object(a.b)("inlineCode",{parentName:"p"},"filter")," property.\nThis can include chests, dispensers, storage minecarts, or any other container block or entity.\nIt will fill containers regardless of where they came from, so if you don't want player-placed\nchests to be filled, then you will have to prevent that somehow."),Object(a.b)("div",{className:"table-container",style:{marginBottom:"30px"}},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Fill Element"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<fill>")),Object(a.b)("td",null,"Automatically fills containers with loot"))))),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Fill Attributes"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"loot")),Object(a.b)("td",null,"Loot to fill containers with"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Loot")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,"Selects which blocks/entities to fill"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Filter")),Object(a.b)("td",null,Object(a.b)("label",null,"always"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"refill-trigger")),Object(a.b)("td",null,"Optional dynamic filter that causes containers to be refilled"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"refill-interval")),Object(a.b)("td",null,"Time to refill containers after they are first accessed"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Time Period")),Object(a.b)("td",null,"oo (never)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"refill-clear")),Object(a.b)("td",null,"Whether to clear containers before refilling them"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true"))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<lootables>\n    \x3c!-- Define a procedural list of loot --\x3e\n    \x3c!-- Can be different every time it is used --\x3e\n    \x3c!-- All operators can be composed within each other --\x3e\n    <loot id="stuff">\n        \x3c!-- Always include these items --\x3e\n        <item material="stone sword"/>\n        <item material="bow"/>\n        \x3c!-- Include if filter matches opener of the container --\x3e\n        <maybe filter="red-team">\n            <item material="stained clay" damage="14" amount="64"/>\n            <item material="leather helmet" color="#f00"/>\n        </maybe>\n\n        \x3c!-- Choose one element at random --\x3e\n        <any>\n            <item material="stone" damage="1"/>\n            <item material="stone" damage="2"/>\n            <item material="stone" damage="3"/>\n        </any>\n\n        \x3c!-- Weighted choice --\x3e\n        <any>\n            <option weight="5">\n                <item material="cookie"/>\n            </option>\n            <option weight="3">\n                <item material="bread"/>\n            </option>\n            <option weight="1">\n                <item material="golden apple"/>\n            </option>\n        </any>\n\n        \x3c!-- Choose any two unique elements (unique="false" to allow duplicates) --\x3e\n        <any count="2">\n            ...\n        </any>\n\n        \x3c!-- Choose between 3 and 5 unique elements --\x3e\n        <any count="3..5">\n            ...\n        </any>\n    </loot>\n\n    \x3c!-- Define inventories to refill --\x3e\n    \x3c!-- Filling always happens when a player opens the inventory --\x3e\n    \x3c!-- Any block or entity that has an inventory (and matches the filter) will be filled --\x3e\n    <fill loot="stuff"          \x3c!-- Loot to fill inventory with --\x3e\n          filter="chests"       \x3c!-- Inventories to fill (blocks or entities) --\x3e\n          refill-interval="3s"  \x3c!-- Minimum interval between refills (default +inf) --\x3e\n          refill-trigger="..."  \x3c!-- Dynamic filter to trigger refill (default none) --\x3e\n          refill-clear="true"   \x3c!-- Clear inventory before refilling (default true) --\x3e\n    />\n</lootables>\n')))}u.isMDXComponent=!0},192:function(e,t,l){"use strict";l.d(t,"a",(function(){return s})),l.d(t,"b",(function(){return j}));var n=l(0),b=l.n(n);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var r=b.a.createContext({}),u=function(e){var t=b.a.useContext(r),l=t;return e&&(l="function"==typeof e?e(t):i({},t,{},e)),l},s=function(e){var t=u(e.components);return b.a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,r=o(e,["components","mdxType","originalType","parentName"]),s=u(l),O=n,j=s["".concat(c,".").concat(O)]||s[O]||d[O]||a;return l?b.a.createElement(j,i({ref:t},r,{components:l})):b.a.createElement(j,i({ref:t},r))}));function j(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,c=new Array(a);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var r=2;r<a;r++)c[r]=l[r];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"}}]);