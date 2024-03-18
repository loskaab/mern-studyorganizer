import{n as x,s as c,t as g,L as f,P as t,j as e,G as l,c as m,F as j,u as v,r as b,v as F,Q as y,g as C}from"./index-aaba122c.js";import{f as L,F as $,a as k,T as z,L as T,E as V,b as w,c as E,d as M,S,e as B}from"./AuthForms.styled-9cc66c19.js";import{v as O}from"./clusterSchema-49603d33.js";const{colors:R}=g,d=x`
  margin-left: auto;

  color: ${R.accent};
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
  font-size: ${({$fs:s="14px"})=>s};
  font-weight: 400;
`,G=c(f)`
  ${d};
`,Q=c.button`
  ${d};

  background-color: transparent;
  border-color: transparent;
`,H=({$fs:s,to:o,children:a})=>e.jsx(G,{$fs:s,to:o,children:a});H.propTypes={$fs:t.string,to:t.string.isRequired,children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired};function I(s){return l({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(s)}function D(s){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(s)}const q=({children:s})=>e.jsx(L,{href:`${m}/auth/google`,children:e.jsxs(j,{$p:"0",$ai:"center",$jc:"space-between",children:[e.jsx(I,{size:"20px"}),s,e.jsx(D,{size:"16px"})]})});q.propTypes={children:t.oneOfType([t.string,t.node,t.oneOf(["img","png","svg"])])};const U=({userEmail:s})=>{const o=v(),a=({values:n,errors:r})=>{const i=!Object.values(n)[0]&&"noValue",u=Object.values(r).length?"error":"success";return i||u},p=({errors:n})=>Object.keys(n).length,h=(n,r)=>{o(F(n)).unwrap().catch(i=>i.includes("401")&&y.error("Unauthorized")).then(()=>o(C())),r.resetForm()};return e.jsx($,{initialValues:{verificationCode:""},validationSchema:O,onSubmit:h,children:({values:n,errors:r})=>e.jsxs(k,{children:[e.jsx(z,{children:e.jsxs("h2",{children:["Verify: ",s]})}),e.jsxs(b.Fragment,{children:[e.jsxs(T,{children:["Code",e.jsx("pre",{children:" "}),e.jsx(V,{name:"verificationCode",component:"span"})]}),e.jsxs(w,{children:[e.jsx(E,{type:"text",name:"verificationCode",$validation:a({values:n,errors:r})}),a({values:n,errors:r})==="error"&&e.jsx(M,{}),a({values:n,errors:r})==="success"&&e.jsx(S,{})]})]}),e.jsx(B,{disabled:p({errors:r}),children:"Submit"})]})})};U.propTypes={userEmail:t.string.isRequired};export{Q as B,q as G,H as L,U as V};
