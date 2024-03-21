import { ErrorMessage, Form } from "formik";
import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  color: #1a1919;
`;

export const ResetPasswordForm = styled(Form)`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputPasswordLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4;
  color: #060e1e;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 30px;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: #060e1e;
`;
