import{S as G,i as J,s as K,C as L,L as C,k as Y,l as F,m as H,h as m,O as S,n as x,b as _,G as re,D as X,E as z,F as Q,Q as Z,g as p,d as k,J as I,M as D,a1 as W,e as ee,K as M,Y as se,P as A,N as P,Z as ue,v as fe,f as ce,q as R,a as N,y as $,r as O,c as B,z as y,A as T,B as w,I as ie,o as de,a6 as me,u as j}from"../chunks/index.22194218.js";import{T as be}from"../chunks/store.d8b6d069.js";import{t as q,b as oe,c as _e}from"../chunks/App.17943c99.js";function ge(o){let e,t,l,s,n;const a=o[11].default,u=L(a,o,o[10],null);let d=[o[4],{class:l=q("w-full text-left text-sm",o[3][o[2]],o[5].class)}],i={};for(let r=0;r<d.length;r+=1)i=C(i,d[r]);return{c(){e=Y("div"),t=Y("table"),u&&u.c(),this.h()},l(r){e=F(r,"DIV",{class:!0});var f=H(e);t=F(f,"TABLE",{class:!0});var c=H(t);u&&u.l(c),c.forEach(m),f.forEach(m),this.h()},h(){S(t,i),x(e,"class",s=oe(o[0],o[1]&&"shadow-md sm:rounded-lg"))},m(r,f){_(r,e,f),re(e,t),u&&u.m(t,null),n=!0},p(r,[f]){u&&u.p&&(!n||f&1024)&&X(u,a,r,r[10],n?Q(a,r[10],f,null):z(r[10]),null),S(t,i=Z(d,[f&16&&r[4],(!n||f&36&&l!==(l=q("w-full text-left text-sm",r[3][r[2]],r[5].class)))&&{class:l}])),(!n||f&3&&s!==(s=oe(r[0],r[1]&&"shadow-md sm:rounded-lg")))&&x(e,"class",s)},i(r){n||(p(u,r),n=!0)},o(r){k(u,r),n=!1},d(r){r&&m(e),u&&u.d(r)}}}function he(o,e,t){const l=["divClass","striped","hoverable","noborder","shadow","color","customeColor"];let s=I(e,l),{$$slots:n={},$$scope:a}=e,{divClass:u="relative overflow-x-auto"}=e,{striped:d=!1}=e,{hoverable:i=!1}=e,{noborder:r=!1}=e,{shadow:f=!1}=e,{color:c="default"}=e,{customeColor:b=""}=e;const v={default:"text-gray-500 dark:text-gray-400",blue:"text-blue-100 dark:text-blue-100",green:"text-green-100 dark:text-green-100",red:"text-red-100 dark:text-red-100",yellow:"text-yellow-100 dark:text-yellow-100",purple:"text-purple-100 dark:text-purple-100",indigo:"text-indigo-100 dark:text-indigo-100",pink:"text-pink-100 dark:text-pink-100",custom:b};return o.$$set=h=>{t(5,e=C(C({},e),D(h))),t(4,s=I(e,l)),"divClass"in h&&t(0,u=h.divClass),"striped"in h&&t(6,d=h.striped),"hoverable"in h&&t(7,i=h.hoverable),"noborder"in h&&t(8,r=h.noborder),"shadow"in h&&t(1,f=h.shadow),"color"in h&&t(2,c=h.color),"customeColor"in h&&t(9,b=h.customeColor),"$$scope"in h&&t(10,a=h.$$scope)},o.$$.update=()=>{o.$$.dirty&64&&W("striped",d),o.$$.dirty&128&&W("hoverable",i),o.$$.dirty&256&&W("noborder",r),o.$$.dirty&4&&W("color",c)},e=D(e),[u,f,c,v,s,e,d,i,r,b,a,n]}class pe extends G{constructor(e){super(),J(this,e,he,ge,K,{divClass:0,striped:6,hoverable:7,noborder:8,shadow:1,color:2,customeColor:9})}}function ke(o){let e,t;const l=o[2].default,s=L(l,o,o[1],null);return{c(){e=Y("tbody"),s&&s.c(),this.h()},l(n){e=F(n,"TBODY",{class:!0});var a=H(e);s&&s.l(a),a.forEach(m),this.h()},h(){x(e,"class",o[0])},m(n,a){_(n,e,a),s&&s.m(e,null),t=!0},p(n,[a]){s&&s.p&&(!t||a&2)&&X(s,l,n,n[1],t?Q(l,n[1],a,null):z(n[1]),null),(!t||a&1)&&x(e,"class",n[0])},i(n){t||(p(s,n),t=!0)},o(n){k(s,n),t=!1},d(n){n&&m(e),s&&s.d(n)}}}function ve(o,e,t){let{$$slots:l={},$$scope:s}=e,{tableBodyClass:n=void 0}=e;return o.$$set=a=>{"tableBodyClass"in a&&t(0,n=a.tableBodyClass),"$$scope"in a&&t(1,s=a.$$scope)},[n,s,l]}class Ce extends G{constructor(e){super(),J(this,e,ve,ke,K,{tableBodyClass:0})}}function te(o){let e,t,l,s,n;const a=o[6].default,u=L(a,o,o[5],null);let d=[o[2],{class:o[0]},{role:t=o[1].onclick?"button":void 0}],i={};for(let r=0;r<d.length;r+=1)i=C(i,d[r]);return{c(){e=Y(o[1].onclick?"button":"td"),u&&u.c(),this.h()},l(r){e=F(r,((o[1].onclick?"button":"td")||"null").toUpperCase(),{class:!0,role:!0});var f=H(e);u&&u.l(f),f.forEach(m),this.h()},h(){se(o[1].onclick?"button":"td")(e,i)},m(r,f){_(r,e,f),u&&u.m(e,null),l=!0,s||(n=A(e,"click",o[7]),s=!0)},p(r,f){u&&u.p&&(!l||f&32)&&X(u,a,r,r[5],l?Q(a,r[5],f,null):z(r[5]),null),se(r[1].onclick?"button":"td")(e,i=Z(d,[f&4&&r[2],(!l||f&1)&&{class:r[0]},(!l||f&2&&t!==(t=r[1].onclick?"button":void 0))&&{role:t}]))},i(r){l||(p(u,r),l=!0)},o(r){k(u,r),l=!1},d(r){r&&m(e),u&&u.d(r),s=!1,n()}}}function $e(o){let e=o[1].onclick?"button":"td",t,l,s=(o[1].onclick?"button":"td")&&te(o);return{c(){s&&s.c(),t=ee()},l(n){s&&s.l(n),t=ee()},m(n,a){s&&s.m(n,a),_(n,t,a),l=!0},p(n,[a]){n[1].onclick,e?K(e,n[1].onclick?"button":"td")?(s.d(1),s=te(n),e=n[1].onclick?"button":"td",s.c(),s.m(t.parentNode,t)):s.p(n,a):(s=te(n),e=n[1].onclick?"button":"td",s.c(),s.m(t.parentNode,t))},i(n){l||(p(s),l=!0)},o(n){k(s),l=!1},d(n){n&&m(t),s&&s.d(n)}}}function ye(o,e,t){const l=["tdClass"];let s=I(e,l),{$$slots:n={},$$scope:a}=e,{tdClass:u="px-6 py-4 whitespace-nowrap font-medium "}=e,d="default";d=M("color");let i;function r(f){P.call(this,o,f)}return o.$$set=f=>{t(1,e=C(C({},e),D(f))),t(2,s=I(e,l)),"tdClass"in f&&t(3,u=f.tdClass),"$$scope"in f&&t(5,a=f.$$scope)},o.$$.update=()=>{t(0,i=q(u,d==="default"?"text-gray-900 dark:text-white":"text-blue-50 whitespace-nowrap dark:text-blue-100",e.class))},e=D(e),[i,e,s,u,d,a,n,r]}class U extends G{constructor(e){super(),J(this,e,ye,$e,K,{tdClass:3})}}function Te(o){let e,t,l,s;const n=o[4].default,a=L(n,o,o[3],null);let u=[o[1],{class:o[0]}],d={};for(let i=0;i<u.length;i+=1)d=C(d,u[i]);return{c(){e=Y("tr"),a&&a.c(),this.h()},l(i){e=F(i,"TR",{class:!0});var r=H(e);a&&a.l(r),r.forEach(m),this.h()},h(){S(e,d)},m(i,r){_(i,e,r),a&&a.m(e,null),t=!0,l||(s=[A(e,"click",o[5]),A(e,"contextmenu",o[6])],l=!0)},p(i,[r]){a&&a.p&&(!t||r&8)&&X(a,n,i,i[3],t?Q(n,i[3],r,null):z(i[3]),null),S(e,d=Z(u,[r&2&&i[1],(!t||r&1)&&{class:i[0]}]))},i(i){t||(p(a,i),t=!0)},o(i){k(a,i),t=!1},d(i){i&&m(e),a&&a.d(i),l=!1,ue(s)}}}function we(o,e,t){const l=["color"];let s=I(e,l),{$$slots:n={},$$scope:a}=e,{color:u=M("color")}=e;const d={default:"bg-white dark:bg-gray-800 dark:border-gray-700",blue:"bg-blue-500 border-blue-400",green:"bg-green-500 border-green-400",red:"bg-red-500 border-red-400",yellow:"bg-yellow-500 border-yellow-400",purple:"bg-purple-500 border-purple-400",custom:""},i={default:"hover:bg-gray-50 dark:hover:bg-gray-600",blue:"hover:bg-blue-400",green:"hover:bg-green-400",red:"hover:bg-red-400",yellow:"hover:bg-yellow-400",purple:"hover:bg-purple-400",custom:""},r={default:"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",blue:"odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",green:"odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",red:"odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",yellow:"odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",purple:"odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",custom:""};let f;function c(v){P.call(this,o,v)}function b(v){P.call(this,o,v)}return o.$$set=v=>{t(10,e=C(C({},e),D(v))),t(1,s=I(e,l)),"color"in v&&t(2,u=v.color),"$$scope"in v&&t(3,a=v.$$scope)},o.$$.update=()=>{t(0,f=q([!M("noborder")&&"border-b last:border-b-0",d[u],M("hoverable")&&i[u],M("striped")&&r[u],e.class]))},e=D(e),[f,s,u,a,n,c,b]}class Ee extends G{constructor(e){super(),J(this,e,we,Te,K,{color:2})}}function Ae(o){let e;const t=o[6].default,l=L(t,o,o[5],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,n){l&&l.m(s,n),e=!0},p(s,n){l&&l.p&&(!e||n&32)&&X(l,t,s,s[5],e?Q(t,s[5],n,null):z(s[5]),null)},i(s){e||(p(l,s),e=!0)},o(s){k(l,s),e=!1},d(s){l&&l.d(s)}}}function Pe(o){let e,t;const l=o[6].default,s=L(l,o,o[5],null);return{c(){e=Y("tr"),s&&s.c()},l(n){e=F(n,"TR",{});var a=H(e);s&&s.l(a),a.forEach(m)},m(n,a){_(n,e,a),s&&s.m(e,null),t=!0},p(n,a){s&&s.p&&(!t||a&32)&&X(s,l,n,n[5],t?Q(l,n[5],a,null):z(n[5]),null)},i(n){t||(p(s,n),t=!0)},o(n){k(s,n),t=!1},d(n){n&&m(e),s&&s.d(n)}}}function Ne(o){let e,t,l,s;const n=[Pe,Ae],a=[];function u(r,f){return r[0]?0:1}t=u(o),l=a[t]=n[t](o);let d=[o[2],{class:o[1]}],i={};for(let r=0;r<d.length;r+=1)i=C(i,d[r]);return{c(){e=Y("thead"),l.c(),this.h()},l(r){e=F(r,"THEAD",{class:!0});var f=H(e);l.l(f),f.forEach(m),this.h()},h(){S(e,i)},m(r,f){_(r,e,f),a[t].m(e,null),s=!0},p(r,[f]){let c=t;t=u(r),t===c?a[t].p(r,f):(fe(),k(a[c],1,1,()=>{a[c]=null}),ce(),l=a[t],l?l.p(r,f):(l=a[t]=n[t](r),l.c()),p(l,1),l.m(e,null)),S(e,i=Z(d,[f&4&&r[2],(!s||f&2)&&{class:r[1]}]))},i(r){s||(p(l),s=!0)},o(r){k(l),s=!1},d(r){r&&m(e),a[t].d()}}}function Be(o,e,t){let l;const s=["theadClass","defaultRow"];let n=I(e,s),{$$slots:a={},$$scope:u}=e,{theadClass:d="text-xs uppercase"}=e,{defaultRow:i=!0}=e,r;r=M("color");let f=M("noborder"),c=M("striped");const v={default:f||c?"":"bg-gray-50 dark:bg-gray-700",blue:"bg-blue-600",green:"bg-green-600",red:"bg-red-600",yellow:"bg-yellow-600",purple:"bg-purple-600",custom:""};let h=r==="default"?"text-gray-700 dark:text-gray-400":r==="custom"?"":"text-white  dark:text-white",g=c?"":r==="default"?"border-gray-700":r==="custom"?"":`border-${r}-400`;return o.$$set=E=>{t(13,e=C(C({},e),D(E))),t(2,n=I(e,s)),"theadClass"in E&&t(3,d=E.theadClass),"defaultRow"in E&&t(0,i=E.defaultRow),"$$scope"in E&&t(5,u=E.$$scope)},o.$$.update=()=>{t(1,l=q(d,h,c&&g,v[r],e.class))},e=D(e),[i,l,n,d,r,u,a]}class Re extends G{constructor(e){super(),J(this,e,Be,Ne,K,{theadClass:3,defaultRow:0})}}function Oe(o){let e,t,l,s,n;const a=o[4].default,u=L(a,o,o[3],null);let d=[o[1],{class:t=q(o[0],o[2].class)}],i={};for(let r=0;r<d.length;r+=1)i=C(i,d[r]);return{c(){e=Y("th"),u&&u.c(),this.h()},l(r){e=F(r,"TH",{class:!0});var f=H(e);u&&u.l(f),f.forEach(m),this.h()},h(){S(e,i)},m(r,f){_(r,e,f),u&&u.m(e,null),l=!0,s||(n=[A(e,"click",o[5]),A(e,"focus",o[6]),A(e,"keydown",o[7]),A(e,"keypress",o[8]),A(e,"keyup",o[9]),A(e,"mouseenter",o[10]),A(e,"mouseleave",o[11]),A(e,"mouseover",o[12])],s=!0)},p(r,[f]){u&&u.p&&(!l||f&8)&&X(u,a,r,r[3],l?Q(a,r[3],f,null):z(r[3]),null),S(e,i=Z(d,[f&2&&r[1],(!l||f&5&&t!==(t=q(r[0],r[2].class)))&&{class:t}]))},i(r){l||(p(u,r),l=!0)},o(r){k(u,r),l=!1},d(r){r&&m(e),u&&u.d(r),s=!1,ue(n)}}}function Ie(o,e,t){const l=["padding"];let s=I(e,l),{$$slots:n={},$$scope:a}=e,{padding:u="px-6 py-3"}=e;function d(g){P.call(this,o,g)}function i(g){P.call(this,o,g)}function r(g){P.call(this,o,g)}function f(g){P.call(this,o,g)}function c(g){P.call(this,o,g)}function b(g){P.call(this,o,g)}function v(g){P.call(this,o,g)}function h(g){P.call(this,o,g)}return o.$$set=g=>{t(2,e=C(C({},e),D(g))),t(1,s=I(e,l)),"padding"in g&&t(0,u=g.padding),"$$scope"in g&&t(3,a=g.$$scope)},e=D(e),[u,s,e,a,n,d,i,r,f,c,b,v,h]}class V extends G{constructor(e){super(),J(this,e,Ie,Oe,K,{padding:0})}}function ne(o,e,t){const l=o.slice();return l[2]=e[t],l}function De(o){let e;return{c(){e=R("FACTION")},l(t){e=O(t,"FACTION")},m(t,l){_(t,e,l)},d(t){t&&m(e)}}}function Ye(o){let e;return{c(){e=R("TYPE")},l(t){e=O(t,"TYPE")},m(t,l){_(t,e,l)},d(t){t&&m(e)}}}function Fe(o){let e;return{c(){e=R("PAYMENT")},l(t){e=O(t,"PAYMENT")},m(t,l){_(t,e,l)},d(t){t&&m(e)}}}function He(o){let e;return{c(){e=R("EXPIRATION")},l(t){e=O(t,"EXPIRATION")},m(t,l){_(t,e,l)},d(t){t&&m(e)}}}function Me(o){let e;return{c(){e=R("ACCEPTED")},l(t){e=O(t,"ACCEPTED")},m(t,l){_(t,e,l)},d(t){t&&m(e)}}}function Se(o){let e,t,l,s,n,a,u,d,i,r;return e=new V({props:{$$slots:{default:[De]},$$scope:{ctx:o}}}),l=new V({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),n=new V({props:{$$slots:{default:[Fe]},$$scope:{ctx:o}}}),u=new V({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),i=new V({props:{$$slots:{default:[Me]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment),t=N(),$(l.$$.fragment),s=N(),$(n.$$.fragment),a=N(),$(u.$$.fragment),d=N(),$(i.$$.fragment)},l(f){y(e.$$.fragment,f),t=B(f),y(l.$$.fragment,f),s=B(f),y(n.$$.fragment,f),a=B(f),y(u.$$.fragment,f),d=B(f),y(i.$$.fragment,f)},m(f,c){T(e,f,c),_(f,t,c),T(l,f,c),_(f,s,c),T(n,f,c),_(f,a,c),T(u,f,c),_(f,d,c),T(i,f,c),r=!0},p(f,c){const b={};c&32&&(b.$$scope={dirty:c,ctx:f}),e.$set(b);const v={};c&32&&(v.$$scope={dirty:c,ctx:f}),l.$set(v);const h={};c&32&&(h.$$scope={dirty:c,ctx:f}),n.$set(h);const g={};c&32&&(g.$$scope={dirty:c,ctx:f}),u.$set(g);const E={};c&32&&(E.$$scope={dirty:c,ctx:f}),i.$set(E)},i(f){r||(p(e.$$.fragment,f),p(l.$$.fragment,f),p(n.$$.fragment,f),p(u.$$.fragment,f),p(i.$$.fragment,f),r=!0)},o(f){k(e.$$.fragment,f),k(l.$$.fragment,f),k(n.$$.fragment,f),k(u.$$.fragment,f),k(i.$$.fragment,f),r=!1},d(f){w(e,f),f&&m(t),w(l,f),f&&m(s),w(n,f),f&&m(a),w(u,f),f&&m(d),w(i,f)}}}function Ke(o){let e=o[2].faction+"",t;return{c(){t=R(e)},l(l){t=O(l,e)},m(l,s){_(l,t,s)},p(l,s){s&1&&e!==(e=l[2].faction+"")&&j(t,e)},d(l){l&&m(t)}}}function qe(o){let e=o[2].type+"",t;return{c(){t=R(e)},l(l){t=O(l,e)},m(l,s){_(l,t,s)},p(l,s){s&1&&e!==(e=l[2].type+"")&&j(t,e)},d(l){l&&m(t)}}}function Ge(o){let e=o[2].terms.payment.onAccepted+o[2].terms.payment.onFulfilled+"",t;return{c(){t=R(e)},l(l){t=O(l,e)},m(l,s){_(l,t,s)},p(l,s){s&1&&e!==(e=l[2].terms.payment.onAccepted+l[2].terms.payment.onFulfilled+"")&&j(t,e)},d(l){l&&m(t)}}}function Je(o){let e=o[2].expiration+"",t;return{c(){t=R(e)},l(l){t=O(l,e)},m(l,s){_(l,t,s)},p(l,s){s&1&&e!==(e=l[2].expiration+"")&&j(t,e)},d(l){l&&m(t)}}}function Le(o){let e=o[2].accepted+"",t;return{c(){t=R(e)},l(l){t=O(l,e)},m(l,s){_(l,t,s)},p(l,s){s&1&&e!==(e=l[2].accepted+"")&&j(t,e)},d(l){l&&m(t)}}}function Xe(o){let e,t,l,s,n,a,u,d,i,r,f;return e=new U({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}}),l=new U({props:{$$slots:{default:[qe]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[Ge]},$$scope:{ctx:o}}}),u=new U({props:{$$slots:{default:[Je]},$$scope:{ctx:o}}}),i=new U({props:{$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment),t=N(),$(l.$$.fragment),s=N(),$(n.$$.fragment),a=N(),$(u.$$.fragment),d=N(),$(i.$$.fragment),r=N()},l(c){y(e.$$.fragment,c),t=B(c),y(l.$$.fragment,c),s=B(c),y(n.$$.fragment,c),a=B(c),y(u.$$.fragment,c),d=B(c),y(i.$$.fragment,c),r=B(c)},m(c,b){T(e,c,b),_(c,t,b),T(l,c,b),_(c,s,b),T(n,c,b),_(c,a,b),T(u,c,b),_(c,d,b),T(i,c,b),_(c,r,b),f=!0},p(c,b){const v={};b&33&&(v.$$scope={dirty:b,ctx:c}),e.$set(v);const h={};b&33&&(h.$$scope={dirty:b,ctx:c}),l.$set(h);const g={};b&33&&(g.$$scope={dirty:b,ctx:c}),n.$set(g);const E={};b&33&&(E.$$scope={dirty:b,ctx:c}),u.$set(E);const le={};b&33&&(le.$$scope={dirty:b,ctx:c}),i.$set(le)},i(c){f||(p(e.$$.fragment,c),p(l.$$.fragment,c),p(n.$$.fragment,c),p(u.$$.fragment,c),p(i.$$.fragment,c),f=!0)},o(c){k(e.$$.fragment,c),k(l.$$.fragment,c),k(n.$$.fragment,c),k(u.$$.fragment,c),k(i.$$.fragment,c),f=!1},d(c){w(e,c),c&&m(t),w(l,c),c&&m(s),w(n,c),c&&m(a),w(u,c),c&&m(d),w(i,c),c&&m(r)}}}function ae(o){let e,t;return e=new Ee({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,s){T(e,l,s),t=!0},p(l,s){const n={};s&33&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){w(e,l)}}}function ze(o){let e,t,l=o[0],s=[];for(let a=0;a<l.length;a+=1)s[a]=ae(ne(o,l,a));const n=a=>k(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ee()},l(a){for(let u=0;u<s.length;u+=1)s[u].l(a);e=ee()},m(a,u){for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(a,u);_(a,e,u),t=!0},p(a,u){if(u&1){l=a[0];let d;for(d=0;d<l.length;d+=1){const i=ne(a,l,d);s[d]?(s[d].p(i,u),p(s[d],1)):(s[d]=ae(i),s[d].c(),p(s[d],1),s[d].m(e.parentNode,e))}for(fe(),d=l.length;d<s.length;d+=1)n(d);ce()}},i(a){if(!t){for(let u=0;u<l.length;u+=1)p(s[u]);t=!0}},o(a){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)k(s[u]);t=!1},d(a){me(s,a),a&&m(e)}}}function Qe(o){let e,t,l,s;return e=new Re({props:{$$slots:{default:[Se]},$$scope:{ctx:o}}}),l=new Ce({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment),t=N(),$(l.$$.fragment)},l(n){y(e.$$.fragment,n),t=B(n),y(l.$$.fragment,n)},m(n,a){T(e,n,a),_(n,t,a),T(l,n,a),s=!0},p(n,a){const u={};a&32&&(u.$$scope={dirty:a,ctx:n}),e.$set(u);const d={};a&33&&(d.$$scope={dirty:a,ctx:n}),l.$set(d)},i(n){s||(p(e.$$.fragment,n),p(l.$$.fragment,n),s=!0)},o(n){k(e.$$.fragment,n),k(l.$$.fragment,n),s=!1},d(n){w(e,n),n&&m(t),w(l,n)}}}function Ue(o){let e,t,l,s,n;return s=new pe({props:{$$slots:{default:[Qe]},$$scope:{ctx:o}}}),{c(){e=Y("h1"),t=R("CONTRACTS"),l=N(),$(s.$$.fragment)},l(a){e=F(a,"H1",{});var u=H(e);t=O(u,"CONTRACTS"),u.forEach(m),l=B(a),y(s.$$.fragment,a)},m(a,u){_(a,e,u),re(e,t),_(a,l,u),T(s,a,u),n=!0},p(a,[u]){const d={};u&33&&(d.$$scope={dirty:u,ctx:a}),s.$set(d)},i(a){n||(p(s.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),n=!1},d(a){a&&m(e),a&&m(l),w(s,a)}}}function Ve(o,e,t){let l;ie(o,be,n=>t(1,l=n));let s=[];return de(async()=>{_e(l).then(n=>{console.log(n),t(0,s=n)})}),[s]}class xe extends G{constructor(e){super(),J(this,e,Ve,Ue,K,{})}}export{xe as component};