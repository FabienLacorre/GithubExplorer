import React from "react";
import { StyledLayout } from "./style";
import { useTheme, selectCorrectTheme } from "../../../context";
type Props = {
  children: any;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const { theme } = useTheme();
  const CURRENT_THEME = selectCorrectTheme(theme);

  return <StyledLayout theme={CURRENT_THEME}>{children}</StyledLayout>;
};

export default Layout;
