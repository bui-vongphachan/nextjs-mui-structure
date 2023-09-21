"use client";

import { PaletteMode } from "@/types/theme";
import { createTheme, ThemeProvider } from "@mui/system";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { colorPalette } from "./colors";
import { shadows } from "./shadow";
import { textStyle } from "./text";
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

export const themeContext = createContext<{
  mode: PaletteMode;
  toggleMode: () => void;
}>({
  mode: PaletteMode.LIGHT,
  toggleMode: () => {},
});

export const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(PaletteMode.LIGHT);

  const theme = useMemo(() => {
    const result = createTheme({
      palette: { mode },
      color: colorPalette,
      shadow: shadows,
      text: textStyle,
    });

    return result;
  }, [mode]);

  const muiTheme = useMemo(() => {
    const result = createMuiTheme({
      color: colorPalette,
      shadow: shadows,
      text: textStyle,
    });

    return result;
  }, []);

  const toggleMode = useCallback(
    () =>
      setMode(
        mode === PaletteMode.LIGHT ? PaletteMode.DARK : PaletteMode.LIGHT
      ),
    [mode]
  );

  return (
    <themeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>
      </ThemeProvider>
    </themeContext.Provider>
  );
};
