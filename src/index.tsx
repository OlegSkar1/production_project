import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ForceUpdateProvider } from './shared/lib/render/forceUpdate';

import App from '@/app';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/errorBoundary';

import './shared/config/i18n/i18n';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ForceUpdateProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ForceUpdateProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
