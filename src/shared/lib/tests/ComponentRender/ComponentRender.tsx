import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { i18n } from 'i18next';
import { FC, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { Theme } from '@/shared/const/Theme';
import { ThemeProvider } from '@/shared/ui';
// eslint-disable-next-line olegskar-fsd-checker/layer-imports
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
  i18n?: i18n;
}

interface TestProviderProps {
  children: ReactNode;
  options?: ComponentRenderOptions;
}

export const TestProvider: FC<TestProviderProps> = ({ children, options = {} }) => {
  const { route = '/', initialState, asyncReducers, theme = Theme.LIGHT, i18n = i18nForTests } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
      >
        <I18nextProvider i18n={i18n}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}> {children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
  return render(<TestProvider options={options}>{component}</TestProvider>);
};
