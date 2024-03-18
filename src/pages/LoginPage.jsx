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

// const emailRegExp = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
// const passwordRegExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    // .matches(
    //   emailRegExp,
    //   "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz."
    // )
    .required("Required!"),
  password: Yup.string()
    // .matches(
    //   passwordRegExp,
    //   "Phone number must be digits and can contain dashes, parentheses and can start with +"
    // )
    .required("Required!"),
});

const LoginPage = () => {
  const handleClickGoogleLoginButton = () => {
    return console.log("clicked Google Login Button");
  };

  const handleClickGithubLoginButton = () => {
    return console.log("clicked Github Login Button");
  };

  const handleClickSubmitButton = () => {
    return console.log("clicked Submit Button");
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
        <LoginForm>
          <FormInputWrap>
            <InputWrap>
              <InputEmail name="email" placeholder={"Work email"} />
              <InputPassword
                name="password"
                icon={icons + "#icon-eye"}
                iconWidth={"20px"}
                iconHeight={"20px"}
              />
            </InputWrap>
            <ForgotPasswordPageLinkWrap>
              <ForgotPasswordPageLink to={"/forgot-password"}>
                Forgot your password?
              </ForgotPasswordPageLink>
            </ForgotPasswordPageLinkWrap>
          </FormInputWrap>
          <SubmitButton
            title={"Log in to Qencode"}
            onClick={handleClickSubmitButton}
          />
        </LoginForm>
      </Formik>

      <span>
        Is your company new to Qencode? <SignUpLink>Sign up</SignUpLink>
      </span>
    </AuthorizationContainer>
  );
};

export default LoginPage;
