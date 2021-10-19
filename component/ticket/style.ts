import styled from "styled-components";

const StyledTicketContainer = styled.div`
  height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-right: 8px;
`;

const StyledTicket = styled.div`
  position: relative;
  height: 66px;
  width: 100%;
  border-radius: 14px;
  border: 1px solid #d7d7d7;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 7px;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
    border: 1px solid #6786d3;
  }
`;

const StyledContainer = styled.div`
  display: flex;
`;

const StyledLogoContainer = styled.div`
  height: 51px;
  width: 51px;
`;

const StyledTextContainer = styled.div`
  padding-top: 5px;
  margin-left: 14px;
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const StyledLogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const StyledSelectButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: calc(100% - 13px);
  right: 15px;
  transition: 0.3s ease;
`;

const StyledSelectButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  cursor: pointer;
`;

export {
  StyledTicketContainer,
  StyledTicket,
  StyledContainer,
  StyledLogoContainer,
  StyledTextContainer,
  StyledLogoImage,
  StyledSelectButtonContainer,
  StyledSelectButton,
};
