import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    setIsAuthModal(false);
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, [className], {})}>
        <Button variant='clear' className={classNames(cls.links)} onClick={onLogout}>
          {t('Sign out')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, [className], {})}>
      <Button variant='clear' className={classNames(cls.links)} onClick={onShowModal}>
        {t('Sign in')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
};
