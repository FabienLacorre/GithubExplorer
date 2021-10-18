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
}) => {
  return (
    <StyledButton
      theme={LIGHT_THEME}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      colorHover={colorHover}
      fullWidth={fullWidth}
      onClick={clickHandler}
      disabled={disabled == true ? true : false}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
