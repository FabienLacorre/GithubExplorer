import styled from "styled-components";

const StyledTopBar = styled.div<{}>`
  width: 100%;
  height: 80px;
  background-color: #6786d3;
  display: flex;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
  justify-content: space-between;
`;

const StyledTitleContainer = styled.div`
  cursor: pointer;
`;

export { StyledTopBar, StyledTitleContainer };
