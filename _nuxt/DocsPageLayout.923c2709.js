import O from"./DocsAside.1726a013.js";import R from"./ProseCodeInline.2c7b8ac1.js";import U from"./Alert.a2067c7b.js";import W from"./DocsPageBottom.ab52eeeb.js";import Y from"./DocsPrevNext.9ab80ef9.js";import{d as q,W as J,aa as Q,s as X,K as m,r as V,m as Z,o as ee,ad as oe,b as u,Y as A,w as h,L as t,c as g,g as r,f as y,e as p,$ as te,G as x,t as ae,F as ne,n as k,a9 as se,ae as ce,p as le,i as re,k as _e}from"./entry.182c5263.js";import ie from"./DocsToc.43ec6743.js";import"./slot.7472b192.js";import"./node.676c5e99.js";import"./ProseA.9f9ed10f.js";import"./EditOnLink.vue.1778b516.js";import"./DocsTocLinks.a89c5a8b.js";const ue=d=>(le("data-v-4b271ada"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=q({__name:"DocsPageLayout",setup(d){const{page:n}=J(),{config:f,tree:b}=Q(),L=X(),F=(e,o=!0)=>{var a;return typeof((a=n.value)==null?void 0:a[e])<"u"?n.value[e]:o},T=m(()=>{var e,o,a;return!n.value||((a=(o=(e=n.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:a.length)>0}),P=m(()=>{var e,o,a,c,l;return((e=n.value)==null?void 0:e.toc)!==!1&&((l=(c=(a=(o=n.value)==null?void 0:o.body)==null?void 0:a.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),S=m(()=>{var e,o,a,c,l;return((e=n.value)==null?void 0:e.aside)!==!1&&(((o=b.value)==null?void 0:o.length)>1||((l=(c=(a=b.value)==null?void 0:a[0])==null?void 0:c.children)==null?void 0:l.length))}),H=m(()=>F("bottom",!0)),_=V(!1),s=V(null),v=()=>L.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=s.value)==null?void 0:e.scrollTop)||0}});function C(){s.value&&(s.value.scrollHeight===0&&setTimeout(C,0),s.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{s.value&&(i.value.scrollTop=s.value.scrollTop)}),(e,o)=>{var D,w,B,N,$,I;const a=O,c=R,l=U,M=W,j=Y,z=se,E=ie,G=ce;return u(),A(G,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(N=(B=t(f))==null?void 0:B.main)==null?void 0:N.padded,class:k(["docs-page-content",{fluid:(I=($=t(f))==null?void 0:$.main)==null?void 0:I.fluid,"has-toc":t(P),"has-aside":t(S)}])},{default:h(()=>[t(S)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:s,class:"aside-nav"},[r(a,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(T)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ae(t(n)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(T)&&t(n)&&t(H)?(u(),g(ne,{key:2},[r(M),r(j)],64)):y("",!0)]),t(P)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=K=>_.value=!t(_))},[fe,r(z,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(E,{onMove:o[1]||(o[1]=K=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Be=_e(ve,[["__scopeId","data-v-4b271ada"]]);export{Be as default};
