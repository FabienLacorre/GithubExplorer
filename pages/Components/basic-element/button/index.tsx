import React, { useState, useEffect } from "react";
import { LIGHT_THEME } from "../../../../constants/colors";
import { StyledButton } from "./style";

type Props = {
  color?: string;
  colorHover?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  clickHandler?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  error?: string;
};

const Button: React.FunctionComponent<Props> = ({
  children,
  color,
  colorHover,
  backgroundColor,
  backgroundColorHover,
  clickHandler,
  fullWidth,
  disabled,
  error,
}) => {
  return (
    <StyledButton
      theme={LIGHT_THEME}
      backgroundColor={
        error != null && error != ""
          ? LIGHT_THEME.RED_ERROR_COLOR
          : backgroundColor
      }
      backgroundColorHover={
        error != null && error != ""
          ? LIGHT_THEME.DARK_RED_ERROR_COLOR
          : backgroundColorHover
      }
      color={error != null && error != "" ? LIGHT_THEME.WHITE_COLOR : color}
      colorHover={
        error != null && error != "" ? LIGHT_THEME.WHITE_COLOR : colorHover
      }
      fullWidth={fullWidth}
      onClick={clickHandler}
      disabled={disabled == true ? true : false}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
