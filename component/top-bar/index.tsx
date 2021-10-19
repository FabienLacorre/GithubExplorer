import React, { useContext } from "react";
import Button from "../button";
import Text from "../text";
import { useRouter } from "next/router";
import { StyledTopBar, StyledTitleContainer } from "./style";
import {
  useTheme,
  Theme,
  selectCorrectTheme,
  useLang,
  Lang,
  setCorrectLang,
} from "../../context";

type Props = {};

const TopBar: React.FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();
  const CURRENT_THEME = selectCorrectTheme(theme);
  const CURRENT_LANG = setCorrectLang(lang);

  const handleRediction = () => {
    router.push({
      pathname: "/",
    });
  };

  const swapLang = () => {
    if (lang == Lang.PO) {
      setLang(Lang.EN);
    } else {
      setLang(Lang.PO);
    }
  };

  const swapTheme = () => {
    if (theme == Theme.Light) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
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
          {CURRENT_LANG.topBar.title}
        </Text>
      </StyledTitleContainer>

      <div>
        <Button
          clickHandler={swapLang}
          backgroundColor={CURRENT_THEME.BLUE_COLOR}
          color={CURRENT_THEME.PURE_WHITE_COLOR}
          backgroundColorHover={CURRENT_THEME.DARK_BLUE_COLOR}
          colorHover={CURRENT_THEME.PURE_WHITE_COLOR}
        >
          {CURRENT_LANG.topBar.buttonLang}
        </Button>

        <Button
          clickHandler={swapTheme}
          backgroundColor={CURRENT_THEME.BLUE_COLOR}
          color={CURRENT_THEME.PURE_WHITE_COLOR}
          backgroundColorHover={CURRENT_THEME.DARK_BLUE_COLOR}
          colorHover={CURRENT_THEME.PURE_WHITE_COLOR}
        >
          {CURRENT_LANG.topBar.buttonTheme}
        </Button>
      </div>
    </StyledTopBar>
  );
};

export default TopBar;
