import{t as z,u as R,b as Q,q as _,j as e,S as oe,T as S,w as H,D as O,U as P,n as w,s as i,P as m,V as q,W as re,Q as T,r as j,X as ae,Y as le,Z as W,_ as ce,y as I,$ as ie,F as U,z as de,C as ue,A as pe,a0 as he,J as me}from"./index-2791dd49.js";import{T as be}from"./index.esm-6ae09274.js";import{v as xe,u as fe}from"./index.esm-492d104c.js";import{S as ge}from"./index.esm-f85b20de.js";const J=({text:t,lang:d,rate:a=1})=>{const c=window.speechSynthesis,u=c.getVoices().filter(p=>p.lang.includes(d)),n=new SpeechSynthesisUtterance(t);if(n.voice=u[0],n.rate=a,u[0])c.speaking?c.cancel():c.speak(n);else return`No ${d.toUpperCase()} voice available`},B=[{value:"uk",label:"Ukrainian"},{value:"en",label:"English"},{value:"de",label:"German"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"it",label:"Italian"}],L=[{value:.5,label:"Rate: 0.5"},{value:.75,label:"Rate: 0.75"},{value:1,label:"Rate: 1"},{value:1.25,label:"Rate: 1.25"},{value:1.5,label:"Rate: 1.5"},{value:1.75,label:"Rate: 1.75"}],{backgroundHoverd:F,white:D,borderLight:A}=z.colors,$e=()=>{const t=R(),{user:d}=Q(),{activeCluster:a}=_(),c=({value:s})=>{t(H({_id:a._id,lang:s})).unwrap().then(l=>t(O(l.result.cluster)))},u=({value:s})=>{t(H({_id:a._id,rate:s})).unwrap().then(l=>t(O(l.result.cluster)))},n=({value:s})=>{const l=new FormData;l.append("lang",s),t(P(l))},p=({value:s})=>{const l=new FormData;l.append("rate",s),t(P(l))};return e.jsxs(oe,{$m:"0",$cg:"8px",$ai:"center",$gtc:"1fr 1fr 1fr 1fr",children:[e.jsx(S,{options:B,defaultValue:B.find(s=>s.value===(a==null?void 0:a.lang)),onChange:c,placeholder:"Language...",$ol:F,$b:D,$bh:A}),e.jsx(S,{options:L,defaultValue:L.find(s=>s.value==(a==null?void 0:a.rate)),onChange:u,placeholder:"Rate...",$ol:F,$b:D,$bh:A}),e.jsx(S,{options:B,defaultValue:B.find(s=>s.value===d.lang),onChange:n,$ol:F,$b:D,$bh:A}),e.jsx(S,{options:L,defaultValue:L.find(s=>s.value==d.rate),onChange:p,$ol:F,$b:D,$bh:A})]})},{colors:h,shadows:ve,indents:V}=z,ye=w`
  /* margin-bottom: ${V.s}; */
  margin-bottom: 7px;
  padding-block: ${V.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;

  background-color: ${h.white};
  border-radius: ${V.xs};
  font-size: 22px;
`,ke=i.li`
  ${ye}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border: 1px solid ${h.border};
  }

  &:hover {
    border-color: ${h.border};
    box-shadow: ${ve.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`,X=w`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${xe}
  }
`,je=i.label`
  ${X}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({$hovered:t})=>t?h.yellow:"transparent"};
    stroke: ${({$hovered:t})=>t?h.yellow:h.border};
  }
  &:hover svg {
    stroke: ${h.placeholder};
  }
`,Ce=i.label`
  ${X}
  opacity: ${({$hovered:t})=>t?1:0};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${h.border};
    border-radius: 50%;
    color: ${({$hovered:t})=>t?h.border:"transparent"};
  }
  &:hover svg {
    border-color: ${h.placeholder};
    color: ${({$hovered:t})=>t?h.placeholder:"transparent"};
  }
`,E=w`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${h.black};

  & svg {
    transition: color 250ms;
    color: ${h.border};
  }
  &:hover,
  &:hover svg {
    color: ${h.placeholder};
  }
`,we=i.button`
  ${E}

  opacity: ${({$hovered:t})=>t?1:0};
`,Ee=i.button`
  ${E}

  opacity: 0;
`,{colors:C,indents:Y}=z,Z=w`
  padding-block: 4px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`,Se=i.div`
  ${Z}
`,Te=i.form`
  ${Z}

  grid-template-columns: 12fr 1fr 12fr;
`,K=i.textarea`
  outline: none;
  border: 1px solid ${C.accent};
  border-radius: ${Y.xs};
  resize: none;
`,Be=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    height: calc(100% - 8px);
    width: 1px;
    border: 1px solid ${C.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${C.placeholder};
  }
`,Le=i.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`,Fe=i.button`
  ${E}
`,De=i.button`
  ${E}
`,Ae=i.button`
  ${E}
`,M=i.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${Y.xs};
  color: ${C.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${C.backgroundHoverd};
  }
`,ee=w`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`,ze=i.iframe`
  ${ee}

  height: 60px;
  border-radius: 30px;
`,Re=i.audio`
  ${ee}
