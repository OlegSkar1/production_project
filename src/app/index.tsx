import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib';
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
    dispatch(userActions.getAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', [theme], {})}>
      <Suspense fallback=''>
        <Navbar />
        <main className='content-page'>
          <Sidebar />
          {inited && <AppRouter />}
        </main>
      </Suspense>
    </div>
  );
};

export default App;
