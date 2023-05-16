import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/Theme';
import { classNames } from '@/shared/lib';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui';

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither: React.FC<ThemeSwitherProps> = memo((props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleClickHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button variant={'clearInverted'} className={classNames('', [className], {})} onClick={toggleClickHandler}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
