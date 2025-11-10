import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
  theme: MD3Theme;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  const theme = useMemo(() => (isDark ? MD3DarkTheme : MD3LightTheme), [isDark]);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme,
      theme,
    }),
    [isDark, toggleTheme, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext deve ser usado dentro de ThemeProvider');
  }
  return context;
};
