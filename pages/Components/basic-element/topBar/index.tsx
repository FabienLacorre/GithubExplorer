import * as React from "react";
import {
  DARK_THEME,
  GetCorrectTheme,
  LIGHT_THEME,
} from "../../../../constants/colors";
import Button from "../button";
import Text from "../text";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
type Props = {};

const TopBar: React.FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const [themeValue, setThemeValue]: any = useState({});
  const style = {
    width: "100%",
    height: 80,
    backgroundColor: themeValue.BLUE_COLOR,
    display: "flex",
    alignItems: "center",
    paddingLeft: 70,
    paddingRight: 70,
    justifyContent: "space-between",
  };

  useEffect(() => {
    // THEME SWAP CODE
    const themeValueLocalStorage: string | null =
      window.localStorage.getItem("THEME");
    setThemeValue(GetCorrectTheme(themeValueLocalStorage));
  }, []);

  const SwapTheme = () => {
    const themeValueLocalStorage: string | null =
      window.localStorage.getItem("THEME");
    if (themeValueLocalStorage == "light" || themeValueLocalStorage == null) {
      window.localStorage.setItem("THEME", "dark");
      setThemeValue(DARK_THEME);
    } else {
      window.localStorage.setItem("THEME", "light");
      setThemeValue(LIGHT_THEME);
    }
    window.location.reload();
  };

  return (
    <div style={style}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push({
            pathname: "/",
          });
        }}
      >
        <Text size={16} bold={true} color={themeValue.WHITE_COLOR}>
          GitHub Indicators Explorer
        </Text>
      </div>

      <Button
        clickHandler={SwapTheme}
        backgroundColor={themeValue.BLUE_COLOR}
        color={themeValue.PURE_WHITE_COLOR}
        backgroundColorHover={themeValue.DARK_BLUE_COLOR}
        colorHover={themeValue.PURE_WHITE_COLOR}
      >
        Swap theme
      </Button>
    </div>
  );
};

export default TopBar;
