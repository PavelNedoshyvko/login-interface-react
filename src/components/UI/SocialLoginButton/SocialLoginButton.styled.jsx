import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 192px;
  height: 48px;
  border-radius: 6px;
  border: 1.2px solid #d3d8dc;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #060e1e;
  background-color: #fff;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1.2px solid #316fea;
  }
`;
