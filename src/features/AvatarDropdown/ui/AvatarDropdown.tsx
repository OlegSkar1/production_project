import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { generatePath } from 'react-router-dom';

import { routePath } from '@/app/providers/router/config/consts';
import { getUserAuthData, isAdminRole, isManagerRole, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar, Dropdown } from '@/shared/ui';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isAdminRole);
  const isManager = useSelector(isManagerRole);

  const isUserAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const profilePath = generatePath(routePath.profile, { id: authData?.id });

  return (
    <Dropdown
      className={classNames('', [className], {})}
      items={[
        ...(isUserAvailable
          ? [
              {
                content: t('adminPanel'),
                href: routePath.admin_panel,
              },
            ]
          : []),
        {
          content: t('profile'),
          href: profilePath,
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
