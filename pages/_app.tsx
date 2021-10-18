import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import TopBar from "./Components/topBar";
import { ThemeContext, LangContext, Theme, Lang } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(Theme.Light);
  const [lang, setLang] = useState(Lang.EN);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <LangContext.Provider value={{ lang, setLang }}>
        <TopBar />
        <Component {...pageProps} />
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}
export default MyApp;
