import{S as te,i as ae,s as le,k as p,q as S,a as A,l as m,m as g,r as T,h as d,c as F,n as Q,L as ne,b as ee,G as a,M as X,N as Y,O as V,P as oe,H as Z,K as se,Q as ie,o as re,u as ce,R as he}from"../chunks/index.81fc05cb.js";import{a as ue,C as _e}from"../chunks/App.92df9197.js";function $(o,e,n){const s=o.slice();return s[6]=e[n],s}function x(o){let e,n=o[6]+"",s,f,r;return{c(){e=p("option"),s=S(n),f=A(),this.h()},l(c){e=m(c,"OPTION",{});var h=g(e);s=T(h,n),f=F(h),h.forEach(d),this.h()},h(){e.__value=r=o[6],e.value=e.__value},m(c,h){ee(c,e,h),a(e,s),a(e,f)},p(c,h){h&4&&n!==(n=c[6]+"")&&ce(s,n),h&4&&r!==(r=c[6])&&(e.__value=r,e.value=e.__value)},d(c){c&&d(e)}}}function fe(o){let e,n,s,f,r,c,h,u,N,B,L,k,U,H,q,G,b,v,R,E,y,M,D,W,O=o[2],i=[];for(let t=0;t<O.length;t+=1)i[t]=x($(o,O,t));return{c(){e=p("main"),n=p("a"),s=S("Back"),f=A(),r=p("h1"),c=S("Create Account"),h=A(),u=p("div"),N=p("h3"),B=S("Callsign:"),L=A(),k=p("input"),U=A(),H=p("h3"),q=S("Faction:"),G=A(),b=p("form"),v=p("select");for(let t=0;t<i.length;t+=1)i[t].c();R=A(),E=p("button"),y=S("Submit"),this.h()},l(t){e=m(t,"MAIN",{});var _=g(e);n=m(_,"A",{href:!0});var l=g(n);s=T(l,"Back"),l.forEach(d),f=F(_),r=m(_,"H1",{});var I=g(r);c=T(I,"Create Account"),I.forEach(d),h=F(_),u=m(_,"DIV",{class:!0});var C=g(u);N=m(C,"H3",{});var j=g(N);B=T(j,"Callsign:"),j.forEach(d),L=F(C),k=m(C,"INPUT",{}),U=F(C),H=m(C,"H3",{});var w=g(H);q=T(w,"Faction:"),w.forEach(d),G=F(C),b=m(C,"FORM",{});var P=g(b);v=m(P,"SELECT",{});var z=g(v);for(let K=0;K<i.length;K+=1)i[K].l(z);z.forEach(d),R=F(P),E=m(P,"BUTTON",{type:!0});var J=g(E);y=T(J,"Submit"),J.forEach(d),P.forEach(d),C.forEach(d),_.forEach(d),this.h()},h(){Q(n,"href","/"),o[1]===void 0&&ne(()=>o[5].call(v)),E.disabled=M=!o[0]||!o[1],Q(E,"type","submit"),Q(u,"class","create-form")},m(t,_){ee(t,e,_),a(e,n),a(n,s),a(e,f),a(e,r),a(r,c),a(e,h),a(e,u),a(u,N),a(N,B),a(u,L),a(u,k),X(k,o[0]),a(u,U),a(u,H),a(H,q),a(u,G),a(u,b),a(b,v);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(v,null);Y(v,o[1],!0),a(b,R),a(b,E),a(E,y),D||(W=[V(k,"input",o[4]),V(v,"change",o[5]),V(b,"submit",oe(o[3]))],D=!0)},p(t,[_]){if(_&1&&k.value!==t[0]&&X(k,t[0]),_&4){O=t[2];let l;for(l=0;l<O.length;l+=1){const I=$(t,O,l);i[l]?i[l].p(I,_):(i[l]=x(I),i[l].c(),i[l].m(v,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=O.length}_&6&&Y(v,t[1]),_&7&&M!==(M=!t[0]||!t[1])&&(E.disabled=M)},i:Z,o:Z,d(t){t&&d(e),se(i,t),D=!1,ie(W)}}}function de(o,e,n){let s,f,r=[];re(async()=>{ue().then(N=>n(2,r=N))});function c(){console.log("NEW ACCOUNT: Callsign:",s,"Faction:",f),_e(s,f)}function h(){s=this.value,n(0,s)}function u(){f=he(this),n(1,f),n(2,r)}return[s,f,r,c,h,u]}class ve extends te{constructor(e){super(),ae(this,e,de,fe,le,{})}}export{ve as component};