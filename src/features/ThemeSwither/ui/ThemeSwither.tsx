import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, Icon } from '@/shared/ui';

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither: React.FC<ThemeSwitherProps> = memo((props) => {
  const { className } = props;

  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleClickHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button variant={'clearInverted'} className={classNames('', [className], {})} onClick={toggleClickHandler}>
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  );
});
