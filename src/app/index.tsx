import { useTheme } from 'app/providers/ThemeProvider';
import { classNames as cn } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOOGLE</button>
    </div>
  );
};

export default App;
