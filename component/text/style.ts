import styled from "styled-components";

const StyledText = styled.div<{
  fontSize?: number;
  bold?: boolean;
  color?: string;
}>`
  font-size: ${({ fontSize }) => (fontSize != null ? fontSize + "px" : "12px")};
  font-weight: ${({ bold }) => (bold == true ? "bold" : "normal")};
  color: ${({ color }) => (color != null ? color : "#000000")};
`;

export { StyledText };
