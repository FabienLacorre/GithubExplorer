import { createContext, useContext } from "react";
import { LIGHT_THEME, DARK_THEME } from "../constants/colors";

// THEME CONTEXT

export enum Theme {
  Dark = "Dark",
  Light = "Light",
}

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (Theme: Theme) => void;
}>({
  theme: Theme.Dark,
  setTheme: (theme) => {},
});

export const selectCorrectTheme = (theme: Theme) => {
  if (theme == Theme.Light) {
    return LIGHT_THEME;
  }
  return DARK_THEME;
};

export const useTheme = () => useContext(ThemeContext);

// LANGUAGE CONTEXT

export enum Lang {
  FR = "fr",
  EN = "en",
}

export const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({
  lang: Lang.FR,
  setLang: (Lang) => {},
});

export const useLang = () => useContext(LangContext);
