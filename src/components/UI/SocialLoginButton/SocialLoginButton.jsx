import { StyledButton } from "./SocialLoginButton.styled";

export const SocialLoginButton = ({
  icon,
  iconWidth,
  iconHeight,
  title,
  onClick,
}) => {
  return (
    <StyledButton type={"button"} onClick={onClick}>
      <svg width={iconWidth} height={iconHeight}>
        <use href={icon} />
      </svg>
      {title}
    </StyledButton>
  );
};
