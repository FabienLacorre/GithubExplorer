import React, { useState, useEffect } from "react";
import Text from "../text";
import {
  StyledTicket,
  StyledContainer,
  StyledLogoContainer,
  StyledTextContainer,
  StyledLogoImage,
  StyledSelectButtonContainer,
} from "./style";

const ImageLogo: React.FunctionComponent<{ logoUrl: string }> = ({
  logoUrl,
}) => {
  return (
    <StyledLogoContainer>
      <StyledLogoImage src={logoUrl} alt="" />
    </StyledLogoContainer>
  );
};

const TitleAndDescription: React.FunctionComponent<{
  title: string;
  subTitle: string;
}> = ({ title, subTitle }) => {
  let titleSubstring = title;
  let subTitleSubstring = subTitle;

  if (titleSubstring?.length > 40) {
    titleSubstring = titleSubstring.substring(0, 40) + "...";
  }

  if (subTitleSubstring?.length > 40) {
    subTitleSubstring = subTitleSubstring.substring(0, 40) + "...";
  }
  return (
    <StyledTextContainer>
      <Text size={14} bold={true}>
        {titleSubstring}
      </Text>
      <div style={{ height: 4 }}></div>
      <Text size={14}>{subTitleSubstring}</Text>
    </StyledTextContainer>
  );
};

const SelectButton: React.FunctionComponent<{ display: boolean }> = ({
  display,
}) => {
  return (
    <StyledSelectButtonContainer style={{ opacity: display == true ? 1 : 0 }}>
      <Text size={14} bold={true}>
        Select
      </Text>
    </StyledSelectButtonContainer>
  );
};

const Ticket: React.FunctionComponent<{
  title: string;
  subTitle: string;
  logoUrl: string;
  onSelect: any;
}> = ({ title, subTitle, logoUrl, onSelect }) => {
  const [displaySelectButton, setDisplaySelectButton] = useState(false);

  return (
    <StyledTicket
      onClick={() => onSelect()}
      onMouseOver={() => {
        setDisplaySelectButton(true);
      }}
      onMouseLeave={() => {
        setDisplaySelectButton(false);
      }}
    >
      <StyledContainer>
        <ImageLogo logoUrl={logoUrl} />
        <TitleAndDescription title={title} subTitle={subTitle} />
        <SelectButton display={displaySelectButton} />
      </StyledContainer>
    </StyledTicket>
  );
};

export default Ticket;
