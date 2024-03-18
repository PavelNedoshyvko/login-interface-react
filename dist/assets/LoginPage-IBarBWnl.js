import{u as e,r as u,j as o,L as p}from"./index-1fjrmtQy.js";import{F as m,a as b,E as f,c as w,b as c,A as j,L as k,i as a,d as L,I as y,S}from"./SubmitButton-DUXxZNcJ.js";const v=e.div`
  position: relative;
  width: 100%;
`,z=e(m)`
  width: 100%;
  height: 48px;
  padding: 0px 15px;
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1.33333;
  color: #060e1e;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-size: 15px;
    line-height: 1.33333;
    color: #a1abb5;
  }

  &:hover,
  &:focus {
    border: 1.2px solid #316fea;
  }
`,P=e.svg`
  position: absolute;
  top: 14px;
  right: 15px;
  cursor: pointer;
`,F=({name:n,icon:s,iconWidth:r,iconHeight:t})=>{const[i,h]=u.useState(!1),x=()=>{h(g=>!g)};return o.jsxs(v,{children:[o.jsx(z,{name:n,placeholder:"Password",type:i?"text":"password"}),o.jsx(P,{width:r,height:t,onClick:x,children:o.jsx("use",{href:s})})]})},B=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 192px;
  height: 48px;
  border-radius: 6px;
  border: 1.2px solid #d3d8dc;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #060e1e;
  background-color: #fff;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1.2px solid #316fea;
  }
`,l=({icon:n,iconWidth:s,iconHeight:r,title:t,onClick:i})=>o.jsxs(B,{type:"button",onClick:i,children:[o.jsx("svg",{width:s,height:r,children:o.jsx("use",{href:n})}),t]}),C=e.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`,E=e.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
`,I=e.div`
  position: relative;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  color: #bec5cc;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 23px;
    width: 186px;
    height: 1px;
    background-color: #e3e6e9;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 23px;
    width: 186px;
    height: 1px;
    background-color: #e3e6e9;
  }
`,W=e(b)`
  width: 100%;
  margin-bottom: 20px;
`,G=e.div`
  width: 100%;
  margin-bottom: 30px;
`,A=e.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`,q=e(p)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  text-align: right;
  color: #316fea;
`,H=e.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 15px;
`;e.span`
  font-size: 14px;
  line-height: 1.42857;
  letter-spacing: 0.01em;
  color: #060e1e;
`;const T=e(p)`
  font-weight: 500;
  color: #316fea;
`,d=e(f)`
  color: #060e1e;
`,Z=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,$=w().shape({email:c().matches(Z,'Email should be like "test@gmail.com"').required("Email required!"),password:c().min(8,"Too short! The password should be at least 8 characters long").required("Password required!")}),R=()=>{const n=()=>console.log("clicked Google Login Button"),s=()=>console.log("clicked Github Login Button"),r=()=>console.log("clicked Submit Button");return o.jsxs(j,{children:[o.jsx(k,{}),o.jsx(C,{children:"Log in to your account"}),o.jsxs(E,{children:[o.jsx(l,{icon:a+"#icon-google",iconWidth:"18px",iconHeight:"18px",title:"Google",onClick:n}),o.jsx(l,{icon:a+"#icon-github",iconWidth:"21px",iconHeight:"18px",title:"Github",onClick:s})]}),o.jsx(I,{children:"Or"}),o.jsx(L,{initialValues:{email:"",password:""},validationSchema:$,onSubmit:(t,i)=>{console.log(t),i.resetForm()},children:({values:t,handleChange:i})=>o.jsxs(W,{children:[o.jsxs(G,{children:[o.jsxs(A,{children:[o.jsx(y,{name:"email",placeholder:"Work email",onChange:i}),o.jsx(d,{name:"email",component:"div"}),t.email&&o.jsxs(o.Fragment,{children:[o.jsx(F,{name:"password",icon:a+"#icon-eye",iconWidth:"20px",iconHeight:"20px"}),o.jsx(d,{name:"password",component:"div"})]})]}),t.email&&o.jsx(H,{children:o.jsx(q,{to:"/forgot-password",children:"Forgot your password?"})})]}),o.jsx(S,{title:"Log in to Qencode",onClick:r})]})}),o.jsxs("span",{children:["Is your company new to Qencode? ",o.jsx(T,{children:"Sign up"})]})]})};export{R as default};
