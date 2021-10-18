import React from "react";
import { StyledText } from "./style";

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
  return (
    <StyledText fontSize={size} color={color} bold={bold}>
      {children}
    </StyledText>
  );
};

export default Text;
