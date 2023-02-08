import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Suspense } from 'react';

const Component = () => {};

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
