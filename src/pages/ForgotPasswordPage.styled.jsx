import { ErrorMessage, Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`;

export const ForgotPasswordForm = styled(Form)`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
`;

export const CancelLink = styled(Link)`
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
`;

export const ErrMessage = styled(ErrorMessage)`
  color: #060e1e;
`;
