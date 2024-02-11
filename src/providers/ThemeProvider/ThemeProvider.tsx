import { FC, ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";
import { Theme, ThemePreset } from "@/types/themeTypes";

type ThemeProviderProps = {
  children: ReactNode;
  theme?: Theme;
  preset?: ThemePreset;
};

const validThemes: Theme[] = ["light", "dark"];

const isThemeValid = (theme: string): theme is Theme => {
  return validThemes.includes(theme as Theme);
};

const validPresets: ThemePreset[] = ["default", "orange", "blue"];

const isPresetValid = (preset: string): preset is ThemePreset => {
  return validPresets.includes(preset as ThemePreset);
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = "light",
  preset = "default",
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  useEffect(() => {
    const newValue = isThemeValid(theme) ? theme : "light";
    setCurrentTheme(newValue);
  }, [theme]);

  const presetClasName = isPresetValid(preset)
    ? `preset-${preset}`
    : "preset-default";

  const themeClassName = isThemeValid(currentTheme) ? currentTheme : "light";

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      <div className={`${presetClasName} ${themeClassName}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
