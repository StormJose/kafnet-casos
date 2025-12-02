import { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../theme";



export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  const value = {
    darkMode,
    setDarkMode,
    toggleTheme: () => setDarkMode((prev) => !prev),
    theme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
