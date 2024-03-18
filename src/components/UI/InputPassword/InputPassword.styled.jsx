import { Field } from "formik";
import styled from "styled-components";

export const StyledInputPasswordWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInputPassword = styled(Field)`
  width: 100%;
  height: 48px;
  padding: 0px 15px;
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;

  &::placeholder {
    font-size: 15px;
    line-height: 1.33333;
    color: #a1abb5;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  top: 14px;
  right: 15px;
`;
