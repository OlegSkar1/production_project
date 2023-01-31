import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../ui/ThemeProvider';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

  const toggleTheme = () => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
