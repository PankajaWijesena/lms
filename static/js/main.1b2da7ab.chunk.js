(this["webpackJsonpplw-lms"]=this["webpackJsonpplw-lms"]||[]).push([[0],{75:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),i=a.n(r),c=(a(75),a(50)),l=a.n(c),s=a(58),d=a(19),b=a(51);a(89);b.a.initializeApp({apiKey:"AIzaSyAFTA1AUxOG5ukRv2oQsc4t4TTf_-qKY88",authDomain:"nsbm-spm-plw-lms.firebaseapp.com",projectId:"nsbm-spm-plw-lms",storageBucket:"nsbm-spm-plw-lms.appspot.com",messagingSenderId:"206652651828",appId:"1:206652651828:web:9d6940505da75c6a014d61"});var u=b.a.firestore(),j=a(118),f=a(122),h=a(90),O=a(6);var m=function(e){var t=e.setBookListOpen,a=e.setBookAddOpen;return Object(O.jsxs)(j.a,{position:"fixed",className:"appBar",elevation:3,color:"primary",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)("h1",{className:"headerText",children:"Library Management System"})}),Object(O.jsx)("div",{className:"navBtnGroup",children:Object(O.jsxs)(f.a,{color:"primary","aria-label":"outlined primary button group",size:"small",fullWidth:!0,children:[Object(O.jsx)(h.a,{onClick:function(){a(!0),t(!1)},children:"Add New Book"}),Object(O.jsx)(h.a,{onClick:function(){t(!0),a(!1)},children:"List All Books"})]})})]})},p=a(53),v=a(128),x=a(45);var k={formField:{margin:"0 0 1rem 0"},formButton:{display:"flex"},formButtonAdd:{flex:4,marginRight:"0.3rem"},formButtonClear:{flex:1,marginLeft:"0.3rem"},addedSuccess:{color:"blue",fontFamily:"Roboto",margin:"2rem auto"}},y=function(e){var t=e.onAdd,a=Object(n.useState)(""),o=Object(d.a)(a,2),r=o[0],i=o[1],c=Object(n.useState)(""),l=Object(d.a)(c,2),s=l[0],b=l[1],u=Object(n.useState)(""),j=Object(d.a)(u,2),f=j[0],m=j[1],y=Object(n.useState)(""),g=Object(d.a)(y,2),B=g[0],S=g[1],A=Object(n.useState)(""),w=Object(d.a)(A,2),C=w[0],F=w[1],N=Object(n.useState)(!1),I=Object(d.a)(N,2),L=I[0],T=I[1],W=function(){i(""),b(""),m(""),S(""),F("")};return Object(O.jsxs)("div",{className:"addbook",children:[Object(O.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),r&&s&&f&&B&&C)?(t({title:r,isbn:s,author:f,genre:B,publisher:C}),W(),T(!0),setTimeout((function(){return T(!1)}),1e3)):alert("Please Add All the Infomation About the Book!")},children:[Object(O.jsx)(v.a,{id:"filled-basic",label:"Title",variant:"filled",fullWidth:!0,value:r,onChange:function(e){return i(e.target.value)},style:k.formField,role:"new-book-title"}),Object(O.jsx)(v.a,{id:"filled-basic",label:"ISBN",variant:"filled",fullWidth:!0,value:s,onChange:function(e){return b(e.target.value)},style:k.formField,role:"new-book-isbn"}),Object(O.jsx)(v.a,{id:"filled-basic",label:"Author",variant:"filled",fullWidth:!0,value:f,onChange:function(e){return m(e.target.value)},style:k.formField,role:"new-book-author"}),Object(O.jsx)(v.a,{id:"filled-basic",label:"Genre",variant:"filled",fullWidth:!0,value:B,onChange:function(e){return S(e.target.value)},style:k.formField,role:"new-book-genre"}),Object(O.jsx)(v.a,{id:"filled-basic",label:"Publisher",variant:"filled",fullWidth:!0,value:C,onChange:function(e){return F(e.target.value)},style:k.formField,role:"new-book-publisher"}),Object(O.jsxs)("div",{style:k.formButton,children:[Object(O.jsx)(h.a,{type:"submit",color:"primary",variant:"outlined",role:"new-book-submit",style:k.formButtonAdd,children:"Add Book"}),Object(O.jsx)(h.a,{type:"reset",onClick:W,color:"secondary",variant:"outlined",role:"new-book-clear",style:k.formButtonClear,children:"Clear"})]})]}),Object(O.jsx)(x.a,{variant:"body1",color:"primary",style:Object(p.a)(Object(p.a)({},k.addedSuccess),{},{visibility:L?"visible":"hidden"}),role:"new-book-add-success",children:"The Book is Added to the Database"})]})},g=a(126),B=a(127),S=a(123),A=a(124),w=a(129),C=a(125),F=a(64),N=a.n(F);function I(e){var t=e.book;return Object(O.jsx)("div",{children:Object(O.jsxs)(S.a,{children:[Object(O.jsx)(A.a,{avatar:Object(O.jsx)(w.a,{children:Object(O.jsx)(N.a,{})}),title:t.title,subheader:t.isbn}),Object(O.jsxs)(C.a,{children:[Object(O.jsxs)(x.a,{variant:"body2",color:"textSecondary",children:["Author: ",t.author]}),Object(O.jsxs)(x.a,{variant:"body2",color:"textSecondary",children:["Genre: ",t.genre]}),Object(O.jsxs)(x.a,{variant:"body2",color:"textSecondary",children:["Publisher: ",t.publisher]})]})]})})}var L=function(e){var t=e.booksList,a=Object(n.useState)([]),o=Object(d.a)(a,2),r=o[0],i=o[1];return Object(n.useEffect)((function(){i(t)}),[t]),Object(O.jsx)("div",{className:"listBook",children:Object(O.jsx)(g.a,{children:Object(O.jsx)(B.a,{container:!0,children:r.map((function(e,t){return Object(O.jsx)("div",{className:"listBookItem",children:Object(O.jsx)(B.a,{item:!0,children:Object(O.jsx)(I,{book:e})})},t)}))})})})};a(86);var T=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),i=Object(d.a)(r,2),c=i[0],b=i[1],j=Object(n.useState)(!0),f=Object(d.a)(j,2),h=f[0],p=f[1];Object(n.useEffect)((function(){v()}),[c]);var v=function(){u.collection("books").orderBy("title").get().then((function(e){var t=[];e.docs.forEach((function(e){t.push(e.data())})),o(t)}))},x=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.collection("books").add(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(m,{setBookAddOpen:p,setBookListOpen:b}),h&&Object(O.jsx)(y,{onAdd:x}),c&&Object(O.jsx)(L,{booksList:a})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),W()}},[[87,1,2]]]);
//# sourceMappingURL=main.1b2da7ab.chunk.js.map