import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, isAdminRole, isManagerRole, useUserActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar, Dropdown } from '@/shared/ui';

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

  return (
    <Dropdown
      className={classNames('', [className], {})}
      items={[
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
          content: t('Sign out'),
          onClick: onLogout,
        },
      ]}
      trigger={authData?.avatar && <Avatar src={authData.avatar} alt={authData.username} size={30} />}
      direction='bottom left'
    />
  );
});
