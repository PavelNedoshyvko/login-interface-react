import {
  Icon,
  StyledInputPassword,
  StyledInputPasswordWrap,
} from "./InputPassword.styled";

export const InputPassword = ({ name, icon, iconWidth, iconHeight }) => {
  return (
    <StyledInputPasswordWrap>
      <StyledInputPassword name={name} placeholder="Password" />
      <Icon width={iconWidth} height={iconHeight}>
        <use href={icon} />
      </Icon>
    </StyledInputPasswordWrap>
  );
};
