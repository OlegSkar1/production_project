import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import ThemeIconRedesigned from '@/shared/assets/icons/theme.svg';
import { classNames } from '@/shared/lib';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <ButtonDeprecated
          variant={'clearInverted'}
          className={classNames('', [className], {})}
          onClick={toggleClickHandler}
        >
          <IconDeprecated Svg={ThemeIcon} width={40} height={40} inverted />
        </ButtonDeprecated>
      }
      on={<Icon Svg={ThemeIconRedesigned} width={40} height={40} clickable onClick={toggleClickHandler} />}
    />
  );
});
