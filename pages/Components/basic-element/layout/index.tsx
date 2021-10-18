import React, { useEffect, useState } from "react";
import { LIGHT_THEME } from "../../../../constants/colors";
import { StyledLayout } from "./style";

type Props = {
  children: any;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <StyledLayout theme={LIGHT_THEME}>
      {children}
    </StyledLayout>
  );
};

export default Layout;
