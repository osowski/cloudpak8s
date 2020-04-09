(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var o=a("pOBw"),n=a("q1tI"),r=a.n(n),c=a("NmYn"),i=a.n(c),l=a("OKom"),p=a("k4MR"),b=a("TSYQ"),s=a.n(b),m=a("QH2O"),u=a("qKvR"),h=function(e){var t,a=e.title,o=e.tabs,n=void 0===o?[]:o;return Object(u.b)("div",{className:s()(m.pageHeader,(t={},t[m.withTabs]=n.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},d=a("pEPl"),j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,o=d.data.site.siteMetadata.repository,n=a||o,r=n.baseUrl,c=n.subDirectory,i=r+"/edit/"+n.branch+c+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},f=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),g=a("I8xM");var N=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=i()(e,{lower:!0}),r=n===o,c=new RegExp(o+"(?!-)"),l=a.replace(c,n);return Object(u.b)("li",{key:e,className:s()((t={},t[g.selectedItem]=r,t),g.listItem)},Object(u.b)(y.Link,{className:g.link,to:""+l},e))}));return Object(u.b)("div",{className:g.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:g.list},n))))))},o}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,b=void 0===c?{}:c,s=t.relativePagePath,m=t.titleType,d=b.tabs,j=b.title,y=b.theme,g=b.description,k=b.keywords,w=o.data.site.pathPrefix,x=w?n.pathname.replace(w,""):n.pathname,C=d?x.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"";return Object(u.b)(p.a,{tabs:d,homepage:!1,theme:y,pageTitle:j,pageDescription:g,pageKeywords:k,titleType:m},Object(u.b)(h,{title:r?Object(u.b)(r,null):j,label:"label",tabs:d}),d&&Object(u.b)(N,{slug:x,tabs:d,currentTab:C}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:s})),Object(u.b)(f.a,{pageContext:t,location:n,slug:x,tabs:d,currentTab:C}),Object(u.b)(l.a,null))}},ZHxM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var o=a("7ljp"),n=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var c={},i={_frontmatter:c},l=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(l,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Subscription to a Helm Repository Channel"),Object(o.b)("p",null,"In this task, you define a ",Object(o.b)("strong",{parentName:"p"},"helm repository subscription channel")," and ",Object(o.b)("strong",{parentName:"p"},"subscribe")," to that ",Object(o.b)("strong",{parentName:"p"},"channel"),". The channel is of type ",Object(o.b)("strong",{parentName:"p"},"HelmRepo"),", meaning that the yaml you create will be deployed and stored in a Helm chart.\nVarious tasks associated are"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Look at the bookinfo application"),Object(o.b)("li",{parentName:"ul"},"Deploy the channel"),Object(o.b)("li",{parentName:"ul"},"Define the helm repo subscription model"),Object(o.b)("li",{parentName:"ul"},"Deploy the subscription"),Object(o.b)("li",{parentName:"ul"},"Check the application")),Object(o.b)("h3",null,"Bookinfo Application"),Object(o.b)("p",null,"You will use bookinfo application to deploy as a helm chart. The application is available as helm chart at ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples"}),"https://github.com/hybrid-ops/subscription-examples"))," along with the required resource definitions. You will this github as helm repository.\nNavigate to bookinfo folder, ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo"}),"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo"))," for the required prerequsites. This folder has three files"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"prereqs.yaml - creates bookinfo namespace and creates the required image policy for bookinfo container"),Object(o.b)("li",{parentName:"ul"},"prereqs-ns.yaml - creates the namespaces bookinfo-entitilement and bookinfo-project for the channel and subscriptions"),Object(o.b)("li",{parentName:"ul"},"ip.yaml - Creates the required image security policy for the the example bookinfo product page.")),Object(o.b)("p",null,"You can copy the files to your local workstation and run the commands"),Object(o.b)("p",null,"Once, you log in to the OpenShift command line of ",Object(o.b)("strong",{parentName:"p"},"MCM Hub"),", run the commands"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"oc apply -f prereqs.yaml\noc apply -f prereqs-ns.yaml\noc apply -f ip.yaml\n")),Object(o.b)("h3",null,"Create the Channel"),Object(o.b)("p",null,"You will use the file, bookinfo-channel.yaml in ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo-entitlement"}),"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo-entitlement"))," to create the required the channel. You can download the file to run locally. This resource file defines the channel for helm repository ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",r({parentName:"strong"},{href:"https://raw.githubusercontent.com/dymaczew/charts/master/repo/incubator/"}),"https://raw.githubusercontent.com/dymaczew/charts/master/repo/incubator/"))),Object(o.b)("p",null,"Log in to the MCM Hub and run the command"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"oc apply -f bookinfo-channel.yaml\n")),Object(o.b)("p",null,"Check if the channel is created:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"oc project bookinfo-project\noc get channel\n")),Object(o.b)("p",null,"The output should look equivalent to"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"bookinfo-channel   HelmRepo   https://raw.githubusercontent.com/dymaczew/charts/master/repo/incubator/   122m\n")),Object(o.b)("p",null,"This also can be varified in the console. Click the hambuger icon -> Manage Applications. Then launch the ",Object(o.b)("strong",{parentName:"p"},"Resources")," tab which shows the channel that is just created."),Object(o.b)("img",{src:"/assets/img/cp4mcm/mcm-channel.jpg",alt:"Channel Image"}),Object(o.b)("h3",null,"Create the Subscription"),Object(o.b)("p",null,"You will use the file, bookinfo-app.yaml in ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples/blob/master/bookinfo-project/bookinfo-app.yaml"}),"https://github.com/hybrid-ops/subscription-examples/blob/master/bookinfo-project/bookinfo-app.yaml"))," to create the required subscription with a placement policy. If you examine the file, you will find  that the placement rule is set to ",Object(o.b)("strong",{parentName:"p"},"environment: Demo"),". So, ensure that label is set on your target cluster where you want the application to deployed to.\nAlso, edit the file to modify the route according to your environment."),Object(o.b)("img",{src:"/assets/img/cp4mcm/mcm-modifyroute.jpg",alt:"Modify Route"}),Object(o.b)("p",null,"After the modification of the route, run the command to deploy the application"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"oc apply -f bookinfo-app.yaml\n")),Object(o.b)("p",null,"The application should be deployed. You can check if the subscription is propogated"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"oc get appsub --all-namespaces\n")),Object(o.b)("p",null,"The output will look similar to"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{}),"bookinfo-project   bookinfo-subscription   Propagated   141m\n")),Object(o.b)("p",null,"You also can check the console. Click the hambuger icon -> Manage Applications -> Overview\n",Object(o.b)("img",r({parentName:"p"},{src:"/assets/img/cp4mcm/mcm-applications.jpg",alt:"Applications Overview"}))),Object(o.b)("p",null,"Now, click the application bookinfo-app to view the various resources involved with the subscription.\n",Object(o.b)("img",r({parentName:"p"},{src:"/assets/img/cp4mcm/mcm-appdetails.jpg",alt:"Application Details"}))),Object(o.b)("p",null,"Hover over the placement rule to see the placement rule of the application\n",Object(o.b)("img",r({parentName:"p"},{src:"/assets/img/cp4mcm/mcm-appdetails1.jpg",alt:"Placement Rule Visualization"}))),Object(o.b)("p",null,"If you don’t see the application propogated, you may have to check the placement rule and ensure the rule matches to at least one cluster in your environment."))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-mcm-bookinfo-index-mdx-ca514cfae4e37a7425d0.js.map