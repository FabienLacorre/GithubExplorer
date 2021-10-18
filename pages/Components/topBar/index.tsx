import React, { useContext } from "react";
import Button from "../basic-element/button";
import Text from "../basic-element/text";
import { useRouter } from "next/router";
import { StyledTopBar, StyledTitleContainer } from "./style";
import { useTheme, Theme, selectCorrectTheme } from "../../../hooks/context";

type Props = {};

const TopBar: React.FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const CURRENT_THEME = selectCorrectTheme(theme);

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
        <Text size={16} bold={true} color={CURRENT_THEME.WHITE_COLOR}>
          GitHub Indicators Explorer
        </Text>
      </StyledTitleContainer>

      <Button
        clickHandler={() => {
          if (theme == Theme.Light) {
            setTheme(Theme.Dark);
          } else {
            setTheme(Theme.Light);
          }
        }}
        backgroundColor={CURRENT_THEME.BLUE_COLOR}
        color={CURRENT_THEME.PURE_WHITE_COLOR}
        backgroundColorHover={CURRENT_THEME.DARK_BLUE_COLOR}
        colorHover={CURRENT_THEME.PURE_WHITE_COLOR}
      >
        Swap theme
      </Button>
    </StyledTopBar>
  );
};

export default TopBar;
