(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(1),o=n(10),a=(n(0),n(158)),r={id:"migrate",title:"Help Us Migrate Past Files!"},s={id:"guides/migrate",title:"Help Us Migrate Past Files!",description:"We need help migrating the old documentation files to this website. These were written in HAML, and need to be converted to Markdown and HTML/JSX (the technologies that the new documentation website uses). In order to do so, please continue reading this guide.",source:"@site/docs/guides/migrate.mdx",permalink:"/PGM/docs/guides/migrate",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/guides/migrate.mdx",sidebar:"Guides",previous:{title:"Defining Regions",permalink:"/PGM/docs/guides/regions"}},l=[],c={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We need help migrating the old documentation files to this website. These were written in HAML, and need to be converted to Markdown and HTML/JSX (the technologies that the new documentation website uses). In order to do so, please continue reading this guide."),Object(a.b)("p",null,"First, select a documentation file from ",Object(a.b)("inlineCode",{parentName:"p"},"reference"),", ",Object(a.b)("inlineCode",{parentName:"p"},"guides")," or ",Object(a.b)("inlineCode",{parentName:"p"},"modules"),", all located within the ",Object(a.b)("inlineCode",{parentName:"p"},"src")," folder in the old ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/OvercastNetwork/docs.oc.tc"}),"XML Documentation repository"),", and convert it to HTML/ERB using ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://haml2erb.org"}),"this tool"),"."),Object(a.b)("p",null,"Once you've got an HTML file, remove all unnecessary HTML. You will notice what's necessary or what's not if you take a look at existing migrated documents ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Electroid/PGM/blob/gh-pages/docs"}),"here"),", but generally you should maintain only maintain HTML tables, with a few exceptions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Replace ",Object(a.b)("inlineCode",{parentName:"li"},"<%= html_escape([XML Tags] %>")," with ",Object(a.b)("inlineCode",{parentName:"li"},"{`[XML TAGS]`}"),". Since Docusaurus 2 supports MDX, this is the only way to escape XML from rendering inside an HTML table."),Object(a.b)("li",{parentName:"ul"},"Replace ",Object(a.b)("inlineCode",{parentName:"li"},'<span class="highlight">')," and possible child ",Object(a.b)("inlineCode",{parentName:"li"},"<code>")," elements with ",Object(a.b)("inlineCode",{parentName:"li"},"<label>"),", from this:")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<td>\n  <span class="highlight">\n    <code> {`<world-borders> </world-borders>`} </code>\n  </span>\n</td>\n')),Object(a.b)("p",null,"to this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),"<td>\n  <label> {`<world-borders> </world-borders>`} </label>\n</td>\n")),Object(a.b)("p",null,"That's because ",Object(a.b)("inlineCode",{parentName:"p"},"<code>")," tags end up rendering multiline code blocks, not a one line code block."),Object(a.b)("p",null,"Last but not least, add a header that specifies an ID for that document and a title, like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"---\nid: regions\ntitle: Defining Regions\n---\n")),Object(a.b)("p",null,"And you're done! Please check the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Electroid/PGM/blob/docs/README.md#how-to-contribute"}),"contributing guidelines")," on how to submit your changes."))}d.isMDXComponent=!0}}]);