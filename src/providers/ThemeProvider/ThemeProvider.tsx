import { FC, ReactNode, useEffect, useState } from "react";
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

  useEffect(() => {
    // Dynamically import CSS file based on the current theme
    import(`../../themes/${preset}.css`)
      .then(() => {
        // Apply the imported CSS file
        // document.documentElement.setAttribute("data-theme", currentTheme);
        console.log(`Theme loaded: ${preset}`);
      })
      .catch((err) =>
        console.error(`Failed to load the theme: ${preset}`, err)
      );
  }, [preset]);

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      <div className={currentTheme}>{children}</div>
    </ThemeContext.Provider>
  );
};
