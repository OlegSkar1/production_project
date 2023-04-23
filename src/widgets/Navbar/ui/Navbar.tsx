import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { generatePath } from 'react-router-dom';

import cls from './Navbar.module.scss';

import { routePath } from 'app/providers/router/config/routeConfig';
import { getUserAuthData, isAdminRole, isManagerRole, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppLink, Avatar, Button, Dropdown, HStack, Icon, Popover, Text } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isAdminRole);
  const isManager = useSelector(isManagerRole);

  const isUserAvailable = isAdmin || isManager;

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    console.log(authData.id);
    const profilePath = generatePath(routePath.profile, { id: authData.id });

    return (
      <HStack max tagname='header' className={classNames(cls.navbar, [className], {})}>
        <Text title='Blog App' className={cls.title} />
        <HStack tagname='nav' gap='16' className={cls.links}>
          <AppLink to={routePath.article_create}>{t('Create article')}</AppLink>
          <HStack gap='16'>
            <Popover trigger={<Icon Svg={NotificationIcon} />}>
              {/* <span>test1</span>
              <span>test1</span>
              <span>test1</span>
              <span>test1</span> */}
            </Popover>
            <Dropdown
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
              trigger={authData.avatar && <Avatar src={authData.avatar} alt={authData.username} size={30} />}
              direction='bottom left'
            />
          </HStack>
        </HStack>
      </HStack>
    );
  }

  return (
    <HStack max tagname='header' className={classNames(cls.navbar, [className], {})}>
      <Text title='Blog App' className={cls.title} />
      <Button variant='clearInverted' className={classNames(cls.links)} onClick={onShowModal}>
        {t('Sign in')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </HStack>
  );
});
