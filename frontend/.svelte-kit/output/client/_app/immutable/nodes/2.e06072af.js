import{S as re,i as ce,s as ie,C as K,J as F,k as y,q as B,a as A,K as de,l as M,m as z,r as L,h as _,c as T,n as $,L as J,G as b,b as E,M as ue,D as Q,E as W,F as X,N as ge,g as I,d as C,O as Y,P as Z,Q as V,R as U,y as G,z as O,T as he,p as pe,A as P,f as fe,B as R,o as $e,v as me,U as ve,V as be,u as ee}from"../chunks/index.80b7b41c.js";import{C as ke,F as we,T as Ee,A as Ie}from"../chunks/store.ac032f32.js";import{H as te,S as ze,g as Ce,G as _e,C as Se}from"../chunks/navigation.f00c07a2.js";import{t as se,G as Ae,R as Te}from"../chunks/App.cb92c32c.js";const ye=n=>({}),le=n=>({}),Me=n=>({}),ae=n=>({});function Ne(n){let e,s,t;return{c(){e=V("svg"),s=V("path"),this.h()},l(l){e=U(l,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var r=z(e);s=U(r,"path",{d:!0,"fill-rule":!0,"clip-rule":!0}),z(s).forEach(_),r.forEach(_),this.h()},h(){$(s,"d",`M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z`),$(s,"fill-rule","evenodd"),$(s,"clip-rule","evenodd"),$(e,"class",t=n[2][n[1]]),$(e,"fill","currentColor"),$(e,"viewBox","0 0 20 20"),$(e,"xmlns","http://www.w3.org/2000/svg")},m(l,r){E(l,e,r),b(e,s)},p(l,r){r&2&&t!==(t=l[2][l[1]])&&$(e,"class",t)},d(l){l&&_(e)}}}function Be(n){let e,s,t;return{c(){e=V("svg"),s=V("path"),this.h()},l(l){e=U(l,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var r=z(e);s=U(r,"path",{d:!0}),z(s).forEach(_),r.forEach(_),this.h()},h(){$(s,"d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"),$(e,"class",t=n[2][n[1]]),$(e,"fill","currentColor"),$(e,"viewBox","0 0 20 20"),$(e,"xmlns","http://www.w3.org/2000/svg")},m(l,r){E(l,e,r),b(e,s)},p(l,r){r&2&&t!==(t=l[2][l[1]])&&$(e,"class",t)},d(l){l&&_(e)}}}function Le(n){let e,s,t,l,r,a,f,o,c,h,i;const p=n[7].lightIcon,v=K(p,n,n[6],ae),m=v||Ne(n),N=n[7].darkIcon,S=K(N,n,n[6],le),w=S||Be(n);let x=[{"aria-label":"Dark mode"},{type:"button"},n[4],{class:o=se(n[0],n[5].class)}],j={};for(let u=0;u<x.length;u+=1)j=F(j,x[u]);return{c(){e=y("script"),s=B(`localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');`),t=A(),l=y("button"),r=y("span"),m&&m.c(),a=A(),f=y("span"),w&&w.c(),this.h()},l(u){const k=de("svelte-7ajg2y",document.head);e=M(k,"SCRIPT",{});var d=z(e);s=L(d,`localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? window.document.documentElement.classList.add('dark')
      : window.document.documentElement.classList.remove('dark');`),d.forEach(_),k.forEach(_),t=T(u),l=M(u,"BUTTON",{"aria-label":!0,type:!0,class:!0});var g=z(l);r=M(g,"SPAN",{class:!0});var D=z(r);m&&m.l(D),D.forEach(_),a=T(g),f=M(g,"SPAN",{class:!0});var H=z(f);w&&w.l(H),H.forEach(_),g.forEach(_),this.h()},h(){$(r,"class","hidden dark:block"),$(f,"class","block dark:hidden"),J(l,j)},m(u,k){b(document.head,e),b(e,s),E(u,t,k),E(u,l,k),b(l,r),m&&m.m(r,null),b(l,a),b(l,f),w&&w.m(f,null),l.autofocus&&l.focus(),c=!0,h||(i=ue(l,"click",n[3]),h=!0)},p(u,[k]){v?v.p&&(!c||k&64)&&Q(v,p,u,u[6],c?X(p,u[6],k,Me):W(u[6]),ae):m&&m.p&&(!c||k&2)&&m.p(u,c?k:-1),S?S.p&&(!c||k&64)&&Q(S,N,u,u[6],c?X(N,u[6],k,ye):W(u[6]),le):w&&w.p&&(!c||k&2)&&w.p(u,c?k:-1),J(l,j=ge(x,[{"aria-label":"Dark mode"},{type:"button"},k&16&&u[4],(!c||k&33&&o!==(o=se(u[0],u[5].class)))&&{class:o}]))},i(u){c||(I(m,u),I(w,u),c=!0)},o(u){C(m,u),C(w,u),c=!1},d(u){_(e),u&&_(t),u&&_(l),m&&m.d(u),w&&w.d(u),h=!1,i()}}}function De(n,e,s){const t=["btnClass","size"];let l=Y(e,t),{$$slots:r={},$$scope:a}=e,{btnClass:f="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"}=e,{size:o="md"}=e;const c={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},h=()=>{const i=window.document.documentElement.classList.toggle("dark");localStorage.setItem("color-theme",i?"dark":"light")};return n.$$set=i=>{s(5,e=F(F({},e),Z(i))),s(4,l=Y(e,t)),"btnClass"in i&&s(0,f=i.btnClass),"size"in i&&s(1,o=i.size),"$$scope"in i&&s(6,a=i.$$scope)},e=Z(e),[f,o,c,h,l,e,a,r]}class Ge extends re{constructor(e){super(),ce(this,e,De,Le,ie,{btnClass:0,size:1})}}const Oe=""+new URL("../assets/logo-universal.157a874a.png",import.meta.url).href;function ne(n,e,s){const t=n.slice();return t[3]=e[s],t}function Pe(n){let e;return{c(){e=B("Space Traders")},l(s){e=L(s,"Space Traders")},m(s,t){E(s,e,t)},d(s){s&&_(e)}}}function Re(n){let e,s;return e=new ze({props:{gradient:!0,$$slots:{default:[Pe]},$$scope:{ctx:n}}}),{c(){G(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,l){P(e,t,l),s=!0},p(t,l){const r={};l&64&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function je(n){let e;return{c(){e=B("Login")},l(s){e=L(s,"Login")},m(s,t){E(s,e,t)},d(s){s&&_(e)}}}function xe(n){let e,s,t,l,r;return l=new _e({props:{href:"/newAccount",color:"greenToBlue",class:"w-72",$$slots:{default:[Ve]},$$scope:{ctx:n}}}),{c(){e=y("p"),s=B("No Accounts available..."),t=A(),G(l.$$.fragment)},l(a){e=M(a,"P",{});var f=z(e);s=L(f,"No Accounts available..."),f.forEach(_),t=T(a),O(l.$$.fragment,a)},m(a,f){E(a,e,f),b(e,s),E(a,t,f),P(l,a,f),r=!0},p(a,f){const o={};f&64&&(o.$$scope={dirty:f,ctx:a}),l.$set(o)},i(a){r||(I(l.$$.fragment,a),r=!0)},o(a){C(l.$$.fragment,a),r=!1},d(a){a&&_(e),a&&_(t),R(l,a)}}}function He(n){let e,s,t,l,r=n[0],a=[];for(let o=0;o<r.length;o+=1)a[o]=oe(ne(n,r,o));const f=o=>C(a[o],1,1,()=>{a[o]=null});return t=new _e({props:{href:"/newAccount",outline:!0,color:"greenToBlue",class:"w-72",$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){e=y("div");for(let o=0;o<a.length;o+=1)a[o].c();s=A(),G(t.$$.fragment),this.h()},l(o){e=M(o,"DIV",{class:!0});var c=z(e);for(let h=0;h<a.length;h+=1)a[h].l(c);c.forEach(_),s=T(o),O(t.$$.fragment,o),this.h()},h(){$(e,"class","flex flex-row gap-4 mb-32")},m(o,c){E(o,e,c);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(e,null);E(o,s,c),P(t,o,c),l=!0},p(o,c){if(c&3){r=o[0];let i;for(i=0;i<r.length;i+=1){const p=ne(o,r,i);a[i]?(a[i].p(p,c),I(a[i],1)):(a[i]=oe(p),a[i].c(),I(a[i],1),a[i].m(e,null))}for(me(),i=r.length;i<a.length;i+=1)f(i);fe()}const h={};c&64&&(h.$$scope={dirty:c,ctx:o}),t.$set(h)},i(o){if(!l){for(let c=0;c<r.length;c+=1)I(a[c]);I(t.$$.fragment,o),l=!0}},o(o){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)C(a[c]);C(t.$$.fragment,o),l=!1},d(o){o&&_(e),ve(a,o),o&&_(s),R(t,o)}}}function Ve(n){let e;return{c(){e=B("Create One!")},l(s){e=L(s,"Create One!")},m(s,t){E(s,e,t)},d(s){s&&_(e)}}}function Ue(n){let e,s,t,l,r=n[3].callsign+"",a,f,o,c=n[3].faction+"",h,i,p;return s=new Ie({props:{size:"lg",class:"mb-8"}}),{c(){e=y("div"),G(s.$$.fragment),t=A(),l=y("h1"),a=B(r),f=A(),o=y("h5"),h=B(c),i=A(),this.h()},l(v){e=M(v,"DIV",{class:!0});var m=z(e);O(s.$$.fragment,m),t=T(m),l=M(m,"H1",{class:!0});var N=z(l);a=L(N,r),N.forEach(_),f=T(m),o=M(m,"H5",{class:!0});var S=z(o);h=L(S,c),S.forEach(_),m.forEach(_),i=T(v),this.h()},h(){$(l,"class","mb-1 text-xl font-medium text-white"),$(o,"class","text-sm text-gray-400"),$(e,"class","flex flex-col items-center")},m(v,m){E(v,e,m),P(s,e,null),b(e,t),b(e,l),b(l,a),b(e,f),b(e,o),b(o,h),E(v,i,m),p=!0},p(v,m){(!p||m&1)&&r!==(r=v[3].callsign+"")&&ee(a,r),(!p||m&1)&&c!==(c=v[3].faction+"")&&ee(h,c)},i(v){p||(I(s.$$.fragment,v),p=!0)},o(v){C(s.$$.fragment,v),p=!1},d(v){v&&_(e),R(s),v&&_(i)}}}function oe(n){let e,s;return e=new Se({props:{href:"#",class:"w-52",color:"primary",$$slots:{default:[Ue]},$$scope:{ctx:n}}}),e.$on("click",function(){be(n[1](n[3]))&&n[1](n[3]).apply(this,arguments)}),{c(){G(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,l){P(e,t,l),s=!0},p(t,l){n=t;const r={};l&65&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function qe(n){let e;return{c(){e=B("Create New Account")},l(s){e=L(s,"Create New Account")},m(s,t){E(s,e,t)},d(s){s&&_(e)}}}function Fe(n){let e,s,t,l,r,a,f,o,c,h,i,p,v,m,N,S,w,x;e=new Ge({props:{initialTheme:"dark",style:"visibility:hidden"}}),f=new te({props:{tag:"h1",class:"mb-4",customSize:"text-3xl font-extrabold  md:text-5xl lg:text-6xl",$$slots:{default:[Re]},$$scope:{ctx:n}}}),c=new te({props:{tag:"h2",customSize:"text-4xl font-extrabold mb-14",$$slots:{default:[je]},$$scope:{ctx:n}}});const j=[He,xe],u=[];function k(d,g){return d[0]!=null&&d[0].length>0?0:1}return i=k(n),p=u[i]=j[i](n),{c(){G(e.$$.fragment),s=A(),t=y("div"),l=y("img"),a=A(),G(f.$$.fragment),o=A(),G(c.$$.fragment),h=A(),p.c(),v=A(),m=y("button"),N=B("RESET"),this.h()},l(d){O(e.$$.fragment,d),s=T(d),t=M(d,"DIV",{class:!0});var g=z(t);l=M(g,"IMG",{alt:!0,id:!0,src:!0,class:!0}),a=T(g),O(f.$$.fragment,g),o=T(g),O(c.$$.fragment,g),h=T(g),p.l(g),v=T(g),m=M(g,"BUTTON",{class:!0,style:!0});var D=z(m);N=L(D,"RESET"),D.forEach(_),g.forEach(_),this.h()},h(){$(l,"alt","Wails logo"),$(l,"id","logo"),he(l.src,r=Oe)||$(l,"src",r),$(l,"class","my-4 svelte-ojxjv1"),$(m,"class","reset-button svelte-ojxjv1"),pe(m,"visibility","hidden"),$(t,"class","container mx-auto flex flex-col items-center")},m(d,g){P(e,d,g),E(d,s,g),E(d,t,g),b(t,l),b(t,a),P(f,t,null),b(t,o),P(c,t,null),b(t,h),u[i].m(t,null),b(t,v),b(t,m),b(m,N),S=!0,w||(x=ue(m,"click",n[2]),w=!0)},p(d,[g]){const D={};g&64&&(D.$$scope={dirty:g,ctx:d}),f.$set(D);const H={};g&64&&(H.$$scope={dirty:g,ctx:d}),c.$set(H);let q=i;i=k(d),i===q?u[i].p(d,g):(me(),C(u[q],1,1,()=>{u[q]=null}),fe(),p=u[i],p?p.p(d,g):(p=u[i]=j[i](d),p.c()),I(p,1),p.m(t,v))},i(d){S||(I(e.$$.fragment,d),I(f.$$.fragment,d),I(c.$$.fragment,d),I(p),S=!0)},o(d){C(e.$$.fragment,d),C(f.$$.fragment,d),C(c.$$.fragment,d),C(p),S=!1},d(d){R(e,d),d&&_(s),d&&_(t),R(f),R(c),u[i].d(),w=!1,x()}}}function Ke(n,e,s){let t=[];$e(async()=>{Ae().then(a=>s(0,t=a))});function l(a){ke.update(f=>a.callsign),we.update(f=>a.faction),Ee.update(f=>a.token),Ce("/home",!0)}function r(){Te(),s(0,t=[])}return[t,l,r]}class Ye extends re{constructor(e){super(),ce(this,e,Ke,Fe,ie,{})}}export{Ye as component};