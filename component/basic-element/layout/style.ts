import styled from "styled-components";

const StyledLayout = styled.div<{
  theme?: string;
}>`
  background-color: ${({ theme }) => theme.VERY_LIGHT_GREY_COLOR};
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  transition: 0.3s ease;
`;

export { StyledLayout };
