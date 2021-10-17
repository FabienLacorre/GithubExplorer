import * as React from "react";
import { LIGHT_FREY_COLOR } from "../../../constants/colors";

type Props = {
  children: any;
  spacing?: number;
  padding?: number;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const style = {
    height: "100%",
    width: "100%",
    backgroundColor: LIGHT_FREY_COLOR,
  };
  return <div style={style}>{children}</div>;
};

export default Layout;
