import{u as e,j as o,L as d}from"./index-rvWVo9VO.js";import{F as h,E as g,c as x,a as r,A as m,L as u,i as a,b as f,S as b}from"./SubmitButton-CIU_IVMW.js";import{I as j}from"./InputEmail-DJj50lzO.js";import{I as w}from"./InputPassword-DHOGMGtY.js";const L=e.button`
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
`,c=({icon:n,iconWidth:s,iconHeight:t,title:i,onClick:p})=>o.jsxs(L,{type:"button",onClick:p,children:[o.jsx("svg",{width:s,height:t,children:o.jsx("use",{href:n})}),i]}),k=e.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`,y=e.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
`,v=e.div`
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
`,z=e(h)`
  width: 100%;
  margin-bottom: 20px;
`,F=e.div`
  width: 100%;
  margin-bottom: 30px;
`,S=e.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`,B=e(d)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  text-align: right;
  color: #316fea;
`,E=e.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 15px;
`;e.span`
  font-size: 14px;
  line-height: 1.42857;
  letter-spacing: 0.01em;
  color: #060e1e;
`;const I=e(d)`
  font-weight: 500;
  color: #316fea;
`,l=e(g)`
  color: #060e1e;
`,P=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,W=x().shape({email:r().matches(P,'Email should be like "test@gmail.com"').required("Email required!"),password:r().min(8,"Too short! The password should be at least 8 characters long").required("Password required!")}),T=()=>{const n=()=>console.log("clicked Google Login Button"),s=()=>console.log("clicked Github Login Button");return o.jsxs(m,{children:[o.jsx(u,{}),o.jsx(k,{children:"Log in to your account"}),o.jsxs(y,{children:[o.jsx(c,{icon:a+"#icon-google",iconWidth:"18px",iconHeight:"18px",title:"Google",onClick:n}),o.jsx(c,{icon:a+"#icon-github",iconWidth:"21px",iconHeight:"18px",title:"Github",onClick:s})]}),o.jsx(v,{children:"Or"}),o.jsx(f,{initialValues:{email:"",password:""},validationSchema:W,onSubmit:(t,i)=>{console.log(t),i.resetForm()},children:({values:t,handleChange:i})=>o.jsxs(z,{children:[o.jsxs(F,{children:[o.jsxs(S,{children:[o.jsx(j,{name:"email",placeholder:"Work email",onChange:i}),o.jsx(l,{name:"email",component:"div"}),t.email&&o.jsxs(o.Fragment,{children:[o.jsx(w,{name:"password"}),o.jsx(l,{name:"password",component:"div"})]})]}),t.email&&o.jsx(E,{children:o.jsx(B,{to:"/forgot-password",children:"Forgot your password?"})})]}),o.jsx(b,{title:"Log in to Qencode"})]})}),o.jsxs("span",{children:["Is your company new to Qencode? ",o.jsx(I,{children:"Sign up"})]})]})};export{T as default};
