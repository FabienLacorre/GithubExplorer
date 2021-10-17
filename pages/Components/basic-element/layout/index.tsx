import * as React from "react";
import styles  from "../../../../styles/Layout.module.css";
import { VERY_LIGHT_GREY_COLOR } from "../../../constants/colors";

type Props = {
  children: any;
  spacing?: number;
  padding?: number;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const style = {
    backgroundColor: VERY_LIGHT_GREY_COLOR,
  };

  return (
    <div className={styles.layoutContainer} style={style}>
      {children}
    </div>
  );
};

export default Layout;
