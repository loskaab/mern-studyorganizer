import{aa as K,r as $,ab as E,ac as P,ad as X,ae as F,af as Z,ag as ee,ah as te,ai as re,aj as oe,P as e,j as g,ak as ae,al as ne,am as se,s as N,n as ie,t as le,u as ue,q as pe,an as ce,Q as de,x as ge}from"./index-aaba122c.js";import{g as q,s as fe,a as ve,v as be,u as me}from"./index.esm-e6680d17.js";import{t as he}from"./clusterSchema-49603d33.js";var Oe=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],I=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,i=String(r).toLowerCase(),n=String(a.getOptionValue(o)).toLowerCase(),u=String(a.getOptionLabel(o)).toLowerCase();return n===i||u===i},D={formatCreateLabel:function(r){return'Create "'.concat(r,'"')},isValidNewOption:function(r,o,a,i){return!(!r||o.some(function(n){return I(r,n,i)})||a.some(function(n){return I(r,n,i)}))},getNewOptionData:function(r,o){return{label:o,value:r,__isNew__:!0}}};function ye(t){var r=t.allowCreateWhileLoading,o=r===void 0?!1:r,a=t.createOptionPosition,i=a===void 0?"last":a,n=t.formatCreateLabel,u=n===void 0?D.formatCreateLabel:n,d=t.isValidNewOption,c=d===void 0?D.isValidNewOption:d,p=t.getNewOptionData,l=p===void 0?D.getNewOptionData:p,f=t.onCreateOption,m=t.options,v=m===void 0?[]:m,h=t.onChange,s=K(t,Oe),O=s.getOptionValue,x=O===void 0?Z:O,w=s.getOptionLabel,j=w===void 0?ee:w,b=s.inputValue,G=s.isLoading,A=s.isMulti,L=s.value,R=s.name,y=$.useMemo(function(){return c(b,E(L),v,{getOptionValue:x,getOptionLabel:j})?l(b,u(b)):void 0},[u,l,j,x,b,c,v,L]),Q=$.useMemo(function(){return(o||!G)&&y?i==="first"?[y].concat(P(v)):[].concat(P(v),[y]):v},[o,i,G,y,v]),Y=$.useCallback(function(C,V){if(V.action!=="select-option")return h(C,V);var k=Array.isArray(C)?C:[C];if(k[k.length-1]===y){if(f)f(b);else{var T=l(b,b),J={action:"create-option",name:R,option:T};h(X(A,[].concat(P(E(L)),[T]),T),J)}return}h(C,V)},[l,b,A,R,y,f,h,L]);return F(F({},s),{},{options:Q,onChange:Y})}var Ce=$.forwardRef(function(t,r){var o=te(t),a=ye(o);return $.createElement(re,oe({ref:r},a))}),$e=Ce;const Ge=t=>new Date(t).toLocaleDateString("ro-RO",{year:"2-digit",month:"2-digit",day:"2-digit"}),xe=t=>{let r=t.replace("https://drive.google.com/","").replace("file/d/","");const o=r.indexOf("/");return r=r.substring(0,o),r};var M=function(t,r,o){if(t&&"reportValidity"in t){var a=q(o,r);t.setCustomValidity(a&&a.message||""),t.reportValidity()}},W=function(t,r){var o=function(i){var n=r.fields[i];n&&n.ref&&"reportValidity"in n.ref?M(n.ref,i,t):n.refs&&n.refs.forEach(function(u){return M(u,i,t)})};for(var a in r.fields)o(a)},we=function(t,r){r.shouldUseNativeValidation&&W(t,r);var o={};for(var a in t){var i=q(r.fields,a);fe(o,a,Object.assign(t[a]||{},{ref:i&&i.ref}))}return o};function je(t,r,o){return r===void 0&&(r={}),o===void 0&&(o={}),function(a,i,n){try{return Promise.resolve(function(u,d){try{var c=(r.context,Promise.resolve(t[o.mode==="sync"?"validateSync":"validate"](a,Object.assign({abortEarly:!1},r,{context:i}))).then(function(p){return n.shouldUseNativeValidation&&W({},n),{values:o.raw?a:p,errors:{}}}))}catch(p){return d(p)}return c&&c.then?c.then(void 0,d):c}(0,function(u){if(!u.inner)throw u;return{values:{},errors:we((d=u,c=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(d.inner||[]).reduce(function(p,l){if(p[l.path]||(p[l.path]={message:l.message,type:l.type}),c){var f=p[l.path].types,m=f&&f[l.type];p[l.path]=ve(l.path,c,p,l.type,m?[].concat(m,l.message):l.message)}return p},{})),n)};var d,c}))}catch(u){return Promise.reject(u)}}}const B=({$w:t,$h:r,$s:o,onClick:a,type:i="button",disabled:n,children:u})=>g.jsx(ae,{$w:t,$h:r,$s:o,onClick:a,type:i,disabled:n,children:u});B.propTypes={$w:e.string,$h:e.string,$s:e.string,onClick:e.func,type:e.string,disabled:e.oneOfType([e.bool,e.number]),children:e.oneOfType([e.string,e.node,e.oneOf(["img","png","svg"])])};const z=({styles:t,$obh:r,$sobh:o,$br:a,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,name:f,value:m={value:"HTML",label:"Chocolate"},defaultValue:v,placeholder:h="Create / Select...",options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:j,isDisabled:b})=>g.jsx($e,{theme:ne({$obh:r,$sobh:o}),styles:{...se({$br:a,$ol:i,$b:n,$bh:u,$bf:d,$o:c,$oh:p,$ob:l,$obh:r}),...t},name:f,value:m,defaultValue:v,placeholder:h,options:s,onChange:O,isClearable:x,onCreateOption:w,isLoading:j,isDisabled:b});z.propTypes={styles:e.arrayOf(e.object),$obh:e.string,$sobh:e.string,$br:e.string,$ol:e.string,$b:e.string,$bh:e.string,$bf:e.string,$o:e.string,$oh:e.string,$ob:e.string,options:e.arrayOf(e.object),name:e.string,value:e.oneOfType([e.arrayOf(e.object),e.object,e.string]),defaultValue:e.oneOfType([e.arrayOf(e.object),e.object]),placeholder:e.string,onChange:e.func,isClearable:e.oneOfType([e.arrayOf(e.string),e.string,e.object]),onCreateOption:e.func,isLoading:e.bool,isDisabled:e.bool};const{colors:S,indents:H,shadows:Le}=le,Se=N.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${H.s};
  background-color: ${S.white};
  box-shadow: ${Le.auth};
