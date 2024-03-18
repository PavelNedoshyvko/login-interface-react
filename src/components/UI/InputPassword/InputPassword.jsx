import { useState } from "react";
import {
  Icon,
  StyledInputPassword,
  StyledInputPasswordWrap,
} from "./InputPassword.styled";

export const InputPassword = ({ name, icon, iconWidth, iconHeight }) => {
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
      <Icon
        width={iconWidth}
        height={iconHeight}
        onClick={togglePasswordVisibility}
      >
        <use href={icon} />
      </Icon>
    </StyledInputPasswordWrap>
  );
};
