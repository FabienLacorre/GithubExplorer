import React, { useEffect, useState } from "react";
import styles  from "../../../../styles/Layout.module.css";
import { GetCorrectTheme } from "../../../../constants/colors";

type Props = {
  children: any;
  spacing?: number;
  padding?: number;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const [themeValue, setThemeValue]: any = useState({});
  const style = {
    backgroundColor: themeValue.VERY_LIGHT_GREY_COLOR,
  };

  useEffect(() => {
    // THEME SWAP CODE
    const themeValueLocalStorage: string | null =
      window.localStorage.getItem("THEME");
    setThemeValue(GetCorrectTheme(themeValueLocalStorage));
  }, []);

  return (
    <div className={styles.layoutContainer} style={style}>
      {children}
    </div>
  );
};

export default Layout;
