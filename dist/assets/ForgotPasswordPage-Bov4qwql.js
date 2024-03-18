import{u as o,L as r,j as e}from"./index-1fjrmtQy.js";import{a as s,E as i,c as n,b as l,A as c,L as m,d,I as x,S as h}from"./SubmitButton-DUXxZNcJ.js";const p=o.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`,u=o(s)`
  width: 100%;
  margin-bottom: 20px;
`,g=o.div`
  margin-bottom: 25px;
`,b=o(r)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
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
`,f=o(i)`
  color: #060e1e;
`,j=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,E=n().shape({email:l().matches(j,'Email should be like "test@gmail.com"').required("Email required!")}),F=()=>e.jsxs(c,{children:[e.jsx(m,{}),e.jsx(p,{children:"Forgot Password?"}),e.jsx(d,{initialValues:{email:""},validationSchema:E,onSubmit:(t,a)=>{console.log(t),a.resetForm()},children:e.jsxs(u,{children:[e.jsxs(g,{children:[e.jsx(x,{name:"email",placeholder:"Enter your email"}),e.jsx(f,{name:"email",component:"div"})]}),e.jsx(h,{title:"Send"})]})}),e.jsx(b,{to:"/",children:"Cancel"})]});export{F as default};
