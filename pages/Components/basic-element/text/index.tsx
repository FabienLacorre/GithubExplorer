import * as React from "react";
import { BLACK_COLOR } from "../../../../constants/colors";

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
  const style = {
    fontSize: size != null ? size : 12,
    fontWeight: bold == true ? 700 : 400,
    color: color != null && color != "" ? color : BLACK_COLOR,
  };
  return <span style={style}>{children}</span>;
};

export default Text;
