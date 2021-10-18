import styled from "styled-components";
import { DEFAULT_SPACING_CONTAINER } from "../../../../constants/spacing";

const StyledContainer = styled.div<{
  spacing?: number;
  padding?: number;
}>`
  margin-bottom: ${({ spacing }) =>
    spacing != null ? spacing + "px" : DEFAULT_SPACING_CONTAINER + "px"};
  padding: ${({ padding }) => (padding != null ? padding + "px" : "0px")};
`;

export { StyledContainer };
