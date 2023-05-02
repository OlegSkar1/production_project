import { Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

import { classNames } from '@/shared/lib';
import { Loader, Modal } from '@/shared/ui';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal className={classNames('', [className], {})} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader className={cls.loader} />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
