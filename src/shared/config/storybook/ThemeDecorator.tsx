import { Story } from '@storybook/react';

import { Theme } from '@/shared/const/Theme';
import { ThemeProvider } from '@/shared/ui';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
