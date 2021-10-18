import React, { useEffect, useState } from "react";
import { GetCorrectTheme } from "../../../../constants/colors";

type Props = {
  children: any;
  size?: number;
  bold?: boolean;
  color?: string;
};

const Text: React.FunctionComponent<Props> = ({
  children,
  size,
  bold,
  color,
}) => {
  const [themeValue, setThemeValue]: any = useState({});

  const style = {
    fontSize: size != null ? size : 12,
    fontWeight: bold == true ? 700 : 400,
    color: color != null && color != "" ? color : themeValue.PURE_BLACK_COLOR,
  };

  useEffect(() => {
    // THEME SWAP CODE
    const themeValueLocalStorage: string | null =
      window.localStorage.getItem("THEME");
    setThemeValue(GetCorrectTheme(themeValueLocalStorage));
  }, []);

  return <span style={style}>{children}</span>;
};

export default Text;
