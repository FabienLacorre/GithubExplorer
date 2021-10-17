import * as React from "react";

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
    marginTop: spacing != null ? spacing : 16,
    marginBottom: spacing != null ? spacing : 16,
    padding: padding != null ? padding : 0,
  };
  return <div style={style}>{children}</div>;
};

export default Container;
