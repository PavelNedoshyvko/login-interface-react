import { Formik } from "formik";
import * as Yup from "yup";
import { Logo } from "../components/Logo/Logo";
import { AuthorizationContainer } from "../components/UI/AuthorizationContainer";
import {
  CancelLink,
  ErrMessage,
  ForgotPasswordForm,
  InputWrap,
  Title,
} from "./ForgotPasswordPage.styled";
import { InputEmail } from "../components/UI/InputEmail/InputEmail";
import { SubmitButton } from "../components/UI/SubmitButton/SubmitButton";
import { useEffect, useState } from "react";

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, `Email should be like "test@gmail.com"`)
    .required("Email required!"),
});

const ForgotPasswordPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      window.location.href = "/reset-password";
    }
  }, [isSubmitted]);

  return (
    <AuthorizationContainer>
      <Logo />
      <Title>Forgot Password?</Title>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={EmailSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          setIsSubmitted(true);
        }}
      >
        <ForgotPasswordForm>
          <InputWrap>
            <InputEmail name="email" placeholder={"Enter your email"} />
            <ErrMessage name="email" component="div" />
          </InputWrap>
          <SubmitButton title={"Send"} />
        </ForgotPasswordForm>
      </Formik>
      <CancelLink to="/">Cancel</CancelLink>
    </AuthorizationContainer>
  );
};

export default ForgotPasswordPage;
