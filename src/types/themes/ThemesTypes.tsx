export type ThemeType = {
  colors: {
    background: string;
    surface: string;
    card: string;
    cardAlternative: string;
    text: string;
    textSecondary: string;
    primary: string;
    primarySoft: string;
    muted: string;
    accent: string;
    border: string;
  };

  isDark: boolean;
  toggleTheme: () => void;
  setDark: () => void;
  setLight: () => void;
};