`,_=N.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${S.error};
  }
`,U=ie`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${S.border};
  border-radius: ${H.xs};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${S.hovered};
  }
`,Ne=N.input`
  ${U}
  ${be}
`,Ve=N.input`
  ${U}
`,Te=({cluster:t,title:r,group:o,setGroup:a,setIsModal:i})=>{var h;const n=ue(),{clusterGroups:u}=pe(),{register:d,watch:c,handleSubmit:p,formState:{errors:l}}=me({mode:"onBlur",resolver:je(he),defaultValues:{cluster:t,title:r}}),f=s=>{const O=xe(s.cluster);n(ce({...s,group:o.value,gdriveId:O})),i(!1)},m=u.map(s=>({value:s.clusterGroup,label:s.clusterGroup})).sort((s,O)=>s.value.localeCompare(O.value)),v=s=>{c("title")?(n(ge({clusterGroup:s})),a({value:s,label:s})):de.error("Title is required")};return g.jsxs(Se,{onSubmit:p(f),children:[g.jsxs(_,{children:[t.length<=45?t:t.substring(0,45)+"...",g.jsx(Ne,{...d("cluster")})]}),g.jsxs(_,{children:["Title ",g.jsxs("span",{children:[" ",(h=l.title)==null?void 0:h.message]}),g.jsx(Ve,{autoFocus:!0,...d("title")})]}),g.jsxs(_,{children:["Group",g.jsx(z,{value:o,options:m,onChange:s=>a(s||""),onCreateOption:v,isClearable:o})]}),g.jsx(B,{type:"submit",$s:"l",$h:"41px",children:"Submit"})]})};Te.propTypes={cluster:e.string.isRequired,title:e.string,group:e.oneOfType([e.string,e.object]),setGroup:e.func.isRequired,setIsModal:e.func.isRequired};export{Te as A,B,z as C,Se as F,Ve as I,_ as L,Ge as a,xe as g,je as o};
