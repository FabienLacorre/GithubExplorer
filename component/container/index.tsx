import * as React from "react";
import { StyledContainer } from "./style";

type Props = {
  children: any;
  spacing?: number;
  padding?: number;
};

const Container: React.FunctionComponent<Props> = ({
  children,
  spacing,
  padding,
}) => {
  const style = {};
  return (
    <StyledContainer spacing={spacing} padding={padding} style={style}>
      {children}
    </StyledContainer>
  );
};

export default Container;
