import { Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
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
