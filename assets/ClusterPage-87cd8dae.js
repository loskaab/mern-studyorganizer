import{n as F,s as f,t as w,P as v,j as e,u as G,r as $,q as T,w as _,Q as E,x as ee,d as te,y as R,z as se,A as re,C as oe,M as O,D as z,E as ne,H as ce,I as le,J as ae,K as H,N as ie,O as de,R as ue,S as pe,F as he}from"./index-aaba122c.js";import{v as me,u as fe}from"./index.esm-e6680d17.js";import{T as be}from"./index.esm-88688077.js";import{o as xe,F as ge,L as I,I as M,C as $e,B as je,g as Ce,a as ye,A as ve}from"./ClusterAddForm-c0a6b461.js";import{t as ke,c as Te}from"./clusterSchema-49603d33.js";const{colors:a,shadows:we,indents:Se}=w,P=F`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 30fr 25fr 2fr 1fr 1fr 1fr 4fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${a.borderLight};
`,Le=f.li`
  ${P}
  counter-reset: subsection;
  line-height: 2;

  & h2 {
    justify-self: center;
    grid-area: title;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;

    &::before {
      counter-increment: section;
      content: 'Group ' counter(section) ' - ';
      text-transform: capitalize;
    }
  }
`,Ee=f.li`
  ${P}

  background-color: ${({$active:t})=>t&&a.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${a.border};
    box-shadow: ${we.back};
    background-color: ${a.white};
    border-radius: ${Se.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,K=F`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${a.hovered};
  }
`,Fe=f.button`
  ${K}

  border: none;
  background-color: transparent;
  color: ${a.black};
  font-weight: 500;
`,Ge=f.a`
  ${K}

  color: ${a.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${a.black};
  }
`,N=F`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${me}
  }
`,Ae=f.label`
  ${N}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?a.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?a.yellow:a.border};
  }
  &:hover svg {
    stroke: ${a.placeholder};
  }
`,Be=f.label`
  ${N}
  opacity: ${({$hovered:t})=>t?1:0};

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${a.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?a.border:"transparent"};
  }
  &:hover svg {
    border-color: ${a.placeholder};
    color: ${({$hovered:t})=>t?a.placeholder:"transparent"};
  }
`,A=F`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  &,
  & svg {
    transition: color 250ms;
    color: ${a.border};
  }
  &:hover,
  &:hover svg {
    color: ${a.placeholder};
  }
`,Ie=f.span`
  ${A}

  justify-self: right;
  font-size: 14px;
`,_e=f.button`
  ${A}

  font-size: 14px;
`,ze=f.button`
  ${A}

  opacity: ${({$hovered:t})=>t?1:0};
`,De=f.button`
  ${A}

  opacity: 0;
`,V=({group:t})=>e.jsx(Le,{children:e.jsx("h2",{children:t})});V.propTypes={group:v.string};const W=({el:t,setIsModal:u})=>{var n,m;const{_id:i,cluster:c,title:d,group:s}=t,h=G(),[b,k]=$.useState({value:s,label:s}),{clusterGroups:C}=T(),{register:p,watch:j,handleSubmit:r,formState:{errors:o}}=fe({mode:"onBlur",resolver:xe(ke),defaultValues:{cluster:c,title:d}}),x=async l=>{const S=Ce(l.cluster);h(_({_id:i,...l,group:b.value,gdriveId:S})),u(!1)},g=C.map(l=>({value:l.clusterGroup,label:l.clusterGroup})).sort((l,S)=>l.value.localeCompare(S.value)),y=l=>{j("title")?(h(ee({clusterGroup:l})),k({value:l,label:l})):E.error("Title is required")};return e.jsxs(ge,{onSubmit:r(x),children:[e.jsxs(I,{children:["Cluster ",e.jsxs("span",{children:[" ",(n=o.cluster)==null?void 0:n.message]}),e.jsx(M,{...p("cluster"),onFocus:l=>l.target.select()})]}),e.jsxs(I,{children:["Title ",e.jsxs("span",{children:[" ",(m=o.title)==null?void 0:m.message]}),e.jsx(M,{...p("title"),onFocus:l=>l.target.select()})]}),e.jsxs(I,{children:["Group",e.jsx($e,{value:b,options:g,onChange:l=>k(l||""),onCreateOption:y,isClearable:b})]}),e.jsx(je,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};W.propTypes={el:v.object,setIsModal:v.func.isRequired};const J=({el:t,sortByDate:u,setSortByDate:i})=>{const c=G(),d=te(),{activeCluster:s,clusterTrash:h}=T(),{allElements:b}=R(),[k,C]=$.useState(!1),{_id:p,cluster:j,title:r,favorite:o,checked:x,createdAt:g}=t,y=L=>{const B=L.replace("https://drive.","").replace("google.com/","").replace("https://","").replace("http://","").replace("www.","");return B.length<=30?B:B.substring(0,19).concat("...")},n=b.filter(L=>L.cluster===p).length,m=()=>{c(_({_id:p,favorite:!o}))},l=()=>{c(z(t)),(t==null?void 0:t._id)===(s==null?void 0:s._id)&&d(`/element/${p}`,{replace:!0})},S=()=>{i(!u),u?E.success("Ascending by Title"):E.success("Ascending by Date")},U=()=>{c(z(t)),C("edit")},X=()=>c(ne(t)),Y=h.find(L=>L._id===p),Z=()=>{c(_({_id:p,checked:!x}))},D=p===(s==null?void 0:s._id);return e.jsxs(Ee,{id:D?"active-cluster":null,$active:D,children:[e.jsxs(Ae,{$hovered:o,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:o,onChange:m}),e.jsx(be,{size:"20px"})]}),e.jsx(Fe,{onClick:l,children:r}),e.jsx(Ge,{href:j,target:"_blank",rel:"noopener noreferrer",children:y(j)}),e.jsx(Ie,{children:n>0&&n}),e.jsx(De,{onClick:U,children:e.jsx(se,{size:"15px"})}),e.jsx(ze,{$hovered:Y,onClick:X,children:e.jsx(re,{size:"16px"})}),e.jsxs(Be,{$hovered:x,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:x,onChange:Z}),e.jsx(oe,{size:"15px"})]}),e.jsx(_e,{onClick:S,children:ye(g)}),k&&e.jsx(O,{onClick:()=>C(!1),children:e.jsx(W,{el:t,setIsModal:C})})]})};J.propTypes={el:v.object,sortByDate:v.bool,setSortByDate:v.func};const{indents:Me}=w,qe=f.ol`
  width: 100%;

  padding-bottom: ${Me.xl};
  counter-reset: section 0;
