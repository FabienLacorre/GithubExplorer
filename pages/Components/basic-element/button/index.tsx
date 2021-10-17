import React, { useState } from "react";
import {
  BLACK_COLOR,
  BLUE_COLOR,
  DARK_BLUE_COLOR,
  WHITE_COLOR,
} from "../../../constants/colors";

type Props = {
  color?: string;
  colorHover?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
};

const Button: React.FunctionComponent<Props> = ({
  children,
  color,
  colorHover,
  backgroundColor,
  backgroundColorHover,
}) => {
  const [hoverStyle, setHoverStyle] = useState(false);

  const style = {
    borderRadius: 14,
    border: 0,
    marginRight: 12,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 24,
    cursor: "pointer",
    transition: "0.3s ease",
  };

  const colorStyle = {
    backgroundColor: backgroundColor != null ? backgroundColor : BLUE_COLOR,
    color: color != null ? color : WHITE_COLOR,
  };

  const colorStyleHover = {
    backgroundColor:
      backgroundColorHover != null ? backgroundColorHover : DARK_BLUE_COLOR,
    color: colorHover != null ? colorHover : WHITE_COLOR,
  };

  let currentStyles = colorStyle;

  if (hoverStyle == true) {
    currentStyles = colorStyleHover;
  }

  return (
    <button
      onMouseLeave={() => setHoverStyle(false)}
      onMouseOver={() => setHoverStyle(true)}
      style={{ ...style, ...currentStyles }}
    >
      {children}
    </button>
  );
};

export default Button;
