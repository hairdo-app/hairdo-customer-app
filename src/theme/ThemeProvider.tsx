import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { lightColors, darkColors } from "./colors";
import { ThemeType } from "../types/themes/ThemesTypes";


const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme();

  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    systemTheme === "dark" ? "dark" : "light"
  );

  const isDark = themeMode === "dark";

  const value: ThemeType = {
    colors: isDark ? darkColors : lightColors,
    isDark,
    toggleTheme: () =>
      setThemeMode(prev => (prev === "dark" ? "light" : "dark")),
    setDark: () => setThemeMode("dark"),
    setLight: () => setThemeMode("light"),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};