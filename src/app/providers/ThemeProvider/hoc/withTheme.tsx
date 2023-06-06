import ThemeProvider from '../ui/ThemeProvider';

import { useJsonSettings } from '@/entities/User';

export const withTheme = (Component: React.ComponentType) => {
  return () => {
    const { theme: defaultTheme } = useJsonSettings();

    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    );
  };
};
