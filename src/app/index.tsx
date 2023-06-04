import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getAuthData, getUserInited } from '@/entities/User';
import { PageLoader } from '@/features/PageLoader';
import { MainLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    if (!inited) {
      dispatch(getAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <ToggleFeature
      name='isAppRedesigned'
      on={
        <div id='app' className={classNames('app_redesigned', [theme], {})}>
          <Suspense fallback=''>
            <MainLayout content={<AppRouter />} header={<Navbar />} sidebar={<Sidebar />} toolbar={<div>153485</div>} />
          </Suspense>
        </div>
      }
      off={
        <div id='app' className={classNames('app', [theme], {})}>
          <Suspense fallback=''>
            <Navbar />
            <main className='content-page'>
              <Sidebar />
              <AppRouter />
            </main>
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
