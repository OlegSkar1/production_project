import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'app';

import { ErrorBoundary } from 'app/providers/errorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
