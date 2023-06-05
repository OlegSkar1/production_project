import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppToolbar } from './lib/useAppToolbar/useAppToolbar';
import { withTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import { getAuthData, getUserInited } from '@/entities/User';
import { PageLoader } from '@/features/PageLoader';
import { AppLoaderLayout, MainLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import './styles/index.scss';

const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();

  useEffect(() => {
    if (!inited) {
      dispatch(getAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeature
        name='isAppRedesigned'
        off={<PageLoader />}
        on={
          <div id='app' className={classNames('app_redesigned', [theme], {})}>
            <AppLoaderLayout />
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeature
      name='isAppRedesigned'
      on={
        <div id='app' className={classNames('app_redesigned', [theme], {})}>
          <Suspense fallback=''>
            <MainLayout content={<AppRouter />} header={<Navbar />} sidebar={<Sidebar />} toolbar={toolbar} />
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
});

export default withTheme(App);
