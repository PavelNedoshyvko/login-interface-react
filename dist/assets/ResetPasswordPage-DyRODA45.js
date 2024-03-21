import{u as o,j as s}from"./index-rvWVo9VO.js";import{F as d,E as l,c,a as r,A as m,L as p,b as w,S as h}from"./SubmitButton-CIU_IVMW.js";import{I as e}from"./InputPassword-DHOGMGtY.js";const x=o.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`,u=o(d)`
  width: 100%;
  margin-bottom: 20px;
`,a=o.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4;
  color: #060e1e;
`,j=o.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 30px;
`,t=o(l)`
  color: #060e1e;
`,g=c().shape({passwordCurrent:r().min(8,"Too short! The password should be at least 8 characters long").required("Password required!"),passwordNew:r().min(8,"Too short! The password should be at least 8 characters long").required("Password required!")}),C=()=>s.jsxs(m,{children:[s.jsx(p,{}),s.jsx(x,{children:"Create new Password?"}),s.jsx(w,{initialValues:{passwordCurrent:"",passwordNew:""},validationSchema:g,onSubmit:(n,i)=>{console.log(n),i.resetForm()},children:s.jsxs(u,{children:[s.jsxs(j,{children:[s.jsxs("div",{children:[s.jsx(a,{children:"Password"}),s.jsx(e,{name:"passwordCurrent"})]}),s.jsx(t,{name:"passwordCurrent",component:"div"}),s.jsxs("div",{children:[s.jsx(a,{children:"Confirm Password"}),s.jsx(e,{name:"passwordNew"})]}),s.jsx(t,{name:"passwordNew",component:"div"})]}),s.jsx(h,{title:"Reset Password"})]})})]});export{C as default};
