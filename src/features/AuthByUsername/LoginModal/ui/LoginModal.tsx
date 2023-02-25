import { LoginForm } from '../..//LoginForm/ui/LoginForm';

import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal className={classNames('', [className], {})} isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
