(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var o=a("pOBw"),n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),c=a("OKom"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a("qKvR"),u=function(e){var t,a=e.title,o=e.tabs,n=void 0===o?[]:o;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=n.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},h=a("pEPl"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,o=h.data.site.siteMetadata.repository,n=a||o,r=n.baseUrl,i=n.subDirectory,l=r+"/edit/"+n.branch+i+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var v=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0}),r=n===o,i=new RegExp(o+"(?!-)"),c=a.replace(i,n);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(N.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},n))))))},o}(r.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,h=b.tabs,g=b.title,N=b.theme,f=b.description,w=b.keywords,k=o.data.site.pathPrefix,x=k?n.pathname.replace(k,""):n.pathname,C=h?x.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:h,homepage:!1,theme:N,pageTitle:g,pageDescription:f,pageKeywords:w,titleType:d},Object(m.b)(u,{title:r?Object(m.b)(r,null):g,label:"label",tabs:h}),h&&Object(m.b)(v,{slug:x,tabs:h,currentTab:C}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(j.a,{pageContext:t,location:n,slug:x,tabs:h,currentTab:C}),Object(m.b)(c.a,null))}},TYK8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var o=a("7ljp"),n=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},c=n.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(c,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page contains:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#loading-ppas-and-images-on-roks"}),"Loading ppas and images on Red Hat OpenShift on IBM Cloud")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"#loading-ppas-and-images-on-premise"}),"Loading ppas and images on-premise"))),Object(o.b)("h2",null,"Loading ppas and images on Red Hat OpenShift on IBM Cloud"),Object(o.b)("p",null,"After installing the Integration Cloud Pak, you might wish to load further ppas or images. These instructions describe how to load images on a Red Hat OpenShift on IBM Cloud, managed service, environment."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download the ppas you want to load to your computer or boot node."),Object(o.b)("li",{parentName:"ol"},"We need to expose the docker registry of the OpenShift cluster to your\nnode. To do so:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Login to Openshift with the ",Object(o.b)("inlineCode",{parentName:"li"},"oc login")," command found on the OpenShift UI."),Object(o.b)("li",{parentName:"ul"},"Update the local /etc/hosts and add the line ",Object(o.b)("inlineCode",{parentName:"li"},"127.0.0.1 docker-registry.default.svc"),". You can edit this file by running this command from anywhere on the command line:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",r({parentName:"pre"},{className:"language-md"}),"sudo vi /etc/hosts\n"))),Object(o.b)("li",{parentName:"ul"},"Expose port 5000 on the boot node. You need to leave the window open or else the port-forwarding will stop. To achieve this run this command:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",r({parentName:"pre"},{className:"language-md"}),"kubectl -n default port-forward svc/docker-registry 5000:5000\n"))))),Object(o.b)("li",{parentName:"ol"},"Sign into the docker registry. To login to the docker registry run:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",r({parentName:"pre"},{className:"language-md"}),"docker login -u $(oc whoami) -p $(oc whoami -t) docker-registry.default.svc:5000\n"))),Object(o.b)("li",{parentName:"ol"},"Navigate on your command line to the folder with the ppa you want to load."),Object(o.b)("li",{parentName:"ol"},"Load the ppa with:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",r({parentName:"pre"},{className:"language-md"}),"cloudctl catalog load-archive --archive <file-name> --registry docker-registry.default.svc:5000/<target-namespace>\n"))),Object(o.b)("li",{parentName:"ol"},"Repeat the above for all the other packages listed above"),Object(o.b)("li",{parentName:"ol"},"Log in to ICP console and sync the repositories."),Object(o.b)("li",{parentName:"ol"},"Go to Catalog and search for ppa you loaded."),Object(o.b)("li",{parentName:"ol"},"You can now install and configure the ppa.")),Object(o.b)("h2",null,"Loading ppas and images on-premise"),Object(o.b)("p",null,"These instructions describe how to load images on an on-prem deployment\nof the Integration Cloud Pak."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download the ppas you want to load to your computer or boot node."),Object(o.b)("li",{parentName:"ol"},"Login to Openshift with the ",Object(o.b)("inlineCode",{parentName:"li"},"oc login")," command found on the OpenShift UI."),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"oc -n default get routes")," to get the registry address for this\ncluster. Take note of it."),Object(o.b)("li",{parentName:"ol"},"Sign into the docker registry. To login to the docker registry run:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",r({parentName:"pre"},{className:"language-md"}),"docker login -u $(oc whoami) -p $(oc whoami -t) <docker-registry-address>\n"))),Object(o.b)("li",{parentName:"ol"},"Navigate on your command line to the folder with the ppa you want to load."),Object(o.b)("li",{parentName:"ol"},"Load the ppa with:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",r({parentName:"pre"},{className:"language-md"}),"cloudctl catalog load-archive --archive <file-name> --registry <docker-registry-address>/<target-namespace>\n"))),Object(o.b)("li",{parentName:"ol"},"Repeat the above for all the other packages listed above."),Object(o.b)("li",{parentName:"ol"},"Log in to ICP console and sync the repositories."),Object(o.b)("li",{parentName:"ol"},"Go to Catalog and search for ppa you loaded."),Object(o.b)("li",{parentName:"ol"},"You can now install and configure the ppa.")))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-post-install-index-mdx-bc76b5c7a3f0a34438e7.js.map