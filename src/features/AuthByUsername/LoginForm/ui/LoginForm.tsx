import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './LoginForm.module.scss';

import { classNames } from 'shared/lib';
import { Button, Input } from 'shared/ui';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const { t } = useTranslation();

  const loginHandler = (val: string) => {
    setLoginValue(val);
  };
  const passwordHandler = (val: string) => {
    setPasswordValue(val);
  };

  return (
    <div className={classNames(cls.loginForm, [className], {})}>
      <Input
        onChange={loginHandler}
        value={loginValue}
        type='text'
        label={t('Enter login')}
        autoFocus
      />
      <Input
        onChange={passwordHandler}
        value={passwordValue}
        type='password'
        label={t('Enter password')}
      />
      <Button className={cls.loginBtn}>{t('Sign in')}</Button>
    </div>
  );
};
