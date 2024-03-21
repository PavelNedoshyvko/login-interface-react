import { useState } from "react";
import {
  Icon,
  StyledInputPassword,
  StyledInputPasswordWrap,
} from "./InputPassword.styled";
import icons from "/icons.svg";

export const InputPassword = ({ name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <StyledInputPasswordWrap>
      <StyledInputPassword
        name={name}
        placeholder="Password"
        type={showPassword ? "text" : "password"}
      />
      <Icon onClick={togglePasswordVisibility}>
        <use href={icons + "#icon-eye"} />
      </Icon>
    </StyledInputPasswordWrap>
  );
};
