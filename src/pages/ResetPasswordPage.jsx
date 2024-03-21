import * as Yup from "yup";
import { Logo } from "../components/Logo/Logo";
import { AuthorizationContainer } from "../components/UI/AuthorizationContainer";
import {
  ErrMessage,
  InputPasswordLabel,
  InputWrap,
  ResetPasswordForm,
  Title,
} from "./ResetPasswordPage.styled";
import { Formik } from "formik";

import { InputPassword } from "../components/UI/InputPassword/InputPassword";
import { SubmitButton } from "../components/UI/SubmitButton/SubmitButton";

const PasswordSchema = Yup.object().shape({
  passwordCurrent: Yup.string()
    .min(8, "Too short! The password should be at least 8 characters long")
    .required("Password required!"),
  passwordNew: Yup.string()
    .min(8, "Too short! The password should be at least 8 characters long")
    .required("Password required!"),
});

const ResetPasswordPage = () => {
  return (
    <AuthorizationContainer>
      <Logo />
      <Title>Create new Password?</Title>
      <Formik
        initialValues={{
          passwordCurrent: "",
          passwordNew: "",
        }}
        validationSchema={PasswordSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <ResetPasswordForm>
          <InputWrap>
            <div>
              <InputPasswordLabel>Password</InputPasswordLabel>
              <InputPassword name="passwordCurrent" />
            </div>
            <ErrMessage name="passwordCurrent" component="div" />
            <div>
              <InputPasswordLabel>Confirm Password</InputPasswordLabel>
              <InputPassword name="passwordNew" />
            </div>
            <ErrMessage name="passwordNew" component="div" />
          </InputWrap>
          <SubmitButton title={"Reset Password"} />
        </ResetPasswordForm>
      </Formik>
    </AuthorizationContainer>
  );
};

export default ResetPasswordPage;
