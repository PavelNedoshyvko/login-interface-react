import{u as o,L as n,r as s,j as e}from"./index-rvWVo9VO.js";import{F as l,E as c,c as m,a as d,A as p,L as x,b as u,S as h}from"./SubmitButton-CIU_IVMW.js";import{I as f}from"./InputEmail-DJj50lzO.js";const g=o.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`,b=o(l)`
  width: 100%;
  margin-bottom: 20px;
`,j=o.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
`,E=o(n)`
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
`,w=o(c)`
  color: #060e1e;
`,S=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,F=m().shape({email:d().matches(S,'Email should be like "test@gmail.com"').required("Email required!")}),L=()=>{const[t,r]=s.useState(!1);return s.useEffect(()=>{t&&(window.location.href="/reset-password")},[t]),e.jsxs(p,{children:[e.jsx(x,{}),e.jsx(g,{children:"Forgot Password?"}),e.jsx(u,{initialValues:{email:""},validationSchema:F,onSubmit:(i,a)=>{console.log(i),a.resetForm(),r(!0)},children:e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(f,{name:"email",placeholder:"Enter your email"}),e.jsx(w,{name:"email",component:"div"})]}),e.jsx(h,{title:"Send"})]})}),e.jsx(E,{to:"/",children:"Cancel"})]})};export{L as default};
