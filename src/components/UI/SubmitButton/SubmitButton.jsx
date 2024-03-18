import { StyledButton } from "./SubmitButton.styled";

export const SubmitButton = ({ title, onClick }) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {title}
    </StyledButton>
  );
};
