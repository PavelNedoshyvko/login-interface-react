import { Formik } from "formik";
import * as Yup from "yup";
import { Logo } from "../components/Logo/Logo";
import { AuthorizationContainer } from "../components/UI/AuthorizationContainer";
import { InputEmail } from "../components/UI/InputEmail/InputEmail";
import { InputPassword } from "../components/UI/InputPassword/InputPassword";
import { SocialLoginButton } from "../components/UI/SocialLoginButton/SocialLoginButton";
import { SubmitButton } from "../components/UI/SubmitButton/SubmitButton";
import {
  Delimiter,
  ErrMessage,
  ForgotPasswordPageLink,
  ForgotPasswordPageLinkWrap,
  FormInputWrap,
  InputWrap,
  LoginForm,
  SignUpLink,
  SocialLoginButtonWrap,
  Title,
} from "./LoginPage.styled";
import icons from "/icons.svg";

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, `Email should be like "test@gmail.com"`)
    .required("Email required!"),
  password: Yup.string()
    .min(8, "Too short! The password should be at least 8 characters long")
    .required("Password required!"),
});

const LoginPage = () => {
  const handleClickGoogleLoginButton = () => {
    return console.log("clicked Google Login Button");
  };

  const handleClickGithubLoginButton = () => {
    return console.log("clicked Github Login Button");
  };

  return (
    <AuthorizationContainer>
      <Logo />
      <Title>Log in to your account</Title>
      <SocialLoginButtonWrap>
        <SocialLoginButton
          icon={icons + "#icon-google"}
          iconWidth={"18px"}
          iconHeight={"18px"}
          title={"Google"}
          onClick={handleClickGoogleLoginButton}
        />
        <SocialLoginButton
          icon={icons + "#icon-github"}
          iconWidth={"21px"}
          iconHeight={"18px"}
          title={"Github"}
          onClick={handleClickGithubLoginButton}
        />
      </SocialLoginButtonWrap>
      <Delimiter>Or</Delimiter>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <LoginForm>
            <FormInputWrap>
              <InputWrap>
                <InputEmail
                  name="email"
                  placeholder={"Work email"}
                  onChange={handleChange}
                />
                <ErrMessage name="email" component="div" />
                {values.email && (
                  <>
                    <InputPassword name="password" />
                    <ErrMessage name="password" component="div" />
                  </>
                )}
              </InputWrap>
              {values.email && (
                <ForgotPasswordPageLinkWrap>
                  <ForgotPasswordPageLink to={"/forgot-password"}>
                    Forgot your password?
                  </ForgotPasswordPageLink>
                </ForgotPasswordPageLinkWrap>
              )}
            </FormInputWrap>
            <SubmitButton title={"Log in to Qencode"} />
          </LoginForm>
        )}
      </Formik>
      <span>
        Is your company new to Qencode? <SignUpLink>Sign up</SignUpLink>
      </span>
    </AuthorizationContainer>
  );
};

export default LoginPage;
