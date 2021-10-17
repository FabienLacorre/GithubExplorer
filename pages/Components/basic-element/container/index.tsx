import * as React from "react";
import { DEFAULT_SPACING_CONTAINER } from "../../../constants/spacing";

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
  const style = {
    marginTop: spacing != null ? spacing : DEFAULT_SPACING_CONTAINER,
    marginBottom: spacing != null ? spacing : DEFAULT_SPACING_CONTAINER,
    padding: padding != null ? padding : 0,
  };
  return <div style={style}>{children}</div>;
};

export default Container;
