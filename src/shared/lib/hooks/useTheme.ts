import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';
import { ThemeContext } from '../../ui/ThemeProvider/ThemeProvider';

import { Theme } from '@/shared/const/Theme';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.BLUE;
        break;
      case Theme.BLUE:
        newTheme = Theme.DARK;
        break;
      default: {
        newTheme = Theme.LIGHT;
      }
    }
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
