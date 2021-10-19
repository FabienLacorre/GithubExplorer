import React, { useState, useEffect } from "react";
import { useTheme, selectCorrectTheme } from "../../../context";
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
  const { theme } = useTheme();
  const CURRENT_THEME = selectCorrectTheme(theme);

  return (
    <StyledButton
      theme={CURRENT_THEME}
      backgroundColor={
        error != null && error != ""
          ? CURRENT_THEME.RED_ERROR_COLOR
          : backgroundColor
      }
      backgroundColorHover={
        error != null && error != ""
          ? CURRENT_THEME.DARK_RED_ERROR_COLOR
          : backgroundColorHover
      }
      color={error != null && error != "" ? CURRENT_THEME.WHITE_COLOR : color}
      colorHover={
        error != null && error != "" ? CURRENT_THEME.WHITE_COLOR : colorHover
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
