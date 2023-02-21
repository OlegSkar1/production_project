/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

import { classNames } from 'shared/lib';
import { Button, Modal } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, [className], {})}>
      <Button variant='clear' className={classNames(cls.links)} onClick={onToggleModal}>
        {t('Sign in')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nulla quam vel rerum vero
        incidunt accusamus veritatis commodi provident sapiente?
      </Modal>
    </div>
  );
};
