(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var l=n(1),a=n(9),i=(n(0),n(192)),r={id:"includes-conditionals",title:"Includes & Conditionals"},o={id:"modules/general/includes-conditionals",title:"Includes & Conditionals",description:"### XML File Includes",source:"@site/docs/modules/general/includes-conditionals.mdx",permalink:"/docs/modules/general/includes-conditionals",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/general/includes-conditionals.mdx",sidebar:"Modules",previous:{title:"Main Map Element",permalink:"/docs/modules/general/main"},next:{title:"Map Tutorial",permalink:"/docs/modules/information/tutorial"}},c=[{value:"XML File Includes",id:"xml-file-includes",children:[]},{value:"Conditionals",id:"conditionals",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"xml-file-includes"},"XML File Includes"),Object(i.b)("p",null,"A XML file can be split into multiple files and then included into the main one by using the include element. This allows you to keep the main file more organized by including sections such as kits or classes."),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<include src="classes.xml"/>\n')),Object(i.b)("p",null,"The PGM plugin will look through it's plugin-wide include path for includes, and it will also look for them relative to from where they are imported. You can set up a chain of includes that respects those same semantics."),Object(i.b)("p",null,"Included XML files should have the XML header and the main map container."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0"?>\n<map proto="#{MapProto()}">\n\n\x3c!-- Add kits, classes etc., here --\x3e\n\n</map>\n')),Object(i.b)("p",null,"The master map repository contains the following pre-made XML files for you to use"),Object(i.b)("div",{className:"table-container"},Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"File"),Object(i.b)("th",null,"Description"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/tutorial.xml"},"tutorial.xml")),Object(i.b)("td",null,"Contains the starting and ending stages of a tutorial")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/continuity-tnt.xml"},"continuity-tnt.xml")),Object(i.b)("td",null,"Contains a pre-designed TNT inventory, used on maps such as BoomBox")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/blasternauts.xml"},"blasternauts.xml")),Object(i.b)("td",null,"Contains the base XML for an arcade gamemode called 'blasternauts'")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/Blitz/blitz-global.xml"},"blitz-global.xml")),Object(i.b)("td",null,"Contains the autorespawn mechanism for blitz maps")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/Blitz/GS/gs.xml"},"gs.xml")),Object(i.b)("td",null,"Contains pre-made classes for the Ghost Squadron gamemode")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/Blitz/GS/gs-ffa.xml"},"gs-ffa.xml")),Object(i.b)("td",null,"Contains pre-made teams for the Ghost Squadron FFA gamemode")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/stamina.xml"},"stamina.xml")),Object(i.b)("td",null,"Contains the default settings for the stamina module")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/Include/skywars.xml"},"skywars.xml")),Object(i.b)("td",null,"Contains the base XML for Skywars")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/Include/block-runner.xml"},"block-runner.xml")),Object(i.b)("td",null,"Contains the base XML for an arcade gamemode called 'block runner'")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"https://maps.oc.tc/Include/disable-boat-crafting.xml"},"disable-boat-crafting.xml")),Object(i.b)("td",null,"Contains XML that disables boat crafting of any kind"))))),Object(i.b)("h3",{id:"conditionals"},"Conditionals"),Object(i.b)("p",null,"XML files can contain simple ",Object(i.b)("inlineCode",{parentName:"p"},"<if>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<unless>")," ","[conditional][https://en.wikipedia.org/wiki/conditional_%28computer_programming%29]"," statements, these conditionals can be used to reduce duplicated map files and simplify managing multiple variations of a map.\nFor example, instead of having multiple map variants in different folders they can condensed into one neat location.\nThis also allows map variants to be automatically loaded on a specific servers or during holiday events."),Object(i.b)("p",null,"Conditionals can be used anywhere in the XML and can contain anything.\nWhen PGM parses the XML, it will skip over any conditional blocks which are false."),Object(i.b)("p",null,"There are two limitations to conditionals right now:\nattributes can only equate to true/false and conditions are defined in the PGM server configuration."),Object(i.b)("div",{className:"table-container"},Object(i.b)("table",{className:"table"},Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Element"),Object(i.b)("th",null,"Description"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'<if a="true"> </if>')),Object(i.b)("td",null,"If a is true, use the contents of this element.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'<if a="true" b="true"> </if>')),Object(i.b)("td",null,"If a AND b are both true, use the contents of this element.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'<unless a="true"> </unless>')),Object(i.b)("td",null,"If a is NOT true, use the contents of this element.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'<unless a="false" b="false"> </unless>')),Object(i.b)("td",null,"If (a OR b) is NOT false, use the contents of this element."))))),Object(i.b)("h5",{id:"conditionals-1"},"Conditionals"),Object(i.b)("div",{className:"table-container"},Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Name"),Object(i.b)("th",null,"Description"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'ranked=""')),Object(i.b)("td",null,"The map is running on a ranked server.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'halloween=""')),Object(i.b)("td",null,"Halloween -- Oct 1st 00:00 to Nov 1st 00:00")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'christmas=""')),Object(i.b)("td",null,"Christmas -- Dec 1st 00:00 to Dec 26th 00:00")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("label",null,'april-fools=""')),Object(i.b)("td",null,"April Fools Day -- Apr 1st 00:00 to Apr 2nd 00:00"))))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Examples")),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- this section is only parsed when on a ranked server. --\x3e\n<if ranked="true">\n    <time>30m</time>\n    <broadcasts>\n        <tip after="1m">You guys are pros, keep up the good teamwork!</tip>\n    </broadcasts>\n</if>\n\n\x3c!-- Conditional kit inventory --\x3e\n<kits>\n    <kit id="red-inventory">\n        <if ranked="false">\n            <item slot="0" material="iron sword"/>\n        </if>\n        <if ranked="true">\n            <item slot="0" material="diamond sword"/>\n        </if>\n    </kit>\n</kits>\n')),Object(i.b)("h4",{id:"conditional-terrain"},"Conditional Terrain"),Object(i.b)("p",null,"If the individual map variants have a different physical world file they can still be neatly organized in the same folder.\nThe ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/modules/world#terrain"}),"terrain")," tag can be used to specify a sub-folder that contains the map's terrain data.\nThis will require any regions, etc. that are different between the worlds to be defined in separate conditionals."),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<if ranked="true">\n    <terrain world="ranked"/>\n    <time result="objectives">30m</time>\n</if>\n<unless ranked="true">\n    <terrain world="normal"/>\n    <time result="objectives">45m</time>\n    <respawn delay="5s" auto="true"/>\n</unless>\n')),Object(i.b)("h4",{id:"things-not-to-do"},"Things Not to Do"),Object(i.b)("p",null,"There are some pitfalls you should avoid when using conditionals.\nDefining elements outside and inside a conditional is discouraged, instead those elements should be defined inside their own conditionals.\nFor example, elements with ID's will throw an error if they are defined in both places at the same time.\nHowever, some elements will not, and instead the first or last defined instance of that element will be used."),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Don\'t do this! PGM will throw an error because the id \'zombies\' is used twice. --\x3e\n<teams>\n    <team id="zombies" color="red" max="30"/>\n    <if ranked="true">\n        <team id="zombies" color="dark red" max="10"/>\n    </if>\n</teams>\n\n\x3c!-- This is the correct way to do the above. --\x3e\n<teams>\n    <if ranked="false">\n        <team id="zombies" color="red" max="30"/>\n    </if>\n    <if ranked="true">\n        <team id="zombies" color="dark red" max="10"/>\n    </if>\n</teams>\n')))}b.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=l,p=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(p,o({ref:t},s,{components:n})):a.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);