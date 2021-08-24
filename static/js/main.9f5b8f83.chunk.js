(this["webpackJsonpqr-code"]=this["webpackJsonpqr-code"]||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),i=(n(141),n(18)),s=n(311),l=n(316),j=n(314),d=(n(142),n(124)),b=n.n(d),O=n(6),h=new b.a({width:250,height:250,image:"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",dotsOptions:{color:"#4267b2",type:"square"},imageOptions:{crossOrigin:"anonymous",margin:5},cornersSquareOptions:{color:"#FFD800",type:"square"}});function u(e){var t=Object(a.useState)("png"),n=Object(i.a)(t,2),c=n[0],o=n[1],r=Object(a.useRef)(null);Object(a.useEffect)((function(){h.append(r.current)}),[]),Object(a.useEffect)((function(){h.update({data:0==e.content.length?"empty":e.content})}),[e.content]),Object(a.useEffect)((function(){h.update({dotsOptions:{color:e.color,type:"dots"}})}),[e.color]),Object(a.useEffect)((function(){h.update({cornersSquareOptions:{color:e.colorCorner}})}),[e.colorCorner]);return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{ref:r}),Object(O.jsxs)("div",{style:x.inputWrapper,children:[Object(O.jsxs)("select",{onChange:function(e){o(e.target.value)},value:c,children:[Object(O.jsx)("option",{value:"png",children:"PNG"}),Object(O.jsx)("option",{value:"jpeg",children:"JPEG"}),Object(O.jsx)("option",{value:"webp",children:"WEBP"})]}),Object(O.jsx)("button",{onClick:function(){h.download({extension:c})},children:"Download"})]})]})}var x={inputWrapper:{margin:"20px 0",display:"flex",justifyContent:"space-between",width:"100%"},inputBox:{flexGrow:1,marginRight:20}},p=n(306),g=n(93),f=n(315),m=n(309),F=n(317),v=n(318),C=n(313),y=n(319),S=n(312),w=n(68),N=n.n(w),E=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},box:{borderStyle:"solid"},rootGrid:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:"gray"}}}));var D=function(){var e=E(),t=Object(F.a)().t,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=(c[1],Object(a.useState)(!1)),l=Object(i.a)(r,2),j=(l[0],l[1],Object(a.useState)("google.ch")),d=Object(i.a)(j,2),b=d[0],h=d[1],x=Object(a.useState)(""),p=Object(i.a)(x,2),w=p[0],D=p[1],k=Object(a.useState)("#000000"),q=Object(i.a)(k,2),P=q[0],G=q[1],I=Object(a.useState)("#000000"),R=Object(i.a)(I,2),B=R[0],T=R[1];return Object(O.jsx)("div",{className:"".concat(e.rootGrid),children:Object(O.jsxs)(m.a,{container:!0,spacing:2,direction:"row",alignContent:"center",justify:"center",children:[Object(O.jsxs)(m.a,{item:!0,children:[Object(O.jsxs)(s.a,{elevation:4,children:[Object(O.jsx)("div",{className:"Paper-header",children:Object(O.jsxs)("h3",{children:[" ",t("Dolf")," "]})}),Object(O.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(O.jsx)(f.a,{id:"standard-basic",multiline:!0,maxRows:3,label:"QR Content",onChange:function(e){h(e.target.value)},value:b})}),Object(O.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(O.jsx)(f.a,{id:"standard-basic",label:"Subtitle [Optional]",onChange:function(e){D(e.target.value)},value:w})})]}),Object(O.jsxs)(s.a,{elevation:4,children:[Object(O.jsx)("div",{className:"Paper-header",children:Object(O.jsx)("h3",{children:t("Customize")})}),Object(O.jsxs)(v.a,{defaultExpanded:!0,children:[Object(O.jsxs)(y.a,{expandIcon:Object(O.jsx)(N.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(O.jsx)(S.a,{className:e.heading,children:t("Color")}),Object(O.jsx)(S.a,{className:e.secondaryHeading,children:"["+t("Optional")+"]"})]}),Object(O.jsx)(C.a,{children:Object(O.jsx)("div",{className:"flex-container",children:Object(O.jsx)(g.a,{color:P,colors:["#000000","#808080","#FF0000","#FFD800","#4CFF00","#00FFFF","#0094FF","#0026FF","#FF7FED","#007F0E"],onChange:function(e){return G(e.hex)},triangle:"hide"})})})]}),Object(O.jsxs)(v.a,{defaultExpanded:!1,children:[Object(O.jsxs)(y.a,{expandIcon:Object(O.jsx)(N.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(O.jsx)(S.a,{className:e.heading,children:t("Color Corner")}),Object(O.jsx)(S.a,{className:e.secondaryHeading,children:"["+t("Optional")+"]"})]}),Object(O.jsx)(C.a,{children:Object(O.jsx)("div",{className:"flex-container",children:Object(O.jsx)(g.a,{color:B,colors:["#000000","#808080","#FF0000","#FFD800","#4CFF00","#00FFFF","#0094FF","#0026FF","#FF7FED","#007F0E"],onChange:function(e){return T(e.hex)},triangle:"hide"})})})]}),Object(O.jsxs)(v.a,{defaultExpanded:!1,children:[Object(O.jsxs)(y.a,{expandIcon:Object(O.jsx)(N.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(O.jsx)(S.a,{className:e.heading,children:t("Icon")}),Object(O.jsx)(S.a,{className:e.secondaryHeading,children:"["+t("Optional")+"]"})]}),Object(O.jsx)(C.a,{children:Object(O.jsx)("div",{className:"flex-container"})})]})]})]}),Object(O.jsx)(m.a,{item:!0,children:Object(O.jsx)(u,{content:b,color:P,imageSrc:o,subTitle:w,colorCorner:B})})]})})};function k(){var e=c.a.useState(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)(s.a,{square:!0,children:Object(O.jsxs)(l.a,{value:n,indicatorColor:"primary",textColor:"primary",centered:!0,onChange:function(e,t){console.log("New value: "+t),a(t)},"aria-label":"disabled tabs example",children:[Object(O.jsx)(j.a,{label:"Single Editor",value:0}),Object(O.jsx)(j.a,{label:"Active",value:1})]})}),Object(O.jsx)("br",{}),0==n&&Object(O.jsx)(D,{})]})}var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,321)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),q()}},[[264,1,2]]]);
//# sourceMappingURL=main.9f5b8f83.chunk.js.map