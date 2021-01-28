(this.webpackJsonpserver_tracker=this.webpackJsonpserver_tracker||[]).push([[0],{154:function(e,r,t){},156:function(e,r,t){},163:function(e,r,t){"use strict";t.r(r);var n=t(6),s=t(0),a=t.n(s),d=t(53),i=t.n(d),c=(t(154),t(155),t(156),t(187)),l=t(181),j=t(179),o=t(178),u=t(117),b=t.n(u),h=t(34),p=t.n(h),v=function(e){var r=e.servers,t=e.deleteServer,s=e.setupServer,a=[{key:1,value:"Remove",text:"Remove"},{key:2,value:"Complete",text:"Complete"}],d=function(e,r){"Remove"===r.value?t(r.id):"Complete"===r.value&&s(r.id)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Server Tracker"}),b.a.isEmpty(r)?Object(n.jsx)("p",{children:"No servers available to view."}):Object(n.jsxs)(l.a,{celled:!0,children:[Object(n.jsx)(l.a.Header,{children:Object(n.jsxs)(l.a.Row,{children:[["Hostname","IP","Deadline","Status"].map((function(e,r){return Object(n.jsx)(l.a.HeaderCell,{children:e},r)})),Object(n.jsx)(l.a.HeaderCell,{children:"Actions"})]})}),Object(n.jsx)(l.a.Body,{children:r.map((function(e){return Object(n.jsxs)(l.a.Row,{children:[Object(n.jsx)(j.a,{content:e.description,trigger:Object(n.jsx)(l.a.Cell,{children:e.hostname})}),Object(n.jsx)(l.a.Cell,{children:e.ip}),Object(n.jsx)(l.a.Cell,{children:p()(e.deadline).format("l")}),Object(n.jsx)(l.a.Cell,{children:e.setup?"Completed":"Pending"}),Object(n.jsx)(l.a.Cell,{collapsing:!0,children:Object(n.jsx)(o.a,{servers:r,id:e.id,onChange:d,placeholder:"Select action",options:a})})]},e.id)}))})]})]})},O=t(186),x=t(182),m=function(e){return Object(n.jsxs)("div",{className:"Overdue-Servers",children:[Object(n.jsx)(O.a,{as:"h2",children:"Overdue Servers"}),e.servers.filter((function(e){return p()().diff(p()(e.deadline).format("l"),"days")>0&&!1===e.setup})).map((function(e){return Object(n.jsx)(x.a,{className:"List-Background",relaxed:!0,items:[e.hostname,e.ip,"".concat(p()().diff(p()(e.deadline).format("l"),"days")," days")]},e.id)}))]})},f=t(33),S=t(183),C=t(184),g=t(180),N=t(137),w=function(e){var r=e.addNewServer,t=Object(s.useState)(!1),a=Object(f.a)(t,2),d=a[0],i=a[1],c=Object(N.a)(),l=c.register,j=c.handleSubmit,o=c.errors;return Object(n.jsxs)(S.a,{onClose:function(){return i(!1)},onOpen:function(){return i(!0)},open:d,trigger:Object(n.jsx)(C.a,{children:"Add server"}),children:[Object(n.jsx)(S.a.Header,{children:"Add Server"}),Object(n.jsx)(S.a.Content,{children:Object(n.jsxs)(g.a,{onSubmit:j((function(e){r(e),i(!1)})),children:[Object(n.jsxs)(g.a.Field,{children:[Object(n.jsx)("label",{children:"Hostname"}),Object(n.jsx)("input",{name:"hostname",placeholder:"Please enter a hostname.",ref:l({required:!0})}),o.hostname&&Object(n.jsx)("p",{className:"errorMessage",children:"\u26a0 This is required."})]}),Object(n.jsxs)(g.a.Field,{children:[Object(n.jsx)("label",{children:"IP"}),Object(n.jsx)("input",{name:"ip",placeholder:"Please enter a valid ipv4 address.",ref:l({required:!0,pattern:/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/})}),o.ip&&Object(n.jsx)("p",{className:"errorMessage",children:"\u26a0 Please enter a valid ipv4 address."})]}),Object(n.jsxs)(g.a.Field,{children:[Object(n.jsx)("label",{children:"Deadline"}),Object(n.jsx)("input",{name:"deadline",placeholder:"Please enter a valid date in MM/DD/YYYY format",ref:l({validate:function(e){return p()(e,"MM/DD/YYYY",!0).isValid()}})}),o.deadline&&Object(n.jsx)("p",{className:"errorMessage",children:"\u26a0 Please enter a valid date in MM/DD/YYYY format."})]}),Object(n.jsxs)(g.a.Field,{children:[Object(n.jsx)("label",{children:"Description"}),Object(n.jsx)("input",{name:"description",placeholder:"Please enter a description.",ref:l({required:!0})}),o.description&&Object(n.jsx)("p",{className:"errorMessage",children:"\u26a0 This is required."})]}),Object(n.jsx)(g.a.Field,{children:Object(n.jsx)(C.a,{type:"submit",className:"Add-Server",children:"Add Server"})})]})})]})},Y=t(10),k=[{id:101,hostname:"core",description:"The central devices we rely on and scan regularly.",ip:"1.2.3.4",deadline:"2020-04-23T18:30:00.000Z",setup:!1},{id:102,hostname:"backup",description:"Lorem ipsum backup.",ip:"255.255.255.255",deadline:"2018-07-23T18:30:00.000Z",setup:!1},{id:103,hostname:"external",description:"Lorem ipsum external.",ip:"1.0.0.0",deadline:"2021-07-23T12:30:00.000Z",setup:!1}];var y=function(e){var r=Object(s.useState)(e),t=Object(f.a)(r,2),n=t[0],a=t[1];return{servers:n,addNewServer:function(e){var r,t=((r=e).id=k[k.length-1].id+1,r.setup=!1,k=[].concat(Object(Y.a)(k),[r]));a(t)},deleteServer:function(e){var r=function(e){return k=k.filter((function(r){return r.id!==e}))}(e);a(r)},setupServer:function(e){var r=Object(Y.a)(function(e){return k.filter((function(r){return r.id===e}))[0].setup=!0,k}(e));a(r)}}};var M=function(){var e=y(k),r=e.servers,t=e.addNewServer,s=e.deleteServer,a=e.setupServer;return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(c.a,{divided:!0,columns:2,stackable:!0,children:[Object(n.jsx)(c.a.Column,{width:12,children:Object(n.jsxs)("div",{className:"First-Column",children:[Object(n.jsx)(w,{addNewServer:t}),Object(n.jsx)(v,{servers:r,deleteServer:s,setupServer:a})]})}),Object(n.jsx)(c.a.Column,{width:4,children:Object(n.jsx)(m,{servers:r})})]})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.554fcd1b.chunk.js.map