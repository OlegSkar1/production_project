import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.navbar, [className], {})}>
      <Button variant='clear' className={classNames(cls.links)} onClick={onShowModal}>
        {t('Sign in')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
