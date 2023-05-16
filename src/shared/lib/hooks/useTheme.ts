import { useContext } from 'react';

import { ThemeContext } from '../../../app/providers/ThemeProvider/ui/ThemeProvider';

import { Theme } from '@/shared/const/Theme';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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
    saveAction?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
