import * as React from "react";
import Button from "../basic-element/button";
import Text from "../basic-element/text";
import { useState } from "react";
import { useRouter } from "next/router";
import { StyledTopBar, StyledTitleContainer } from "./style";
import { LIGHT_THEME } from "../../../constants/colors";
type Props = {};

const TopBar: React.FunctionComponent<Props> = ({}) => {
  const router = useRouter();

  const handleRediction = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <StyledTopBar>
      <StyledTitleContainer
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleRediction();
        }}
      >
        <Text size={16} bold={true} color={LIGHT_THEME.WHITE_COLOR}>
          GitHub Indicators Explorer
        </Text>
      </StyledTitleContainer>

      <Button
        clickHandler={() => {}}
        backgroundColor={LIGHT_THEME.BLUE_COLOR}
        color={LIGHT_THEME.PURE_WHITE_COLOR}
        backgroundColorHover={LIGHT_THEME.DARK_BLUE_COLOR}
        colorHover={LIGHT_THEME.PURE_WHITE_COLOR}
      >
        Swap theme
      </Button>
    </StyledTopBar>
  );
};

export default TopBar;
