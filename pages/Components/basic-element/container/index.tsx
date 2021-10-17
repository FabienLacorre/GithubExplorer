import * as React from "react";

type Props = {
  children: any;
  margin?: number;
  padding?: number;
};

const Container: React.FunctionComponent<Props> = ({
  children,
  margin,
  padding,
}) => {
  const style = {
    margin: margin != null ? margin : 8,
    padding: padding != null ? padding : 0,
  };
  return <div style={style}>{children}</div>;
};

export default Container;
