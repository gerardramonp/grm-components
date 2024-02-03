import { Theme } from "@/types/themeTypes";
import { useContext, createContext } from "react";

type ThemeContext = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export function useTheme(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider component");
  }

  return context;
}
