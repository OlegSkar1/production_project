import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './shared/ui';

import App from '@/app';

import { ErrorBoundary } from '@/app/providers/errorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

import './shared/config/i18n/i18n';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
