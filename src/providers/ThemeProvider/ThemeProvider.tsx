import { FC, ReactNode, useState } from "react";
import { ThemeContext } from "./useTheme";
import { Theme, ThemePreset } from "@/types/themeTypes";

type ThemeProviderProps = {
  children: ReactNode;
  theme?: Theme;
  preset?: ThemePreset;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = "light",
  preset = "default",
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  const presetClasName = `preset-${preset}`;
  const themeClassName = currentTheme === "light" ? "light" : "dark";

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      <div className={`${presetClasName} ${themeClassName}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
