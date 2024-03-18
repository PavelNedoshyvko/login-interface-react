import { Field } from "formik";
import styled from "styled-components";

export const StyledInputEmail = styled(Field)`
  width: 100%;
  height: 48px;
  padding: 0px 12px;
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
`;
