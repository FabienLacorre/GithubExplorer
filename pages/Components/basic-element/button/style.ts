import styled from "styled-components";

const StyledButton = styled.button<{
  backgroundColor?: string;
  backgroundColorHover?: string;
  color?: string;
  colorHover?: string;
  fullWidth?: boolean;
  theme?: any;
}>`
  border-radius: 14px;
  border: 0px;
  margin-right: 12px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  cursor: pointer;
  transition: 0.3s ease;

  
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "")};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.BLUE_COLOR};
  color: ${({ color, theme }) => (color ? color : theme.WHITE_COLOR)};
  &:hover {
    background-color: ${({ backgroundColorHover, theme }) =>
      backgroundColorHover ? backgroundColorHover : theme.DARK_BLUE_COLOR};
    color: ${({ colorHover, theme }) =>
      colorHover ? colorHover : theme.WHITE_COLOR};
  }
`;

export { StyledButton };
