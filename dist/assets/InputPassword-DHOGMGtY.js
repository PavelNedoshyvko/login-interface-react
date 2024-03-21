import{u as o,r as n,j as s}from"./index-rvWVo9VO.js";import{d as p,i as a}from"./SubmitButton-CIU_IVMW.js";const c=o.div`
  position: relative;
  width: 100%;
`,l=o(p)`
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
`,x=o.svg`
  position: absolute;
  top: 14px;
  right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,w=({name:e})=>{const[t,r]=n.useState(!1),i=()=>{r(d=>!d)};return s.jsxs(c,{children:[s.jsx(l,{name:e,placeholder:"Password",type:t?"text":"password"}),s.jsx(x,{onClick:i,children:s.jsx("use",{href:a+"#icon-eye"})})]})};export{w as I};
