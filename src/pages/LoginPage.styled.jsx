import { Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`;

export const SocialLoginButtonWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
`;

export const Delimiter = styled.div`
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
`;

export const LoginForm = styled(Form)`
  width: 100%;
  margin-bottom: 20px;
`;

export const FormInputWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

export const ForgotPasswordPageLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  text-align: right;
  color: #316fea;
`;

export const ForgotPasswordPageLinkWrap = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 15px;
`;

export const SignUp = styled.span`
  font-size: 14px;
  line-height: 1.42857;
  letter-spacing: 0.01em;
  color: #060e1e;
`;

export const SignUpLink = styled(Link)`
  font-weight: 500;
  color: #316fea;
`;
