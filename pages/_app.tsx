import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import TopBar from "./Components/topBar";
import { ThemeContext, Theme } from "../hooks/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(Theme.Light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <TopBar />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
export default MyApp;
