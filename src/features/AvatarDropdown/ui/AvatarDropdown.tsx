import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, isAdminRole, isManagerRole, useUserActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile, getRouteSettings } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups/Dropdown';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  const { logout } = useUserActions();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isAdminRole);
  const isManager = useSelector(isManagerRole);

  const isUserAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (!authData) return null;

  const items = [
    ...(isUserAvailable
      ? [
          {
            content: t('adminPanel'),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      content: t('profile'),
      href: authData && getRouteProfile(authData.id),
    },
    {
      content: t('settings'),
      href: getRouteSettings(),
    },
    {
      content: t('Sign out'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <DropdownDeprecated
          className={classNames('', [className], {})}
          items={items}
          trigger={<Avatar src={authData.avatar} alt={authData.username} size={30} />}
          direction='bottom left'
        />
      }
      on={
        <Dropdown
          className={classNames('', [className], {})}
          items={items}
          trigger={<Avatar src={authData.avatar} alt={authData.username} size={30} />}
          direction='bottom left'
        />
      }
    />
  );
});
