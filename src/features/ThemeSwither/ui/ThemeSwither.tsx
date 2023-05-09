import { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/Theme';
import { classNames } from '@/shared/lib';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui';

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither: React.FC<ThemeSwitherProps> = memo((props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={'clearInverted'} className={classNames('', [className], {})} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