`,te=({el:t,sortByDate:d,setSortByDate:a})=>{const{activeCluster:c}=_(),{element:u,caption:n}=t,p=async()=>{const r=J({text:u,lang:c.lang,rate:c.rate});await re(u),r&&T.error(r)},s=()=>{const r=J({text:n,lang:t.lang});r&&T.error(r)},l=()=>{a(!d),d?T.success("Ascending by Date"):T.success("Descending by Date")},x=n.endsWith("mp3"),f=!x&&n.startsWith("http"),o=!x&&!f;return e.jsxs(Se,{children:[e.jsx(M,{onClick:p,children:u}),e.jsx(Be,{onClick:l}),x&&e.jsx(Re,{controls:!0,src:q(n)}),f&&e.jsx(ze,{src:q(n)}),o&&e.jsx(M,{onClick:s,children:n})]})};te.propTypes={el:m.object,sortByDate:m.bool,setSortByDate:m.func,$active:m.bool,$hovered:m.bool};const se=({el:t,isForm:d,setIsForm:a})=>{const c=R(),{user:u}=Q(),{activeCluster:n}=_(),{_id:p,element:s,caption:l}=t,x=d+24,{register:f,watch:o,setValue:r,handleSubmit:y}=fe({mode:"onBlur",defaultValues:{element:s,caption:l}});j.useEffect(()=>{const b=g=>{g.key==="Enter"&&(g.preventDefault(),y(v)()),g.key==="Escape"&&a(!1)};return addEventListener("keydown",b),()=>{removeEventListener("keydown",b)}},[]);const v=b=>{c(W({_id:p,...b})),a(!1)},k=async()=>{const b=o("element"),g={from:n.lang,to:u.lang},$=await ce(b,g);r("caption",$)};return e.jsxs(Te,{onSubmit:y(v),children:[e.jsx(K,{...f("element"),style:{height:x}}),e.jsxs(Le,{children:[e.jsx(Fe,{children:e.jsx(ae,{size:"16px"})}),e.jsx(De,{type:"button",onClick:()=>a(x),children:e.jsx(le,{size:"16px"})}),e.jsx(Ae,{type:"button",onClick:k,children:e.jsx(ge,{size:"16px"})})]}),e.jsx(K,{...f("caption"),style:{height:x}})]})};se.propTypes={el:m.object,isForm:m.oneOfType([m.bool,m.number]),setIsForm:m.func};const ne=({el:t,sortByDate:d,setSortByDate:a})=>{const c=R(),{elementTrash:u,activeElement:n}=I(),[p,s]=j.useState(!1),{_id:l,element:x,favorite:f,checked:o}=t,r=u.find($=>$._id===l),y=x===n;j.useEffect(()=>{const $=document.getElementById("active-element");(()=>{$==null||$.scrollIntoView({block:"center",behavior:"smooth"})})()},[]);const v=()=>{c(W({_id:l,favorite:!f}))},k=()=>{c(W({_id:l,checked:!o}))},b=()=>c(he(t)),g=$=>{if(p)s(!1);else{const G=$.target.closest("div").clientHeight;s(G)}};return e.jsxs(ke,{id:y?"active-element":null,onClick:()=>c(ie(x)),children:[e.jsxs(U,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(je,{$hovered:f,children:[e.jsx("input",{type:"checkbox",name:"favorite",checked:f,onChange:v}),e.jsx(be,{size:"20px"})]}),e.jsx(Ee,{onClick:g,children:e.jsx(de,{size:"15px"})})]}),p&&e.jsx(se,{el:t,isForm:p,setIsForm:s}),!p&&e.jsx(te,{el:t,sortByDate:d,setSortByDate:a}),e.jsxs(U,{$h:"100%",$p:"0",$fd:"column",children:[e.jsxs(Ce,{$hovered:o,children:[e.jsx("input",{type:"checkbox",name:"checked",checked:o,onChange:k}),e.jsx(ue,{size:"15px"})]}),e.jsx(we,{$hovered:r,onClick:b,children:e.jsx(pe,{size:"16px"})})]})]})};ne.propTypes={el:m.object,sortByDate:m.bool,setSortByDate:m.func};const _e=i.ul`
  width: 100%;
  list-style: none;
`,Ve=()=>{const t=R(),{activeCluster:d}=_(),{allElements:a,elementTrash:c,elementFilter:u}=I();let{elementSelect:n}=I();n=n||[];const[p,s]=j.useState(!1);j.useEffect(()=>{t(me())},[t]);const l=a.filter(o=>o.cluster===(d==null?void 0:d._id)).sort((o,r)=>o.createdAt.localeCompare(r.createdAt)),f=(()=>{const o=c.map(r=>r._id);return n.includes("trash")?l.filter(r=>o.includes(r._id)):l})().filter(({element:o,caption:r,favorite:y,checked:v})=>{const k=o.toLowerCase().includes(u)||r.toLowerCase().includes(u),b=n.includes("favorite")?k&&y===!0:k;return n.some(g=>["checked","unchecked"].includes(g))?n.includes("checked")?b&&v===!0:b&&v===!1:b}).sort(p?(o,r)=>r.createdAt.localeCompare(o.createdAt):(o,r)=>o.createdAt.localeCompare(r.createdAt));return e.jsxs(_e,{children:[f.map(o=>e.jsx(ne,{el:o,sortByDate:p,setSortByDate:s},o._id)),e.jsx($e,{})]})},{s:N,m:We}=z.indents,Oe=()=>e.jsx(U,{$p:`0 ${We} ${N} ${N}`,children:e.jsx(Ve,{})});export{Oe as default};
