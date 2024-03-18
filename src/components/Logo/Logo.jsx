import { StyledLogo } from "./Logo.styled";
import icons from "/icons.svg";

export const Logo = () => {
  return (
    <StyledLogo>
      <use href={icons + "#icon-qencode"} />
    </StyledLogo>
  );
};
