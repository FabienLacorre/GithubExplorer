const LIGHT_THEME = {
  PURE_WHITE_COLOR: "#FFFFFF",
  PURE_BLACK_COLOR: "#000000",
  BLACK_COLOR: "#000000",
  WHITE_COLOR: "#FFFFFF",
  GREY_COLOR: "#4A4A4A",
  VERY_LIGHT_GREY_COLOR: "#F9F9F9",
  LIGHT_GREY_COLOR: "#8C8C8C",
  BLUE_COLOR: "#6786D3",
  DARK_BLUE_COLOR: "#4F6DB8",
  RED_ERROR_COLOR: "#FF5757",
  DARK_RED_ERROR_COLOR: "#E34A4A",
};

const DARK_THEME = {
  PURE_BLACK_COLOR: "#000000",
  PURE_WHITE_COLOR: "#FFFFFF",
  BLACK_COLOR: "#FFFFFF",
  WHITE_COLOR: "#EDEDED",
  GREY_COLOR: "#EDEDED",
  VERY_LIGHT_GREY_COLOR: "#121212",
  LIGHT_GREY_COLOR: "#EDEDED",
  BLUE_COLOR: "#6786D3",
  DARK_BLUE_COLOR: "#4F6DB8",
  RED_ERROR_COLOR: "#EDEDED",
  DARK_RED_ERROR_COLOR: "#EDEDED",
};

const GetCorrectTheme = (value: string | null) => {
  console.log(value)
  if (value == "dark") {
    return DARK_THEME;
  } else {
    return LIGHT_THEME;
  }
};

export { LIGHT_THEME, DARK_THEME, GetCorrectTheme };