`,Re=()=>{const t=G(),{allElements:u}=R(),{allClusters:i,clusterTrash:c,clusterFilter:d}=T();let{clusterSelect:s}=T();s=s||[];const[h,b]=$.useState(!1);$.useEffect(()=>{t(ce()),t(le()),t(ae())},[t]),$.useEffect(()=>{const r=document.getElementById("active-cluster");(()=>{r==null||r.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const C=(()=>{const r=c.map(n=>n._id),o=i.filter(n=>r.includes(n._id));if(s.includes("trash"))return o;const x=[...u].sort((n,m)=>n.createdAt.localeCompare(m.createdAt));let g=[];for(let n=0;n<x.length;n+=1){const m=x[n].cluster;g.includes(m)||g.push(m)}const y=i.filter(n=>g.includes(n.cluster)).slice(0,29);return s.includes("recent")?y:i})().filter(({group:r,title:o,favorite:x,checked:g})=>{const y=r.toLowerCase().includes(d)||o.toLowerCase().includes(d),n=s.includes("favorite")?y&&x===!0:y;return s.some(m=>["checked","unchecked"].includes(m))?s.includes("checked")?n&&g===!0:n&&g===!1:n}).sort(h?(r,o)=>o.createdAt.localeCompare(r.createdAt):(r,o)=>r.title.localeCompare(o.title)),p=Array.from(new Set(C.map(r=>r.group))).sort((r,o)=>r.localeCompare(o));let j=s.filter(r=>p.includes(r));return j=j.length!==0?j:p,e.jsx(qe,{children:j.map(r=>e.jsxs($.Fragment,{children:[e.jsx(V,{group:r}),C.map(o=>o.group===r&&e.jsx(J,{el:o,sortByDate:h,setSortByDate:b},o._id))]},r))})},{button:Oe}=w.shadows,He=()=>{const t=G(),{activeCluster:u,clusterTrash:i}=T(),c=()=>{confirm("Are you sure you want to delete the selected Cluster(s)?")&&t(ie(i.map(d=>d._id).join("&"))).then(()=>{const d=i.map(h=>h._id),{_id:s}=u;d.includes(s)&&t(z(null))}).then(()=>t(de()))};return e.jsx(H,{onClick:c,$s:"m",$bs:Oe,children:"delete"})},{button:Pe}=w.shadows,Q=({setClipboardText:t,setIsModal:u})=>{$.useEffect(()=>{const c=d=>{d.key==="+"&&i()};return addEventListener("keydown",c),()=>{removeEventListener("keydown",c)}},[]);const i=async c=>{const d=await ue();try{await Te.validate({cluster:d}),t(d),u("add")}catch(s){c==null||c.target.blur(),E.error(`Invalid cluster, ${s.message}`)}};return e.jsx(H,{onClick:i,$s:"m",$bs:Pe,children:"add"})};Q.propTypes={setClipboardText:v.func.isRequired,setIsModal:v.func.isRequired};const{s:Ke,m:Ne}=w.indents,Ve=()=>{const{clusterTrash:t}=T(),[u,i]=$.useState(!1),[c,d]=$.useState(""),[s,h]=$.useState(""),b=t.length>0?" 1fr":"",k="1fr"+b;return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{$m:`${Ke} ${Ne}`,$pos:"fixed",$side:"right",$high:"bottom",$gtc:k,children:[b&&e.jsx(He,{}),e.jsx(Q,{setClipboardText:d,setIsModal:i})]}),u&&e.jsx(O,{onClick:()=>i(!1),children:e.jsx(ve,{cluster:c,group:s,setGroup:h,setIsModal:i})})]})},{s:q,m:We}=w.indents,Ze=()=>e.jsxs(he,{$p:`0 ${We} ${q} ${q}`,children:[e.jsx(Re,{}),e.jsx(Ve,{})]});export{Ze as default};
