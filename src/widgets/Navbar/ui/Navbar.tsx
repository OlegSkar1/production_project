import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getRouteArticleCreate } from '@/app/providers/router/config/consts';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { classNames } from '@/shared/lib';
import { AppLink, Button, HStack, Text } from '@/shared/ui';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <HStack max tagname='header' className={classNames(cls.navbar, [className], {})}>
        <Text title='Blog App' className={cls.title} />
        <HStack tagname='nav' gap='16' className={cls.links}>
          <AppLink to={getRouteArticleCreate()}>{t('Create article')}</AppLink>
          <HStack gap='16'>
            <NotificationButton />
            <AvatarDropdown />
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
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </HStack>
  );
});
