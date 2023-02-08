import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwither.module.scss';

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither: React.FC<ThemeSwitherProps> = (props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames(cls.themeSwither, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
