import * as React from "react";
import { VERY_LIGHT_GREY_COLOR } from "../../../constants/colors";

type Props = {
  children: any;
  spacing?: number;
  padding?: number;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const style = {
    height: "100%",
    width: "100%",
    backgroundColor: VERY_LIGHT_GREY_COLOR,
    paddingTop: 66,
    paddingLeft: 50,
    paddingRight: 50,
  };
  return <div style={style}>{children}</div>;
};

export default Layout;
